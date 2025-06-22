import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockListings } from '../data/listings';
import { getCohereResponse } from './cohereChat';
import ListingPreviewCard from './ListingPreviewCard';

const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'hi', name: 'Hindi' },
  { code: 'it', name: 'Italian' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'ru', name: 'Russian' },
  { code: 'zh', name: 'Chinese' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
];

// --- Analytics Logger (Simulation) ---
// In a real app, this would send data to a service like Google Analytics or Mixpanel.
const trackEvent = (eventName, payload = {}) => {
  console.log(`[ANALYTICS] Event: ${eventName}`, payload);
};
// -------------------------------------

const TypingIndicator = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '10px 15px' }}>
    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#888', animation: 'typing-bounce 1s infinite 0s' }} />
    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#888', animation: 'typing-bounce 1s infinite 0.2s' }} />
    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#888', animation: 'typing-bounce 1s infinite 0.4s' }} />
    <style>{`
      @keyframes typing-bounce {
        0%, 80%, 100% { transform: scale(0); }
        40% { transform: scale(1.0); }
      }
    `}</style>
  </div>
);

const TravelAssistantPanel = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isContentSectionVisible, setIsContentSectionVisible] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);
  const [chatHistoryForApi, setChatHistoryForApi] = useState([]);
  const messagesContainerRef = useRef(null);
  const [hoveredListing, setHoveredListing] = useState(null);
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });
  const [isTyping, setIsTyping] = useState(false);

  // --- Analytics Tracking Hooks ---
  useEffect(() => {
    if (isOpen) {
      trackEvent('chat_session_started');
    }
  }, [isOpen]);

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    const handleContainerClick = (event) => {
      const target = event.target;
      // Analytics for listing link clicks
      if (target.tagName === 'A' && target.href.includes('/listing/')) {
        const listingId = target.href.split('/listing/').pop();
        trackEvent('listing_link_clicked', { listingId, title: target.textContent });
      }
      // Handle "Save to Wishlist" clicks
      if (target.dataset.action === 'save-wishlist') {
        const listingId = target.dataset.listingId;
        trackEvent('wishlist_save_clicked', { listingId });
        alert(`Listing ${listingId} saved to your wishlist! (Simulation)`);
        // In a real app, you would call an API to save this to the user's account.
      }
    };

    const handleMouseOver = (event) => {
      if (event.target.tagName === 'A' && event.target.href.includes('/listing/')) {
        const listingId = parseInt(event.target.href.split('/listing/').pop(), 10);
        const listing = mockListings.find(l => l.id === listingId);
        setHoveredListing(listing);
        setPreviewPosition({ x: event.clientX, y: event.clientY });
      }
    };

    const handleMouseOut = (event) => {
      if (event.target.tagName === 'A') {
        setHoveredListing(null);
      }
    };
    
    container.addEventListener('click', handleContainerClick);
    container.addEventListener('mouseover', handleMouseOver);
    container.addEventListener('mouseout', handleMouseOut);

    return () => {
      container.removeEventListener('click', handleContainerClick);
      container.removeEventListener('mouseover', handleMouseOver);
      container.removeEventListener('mouseout', handleMouseOut);
    };
  }, [messages]);

  // Helper function to create listing links with actions
  const createListingLink = (listing) => {
    const buttonStyle = `
      background: #007bff; 
      color: white; 
      padding: 4px 10px; 
      border-radius: 6px; 
      text-decoration: none; 
      font-size: 13px;
      border: none;
      cursor: pointer;
    `;
    return `
      <div style="padding: 5px 0;">
        <a href="/listing/${listing.id}" style="color: #00aaff; text-decoration: underline; font-weight: bold;">${listing.title}</a>
        <div style="padding-top: 8px; display: flex; gap: 8px;">
          <a href="/listing/${listing.id}" style="${buttonStyle}">Book Now</a>
          <button data-action="save-wishlist" data-listing-id="${listing.id}" style="${buttonStyle.replace('#007bff', '#555')}">Save to Wishlist</button>
        </div>
      </div>
    `;
  };

  const handleFeedback = (messageId, feedback) => {
    setMessages(prevMessages =>
      prevMessages.map(msg =>
        msg.id === messageId ? { ...msg, feedback } : msg
      )
    );
    trackEvent('feedback_provided', { messageId, feedback });
  };

  const handleSendMessage = async (messageText = inputMessage) => {
    messageText = String(messageText || '');
    if (messageText.trim() !== '') {
      trackEvent('user_message_sent', { language: 'en', query: messageText });
      const newMessage = { id: Date.now(), text: messageText, sender: 'user', lang: 'en', feedback: null, timestamp: new Date() };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setInputMessage('');
      setIsContentSectionVisible(false);
      setIsTyping(true);

      const updatedHistory = [...chatHistoryForApi, { role: 'USER', message: messageText }];
      setChatHistoryForApi(updatedHistory);

      setTimeout(async () => {
        const lowerCaseMessage = messageText.toLowerCase();
        let aiResponse = "I'm sorry, I couldn't understand your request.";
        let matched = false;
        let responseType = 'rule_based';

        // 10. General Inquiries (Broader checks first)
        if (lowerCaseMessage.includes("what is stayfinder") || lowerCaseMessage.includes("about stayfinder")) {
          aiResponse = "Stay Finder is a platform where you can discover unique accommodations and book stays around the world. We connect guests with hosts offering a variety of places, from cozy apartments to luxury villas.";
          matched = true;
        } else if (lowerCaseMessage.includes("safe") || lowerCaseMessage.includes("safety")) {
          aiResponse = "Yes, Stay Finder prioritizes your safety. We have verification processes for hosts, secure payment systems, and 24/7 support. You can also review safety information on our platform.";
          matched = true;
        } else if (lowerCaseMessage.includes("customer support") || lowerCaseMessage.includes("help")) {
          aiResponse = "For customer support, you can visit our Help Center, which is accessible via the Support section in our footer. Our team is available to assist you with any concerns.";
        } else if (lowerCaseMessage.includes("how does the ai assistant work")) {
          aiResponse = "I am an AI-powered travel assistant designed to help you with questions about stays, amenities, locations, booking processes, and general information about Stay Finder. Just ask!";
        } else if (lowerCaseMessage.includes("mobile") || lowerCaseMessage.includes("app")) {
          aiResponse = "Yes, Stay Finder is designed to be fully responsive and works great on all mobile devices. You can access our services directly through your mobile browser.";
        }
        // 5. Host & Guest Experience (Related to hosting and contact)
        else if (lowerCaseMessage.includes("host property") || lowerCaseMessage.includes("become a host") || lowerCaseMessage.includes("how to host")) {
          aiResponse = "To become a host, simply click on the 'Become a Host' button in the navigation bar. You'll be guided through the process of listing your space, setting prices, and welcoming guests.";
        } else if (lowerCaseMessage.includes("contact the host") || lowerCaseMessage.includes("contact host")) {
          aiResponse = "Once you have a confirmed booking, you'll be able to communicate directly with your host through our secure messaging system. For pre-booking questions, you can often find host contact options on the listing page.";
        } else if (lowerCaseMessage.includes("host verified") || lowerCaseMessage.includes("are hosts verified")) {
          aiResponse = "Yes, Stay Finder encourages and facilitates host verification processes to ensure a trustworthy community. Look for verification badges on host profiles.";
        } else if (lowerCaseMessage.includes("hosts provide breakfast") || lowerCaseMessage.includes("breakfast")) {
          aiResponse = "Some hosts may offer breakfast as an amenity. Please check the 'Amenities' section of the specific listing you are interested in for details.";
        } else if (lowerCaseMessage.includes("who is the host")) {
          aiResponse = "The host's name is typically visible on the listing details page. If you are asking about a specific property, please mention its name.";
        }
        // 8. Account & Profile
        else if (lowerCaseMessage.includes("sign up") || lowerCaseMessage.includes("how do i sign up") || lowerCaseMessage.includes("register")) {
          aiResponse = "You can sign up by clicking the 'Sign Up' button in the top right corner of the navigation bar. It's a quick and easy process to create your account.";
        } else if (lowerCaseMessage.includes("forgot my password") || lowerCaseMessage.includes("reset password")) {
          aiResponse = "If you forgot your password, please go to the login page and click on the 'Forgot Password' link. You will receive instructions to reset it via your registered email.";
        } else if (lowerCaseMessage.includes("edit my profile") || lowerCaseMessage.includes("edit profile")) {
          aiResponse = "You can edit your profile by logging into your account and navigating to the 'Profile Settings' section. There you can update your personal information and preferences.";
        } else if (lowerCaseMessage.includes("see my bookings") || lowerCaseMessage.includes("my bookings")) {
          aiResponse = "To see your bookings, please log into your account and go to the 'My Bookings' or 'Trips' section. All your confirmed and past bookings will be listed there.";
        }
        // 6. Payment & Pricing
        else if (lowerCaseMessage.includes("price per night") || lowerCaseMessage.includes("what is the price")) {
          aiResponse = "The price per night varies greatly depending on the property, location, and time of year. You can see the specific price on each listing's detail page, or use our search filters to find stays within your budget.";
        } else if (lowerCaseMessage.includes("hidden charges") || lowerCaseMessage.includes("extra fees")) {
          aiResponse = "Stay Finder aims for transparency. Any additional charges, such as cleaning fees or service fees, will be clearly itemized before you confirm your booking. The final price shown includes all applicable fees.";
        } else if (lowerCaseMessage.includes("accept paypal") || lowerCaseMessage.includes("payment methods")) {
          aiResponse = "Stay Finder accepts major credit cards and other secure online payment methods. Specific payment options are displayed during the checkout process.";
        } else if (lowerCaseMessage.includes("security deposit") || lowerCaseMessage.includes("deposit")) {
          aiResponse = "Some properties may require a security deposit. This information will be clearly stated on the listing page and during the booking process. The deposit is typically refunded after your stay, assuming no damages.";
        } else if (lowerCaseMessage.includes("refund if i cancel") || lowerCaseMessage.includes("get a refund")) {
          aiResponse = "Our refund policy depends on the specific listing's cancellation policy, which is set by the host. You can find this information on each listing's page. We recommend reviewing it before booking.";
        }
        // 9. Language / Accessibility
        else if (lowerCaseMessage.includes("talk to host in spanish") || lowerCaseMessage.includes("spanish")) {
          aiResponse = "Communication with hosts is primarily in the language they set for their listing. While our platform offers translation tools, direct communication would be in the host's preferred language. You can check the host's profile for languages they speak.";
        } else if (lowerCaseMessage.includes("wheelchair accessible") || lowerCaseMessage.includes("accessible property")) {
          aiResponse = "We do have properties that are wheelchair accessible. Please use the 'Accessibility' filter in our search options to find listings that meet your specific needs.";
        }
        // 4. Trip Planning / Recommendations
        else if (lowerCaseMessage.includes("travel itinerary suggestions") || lowerCaseMessage.includes("itinerary suggestions")) {
          aiResponse = "Here are some popular travel itinerary suggestions:\n\n• **City Break (3-4 days)**: Explore downtown areas, visit museums, try local cuisine, and enjoy nightlife.\n• **Beach Getaway (5-7 days)**: Relax by the ocean, water sports, beachside dining, and sunset walks.\n• **Mountain Retreat (4-6 days)**: Hiking trails, scenic drives, cozy evenings by the fireplace, and outdoor activities.\n• **Cultural Trip (5-7 days)**: Visit historical sites, local markets, traditional restaurants, and cultural events.\n\nFor specific destinations, let me know where you're planning to go and I can provide more detailed suggestions!";
        } else if (lowerCaseMessage.includes("local events") || lowerCaseMessage.includes("events near me")) {
          aiResponse = "For local events, I recommend:\n\n• **Check local tourism websites** for upcoming festivals, concerts, and cultural events\n• **Visit city event calendars** for seasonal activities and celebrations\n• **Ask your host** about neighborhood events and local recommendations\n• **Use social media** to follow local event pages and tourism boards\n• **Check with the local chamber of commerce** for business and community events\n\nIf you tell me your specific destination and dates, I can help you find relevant events in that area!";
        } else if (lowerCaseMessage.includes("plan a trip to japan")) {
          aiResponse = "Planning a trip to Japan sounds wonderful! I recommend looking into stays in Tokyo for a vibrant city experience, or Kyoto for traditional culture. For detailed itineraries, you can explore our 'Travel itinerary suggestions' prompt.";
        } else if (lowerCaseMessage.includes("romantic getaway") || lowerCaseMessage.includes("romantic trip")) {
          const romanticStays = mockListings.filter(l => l.amenities.includes('Fireplace') || l.amenities.includes('Hot Tub') || l.title.toLowerCase().includes('villa')).map(l => l.title);
          const romanticStaysWithLinks = mockListings.filter(l => l.amenities.includes('Fireplace') || l.amenities.includes('Hot Tub') || l.title.toLowerCase().includes('villa')).map(l => createListingLink(l));
          aiResponse = romanticStaysWithLinks.length > 0 ? `For a romantic getaway, you might enjoy ${romanticStaysWithLinks.join(', ')}. These offer great ambiance and privacy.` : "For romantic getaways, consider secluded cabins, villas with private pools, or properties with great views. We can help you find something perfect!";
        } else if (lowerCaseMessage.includes("solo travelers") || lowerCaseMessage.includes("solo trip")) {
          const soloStaysWithLinks = mockListings.filter(l => l.maxGuests <= 2 && (l.amenities.includes('WiFi') || l.amenities.includes('Kitchen'))).map(l => createListingLink(l));
          aiResponse = soloStaysWithLinks.length > 0 ? `For solo travelers, our cozy apartments like ${soloStaysWithLinks.join(', ')} are often ideal, offering comfort and convenience.` : "For solo travelers, cozy apartments or small studios in well-connected areas are often a great choice. Look for listings with good amenities like WiFi and kitchens.";
        } else if (lowerCaseMessage.includes("top destinations for summer") || lowerCaseMessage.includes("summer destinations")) {
          aiResponse = "Popular summer destinations often include beachside locations like Miami and Maldives, or lake houses for a refreshing escape. You can explore listings in these areas!";
        } else if (lowerCaseMessage.includes("travel on a budget") || lowerCaseMessage.includes("budget travel")) {
          aiResponse = "To travel on a budget, consider filtering stays by 'Max Price' in our search bar, or look for apartments and studios which are often more affordable than larger villas.";
        } else if (lowerCaseMessage.includes("weekend trip") || lowerCaseMessage.includes("short trip")) {
          aiResponse = "For a weekend trip, destinations like bustling city apartments or serene countryside cabins are popular. Consider your preferred activities to narrow down the best spot!";
        } else if (lowerCaseMessage.includes("adventure travel") || lowerCaseMessage.includes("adventure trip")) {
          const adventureStaysWithLinks = mockListings.filter(l => l.location.toLowerCase().includes('aspen') || l.title.toLowerCase().includes('igloo')).map(l => createListingLink(l));
          aiResponse = adventureStaysWithLinks.length > 0 ? `For adventure travel, destinations near mountains like ${adventureStaysWithLinks.join(', ')} could be perfect! Look for properties that offer access to outdoor activities.` : "For adventure travel, destinations near mountains like Aspen or unique stays like the Arctic Igloo Stay could be perfect! Look for properties that offer access to outdoor activities.";
        }
        // 2. Booking and Availability (General booking process)
        else if (lowerCaseMessage.includes("available from") && lowerCaseMessage.includes("to") && lowerCaseMessage.includes("july")) {
          aiResponse = "To check specific availability for [property name] from 10th to 15th July, please use the check-in and check-out date filters on the listing's page or our main search bar. We can't check real-time availability here.";
        } else if (lowerCaseMessage.includes("how can i book this stay") || lowerCaseMessage.includes("book this stay")) {
          aiResponse = "To book a stay, navigate to the desired listing's details page, select your dates, and click 'Book Now'. You'll then proceed to a secure checkout process.";
        } else if (lowerCaseMessage.includes("can i pay later") || lowerCaseMessage.includes("pay later")) {
          aiResponse = "Payment is typically required at the time of booking to confirm your reservation. We do not currently offer a 'pay later' option for most listings.";
        } else if (lowerCaseMessage.includes("modify my booking") || lowerCaseMessage.includes("change booking")) {
          aiResponse = "To modify your booking, please go to 'My Bookings' in your account. Options to change dates or details depend on the host's policy and availability. You may need to contact the host directly.";
        } else if (lowerCaseMessage.includes("extend my stay") || lowerCaseMessage.includes("extend booking")) {
          aiResponse = "To extend your stay, please contact your host directly through the platform's messaging system. They will be able to confirm availability and adjust your reservation.";
        } else if (lowerCaseMessage.includes("cancel my booking") || lowerCaseMessage.includes("cancel booking")) {
          aiResponse = "You can cancel your booking through the 'My Bookings' section in your account. Please be aware that cancellation policies vary by listing, and a refund may depend on the host's specific rules.";
        }
        // 3. Location and Directions
        else if (lowerCaseMessage.includes("how far is this place from the airport")) {
          aiResponse = "Specific distances from the airport are usually provided on the listing's detail page under the 'Location' or 'Getting There' sections. It varies by property.";
        } else if (lowerCaseMessage.includes("close to downtown") || lowerCaseMessage.includes("near downtown")) {
          aiResponse = "Many of our city listings are located close to downtown areas. You can check the location details on the individual listing pages or use our search filters for city centers.";
        } else if (lowerCaseMessage.includes("nearest metro station") || lowerCaseMessage.includes("public transport")) {
          aiResponse = "Information about the nearest metro station or public transport options is usually provided in the listing's description or location details. We recommend checking the specific listing page for precise guidance.";
        } else if (lowerCaseMessage.includes("stays near eiffel tower") || lowerCaseMessage.includes("near eiffel tower")) {
          aiResponse = "We don't currently have specific filters for landmarks like the Eiffel Tower, but you can search for stays in 'Paris, France' and then explore the map view for properties close to your desired landmark.";
        } else if (lowerCaseMessage.includes("quiet neighborhood") || lowerCaseMessage.includes("quiet area")) {
          aiResponse = "While we don't have a specific filter for 'quiet neighborhood,' many listings describe their surroundings. Look for descriptions mentioning 'peaceful,' 'residential,' or 'secluded' areas, or consider countryside and mountain retreats.";
        }
        // 7. Amenities
        else if (lowerCaseMessage.includes("wifi") || lowerCaseMessage.includes("internet")) {
          aiResponse = "Most of our properties offer WiFi. Please check the 'Amenities' section on the individual listing page to confirm if a specific property has WiFi.";
        } else if (lowerCaseMessage.includes("kitchen") || lowerCaseMessage.includes("cooking")) {
          aiResponse = "Many of our apartments and homes come with a fully equipped kitchen. Look for 'Kitchen' in the 'Amenities' list on the listing details page.";
        } else if (lowerCaseMessage.includes("towels and toiletries provided") || lowerCaseMessage.includes("toiletries") || lowerCaseMessage.includes("towels")) {
          aiResponse = "Whether towels and toiletries are provided depends on the host. This information is typically detailed under the 'Amenities' or 'What's included' section of each listing.";
        } else if (lowerCaseMessage.includes("jacuzzi") || lowerCaseMessage.includes("hot tub")) {
          const jacuzziStaysWithLinks = mockListings.filter(l => l.amenities.includes('Hot Tub')).map(l => createListingLink(l));
          aiResponse = jacuzziStaysWithLinks.length > 0 ? `Yes, properties like ${jacuzziStaysWithLinks.join(', ')} offer a hot tub or jacuzzi. Check the amenities for more.` : "We do have properties with jacuzzis or hot tubs! Please use the amenities filter during your search to find them.";
        } else if (lowerCaseMessage.includes("daily housekeeping") || lowerCaseMessage.includes("housekeeping")) {
          aiResponse = "Daily housekeeping is typically offered in select luxury listings or as an optional add-on service by some hosts. Please check the specific listing details or inquire with the host.";
        }
        // 1. Accommodation Related (More specific listing queries and filters)
        else if (lowerCaseMessage.includes("best places to stay in")) {
          const cityMatch = lowerCaseMessage.match(/best places to stay in (\w+)/);
          if (cityMatch && cityMatch[1]) {
            const city = cityMatch[1].charAt(0).toUpperCase() + cityMatch[1].slice(1);
            const listingsInCityWithLinks = mockListings.filter(l => l.location.toLowerCase().includes(city.toLowerCase())).map(l => createListingLink(l));
            aiResponse = listingsInCityWithLinks.length > 0 ? `In ${city}, popular stays include: ${listingsInCityWithLinks.join(', ')}.` : `I don't have specific data for best places in ${city}, but you can search for listings there!`;
          } else {
            aiResponse = "Please specify which city you are interested in. For example: 'What are the best places to stay in New York?'.";
          }
        } else if (lowerCaseMessage.includes("stays under $100")) {
          const affordableStaysWithLinks = mockListings.filter(l => l.price < 100).map(l => createListingLink(l));
          aiResponse = affordableStaysWithLinks.length > 0 ? `We have some great options under $100, such as: ${affordableStaysWithLinks.join(', ')}. Prices are per night.` : "Currently, we don't have listings available under $100. Our prices vary, but you can adjust your budget in the search filters.";
        } else if (lowerCaseMessage.includes("pet-friendly rentals") || lowerCaseMessage.includes("pet friendly")) {
          const petFriendlyStaysWithLinks = mockListings.filter(l => l.amenities.includes('Pet Friendly')).map(l => createListingLink(l));
          aiResponse = petFriendlyStaysWithLinks.length > 0 ? `Yes, we have pet-friendly options like: ${petFriendlyStaysWithLinks.join(', ')}. Always confirm specific pet policies with the host.` : "Yes, we do have pet-friendly rentals! Please use the 'Pet Friendly' filter in your search to see available options.";
        } else if (lowerCaseMessage.includes("places with a swimming pool") || lowerCaseMessage.includes("swimming pool")) {
          const poolStaysWithLinks = mockListings.filter(l => l.amenities.includes('Pool') || l.amenities.includes('Private Pool')).map(l => createListingLink(l));
          aiResponse = poolStaysWithLinks.length > 0 ? `Certainly! You can find stays with a swimming pool such as: ${poolStaysWithLinks.join(', ')}. Look for 'Pool' or 'Private Pool' in the amenities.` : "Yes, we have properties with swimming pools! You can use the amenities filter in your search to find them.";
        } else if (lowerCaseMessage.includes("2 bedrooms and 2 bathrooms") || lowerCaseMessage.includes("2 bed 2 bath")) {
          const matchingStaysWithLinks = mockListings.filter(l => l.bedrooms === 2 && l.bathrooms === 2).map(l => createListingLink(l));
          aiResponse = matchingStaysWithLinks.length > 0 ? `We have properties like ${matchingStaysWithLinks.join(', ')} that offer 2 bedrooms and 2 bathrooms.` : "We have many properties with varying numbers of bedrooms and bathrooms. Please use the relevant filters in your search for precise results.";
        } else if (lowerCaseMessage.includes("beachfront properties") || lowerCaseMessage.includes("beach access")) {
          const beachfrontStaysWithLinks = mockListings.filter(l => l.amenities.includes('Beach Access') || l.amenities.includes('Private Beach') || l.title.toLowerCase().includes('beach')).map(l => createListingLink(l));
          aiResponse = beachfrontStaysWithLinks.length > 0 ? `Absolutely! Check out beachfront properties like: ${beachfrontStaysWithLinks.join(', ')}. These offer great ocean views and access.` : "Yes, we do offer beachfront properties and stays with beach access! You can often find them by searching for coastal locations or looking for 'Beach Access' in amenities.";
        } else if (lowerCaseMessage.includes("cottages or cabins in the woods") || lowerCaseMessage.includes("forest cabin") || lowerCaseMessage.includes("countryside barn")) {
          const cabinStaysWithLinks = mockListings.filter(l => l.title.toLowerCase().includes('cabin') || l.title.toLowerCase().includes('cottage') || l.title.toLowerCase().includes('barn loft')).map(l => createListingLink(l));
          aiResponse = cabinStaysWithLinks.length > 0 ? `Yes, we have charming options like: ${cabinStaysWithLinks.join(', ')}. Perfect for a retreat in nature!` : "Yes, we feature charming cottages and cabins in natural settings. Search for 'cabin' or 'cottage' to find them.";
        } else if (lowerCaseMessage.includes("best ratings") || lowerCaseMessage.includes("highest rated")) {
          const highlyRatedWithLinks = mockListings.filter(l => l.rating >= 4.8).map(l => `${createListingLink(l)} (Rating: ${l.rating})`);
          aiResponse = highlyRatedWithLinks.length > 0 ? `Some of our highest-rated stays include: ${highlyRatedWithLinks.join(', ')}. You can also sort search results by 'Highest Rated'.` : "Many of our stays have excellent ratings! You can sort search results by 'Highest Rated' to find top-tier properties.";
        } else if (lowerCaseMessage.includes("luxury villas in bali") || (lowerCaseMessage.includes("luxury") && lowerCaseMessage.includes("bali"))) {
          const baliVillasWithLinks = mockListings.filter(l => l.location.toLowerCase().includes('bali') && l.price >= 300).map(l => createListingLink(l));
          aiResponse = baliVillasWithLinks.length > 0 ? `Indeed! We have luxury villas in Bali such as: ${baliVillasWithLinks.join(', ')}. They often feature private pools and stunning views.` : "Yes, we feature luxurious villas in Bali! Search for 'Bali' and explore listings for high-end options.";
        } else if (lowerCaseMessage.includes("cancellation policy") || lowerCaseMessage.includes("cancel policy")) {
          aiResponse = "The cancellation policy varies for each listing, as it's set by the individual host. You can find the specific cancellation terms on the listing details page before you book.";
        }
        // Listing-specific questions (most specific check)
        else {
          const foundListing = mockListings.find(listing => 
            lowerCaseMessage.includes(listing.title.toLowerCase())
          );
          if (foundListing) {
            aiResponse = `For ${createListingLink(foundListing)} in ${foundListing.location}, it's priced at $${foundListing.price}/night. It features amenities like ${foundListing.amenities.join(", ")} and is described as '${foundListing.description}'.`;
            matched = true;
          }
        }

        if (!matched) {
          responseType = 'cohere_ai';
          try {
            aiResponse = await getCohereResponse(updatedHistory);
            // --- NEW FEATURE: Auto-link listing names in Cohere responses ---
            mockListings.forEach(listing => {
              // Use a regex to match the listing title as a whole word, case-insensitive
              const regex = new RegExp(`(?<![>\w])(${listing.title})(?![<\w])`, 'gi');
              aiResponse = aiResponse.replace(regex, createListingLink(listing));
            });
            // -------------------------------------------------------------
          } catch (err) {
            console.error('Cohere API error:', err);
            aiResponse = 'Sorry, the AI is currently unavailable.';
          }
        }
        trackEvent('ai_response_generated', { type: responseType });

        setChatHistoryForApi(prev => [...prev, { role: 'CHATBOT', message: aiResponse }]);
        setIsTyping(false);
        setMessages(prevMessages => [...prevMessages, { id: Date.now() + 1, text: aiResponse, sender: 'ai', lang: 'en', feedback: null, timestamp: new Date() }]);
      }, 2000);
    }
  };

  const handleSpeak = (message) => {
    if (!('speechSynthesis' in window)) {
      alert('Text-to-speech is not supported in this browser.');
      return;
    }
    const textToSpeak = message.text.replace(/<[^>]+>/g, '');
    const utterance = new window.SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert('Speech recognition is not supported in this browser.');
      return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!recognitionRef.current) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.interimResults = false;
      recognitionRef.current.maxAlternatives = 1;
      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputMessage(transcript);
        setIsListening(false);
      };
      recognitionRef.current.onerror = () => setIsListening(false);
      recognitionRef.current.onend = () => setIsListening(false);
    }
    recognitionRef.current.lang = 'en-US';
    setIsListening(true);
    recognitionRef.current.start();
  };

  const messageBubbleStyle = (sender) => ({
    padding: '12px 18px',
    borderRadius: '20px',
    backgroundColor: sender === 'user' ? '#007bff' : '#3a3a3a',
    color: '#f0f0f0',
    wordBreak: 'break-word',
    lineHeight: '1.5',
  });

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const panelStyle = {
    position: 'fixed',
    top: '0',
    right: '0',
    width: '400px',
    height: '100%',
    backgroundColor: '#1C1C1E',
    color: '#f0f0f0',
    boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.4s ease-in-out',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  };

  const headerStyle = {
    padding: '20px',
    background: 'linear-gradient(135deg, #2a2a2e 0%, #1a1a1e 100%)',
    borderBottom: '1px solid #333',
    position: 'relative',
  };
  
  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    color: '#888',
    fontSize: '24px',
    cursor: 'pointer',
  };

  const inputAreaStyle = {
    display: 'flex',
    marginTop: '15px',
    backgroundColor: '#3a3a3a',
    borderRadius: '12px',
    padding: '5px',
  };

  const inputFieldStyle = {
    flexGrow: 1,
    border: 'none',
    background: 'none',
    color: '#f0f0f0',
    fontSize: '1rem',
    outline: 'none',
    padding: '10px',
  };

  const sendButtonStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '1.5rem',
    cursor: 'pointer',
  };

  const welcomeSectionStyle = {
    padding: '20px',
    textAlign: 'center',
  };

  const promptButtonStyle = {
    width: '100%',
    padding: '15px',
    marginBottom: '15px',
    borderRadius: '12px',
    border: '1.5px solid #444',
    background: 'rgba(255, 255, 255, 0.05)',
    color: '#e0e0e0',
    fontSize: '1rem',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'background-color 0.2s, border-color 0.2s',
  };

  return (
    <>
      <ListingPreviewCard listing={hoveredListing} position={previewPosition} />
      <div style={panelStyle}>
        <div style={headerStyle}>
          <button style={closeButtonStyle} onClick={onClose}>&times;</button>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: 0 }}>AI Travel Assistant <span style={{fontSize: 12, padding: '3px 6px', background: '#007bff', borderRadius: 5}}>AI</span></h2>
          <p style={{ color: '#aaa', margin: '5px 0 0 0' }}>Get guidance on stays or connect with support.</p>
          <div style={inputAreaStyle}>
            <input
              id="chat-input"
              name="chat-input"
              style={inputFieldStyle}
              placeholder="Ask a question..."
              value={inputMessage}
              onChange={e => setInputMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <button style={sendButtonStyle} onClick={handleSendMessage}>➔</button>
          </div>
        </div>
        
        {messages.length === 0 && isContentSectionVisible ? (
          <div style={welcomeSectionStyle}>
            <h3 style={{fontWeight: 600, color: '#ccc'}}>Want help getting started?</h3>
            <p style={{color: '#888'}}>Tell us a little bit about what you're looking for.</p>
            <button style={promptButtonStyle} onClick={() => handleSendMessage("Show me pet-friendly stays under $200")}>Show me pet-friendly stays</button>
            <button style={promptButtonStyle} onClick={() => handleSendMessage("What are your highest-rated stays?")}>What are your highest-rated stays?</button>
            <button style={promptButtonStyle} onClick={() => handleSendMessage("Find a cabin in the woods")}>Find a cabin in the woods</button>
          </div>
        ) : (
          <div style={{ flex: 1, overflowY: 'auto', padding: '10px' }} ref={messagesContainerRef}>
            {messages.map((msg) => (
              <div key={msg.id} style={{ display: 'flex', gap: '10px', flexDirection: 'row', alignItems: 'flex-end', marginBottom: '15px', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                {msg.sender === 'ai' && <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><img src='/assets/chatbot-icon.png' alt='chat-bot'></img></div>}
                <div style={{ maxWidth: '80%' }}>
                  <div style={messageBubbleStyle(msg.sender)}>
                    {msg.sender === 'ai' ? (
                      <div>
                        <div dangerouslySetInnerHTML={{ __html: typeof msg.text === 'string' ? msg.text : JSON.stringify(msg.text) }} />
                        <div style={{ paddingTop: 8, marginTop: 8, borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: 8 }}>
                          <button
                            title="Read aloud"
                            style={{ background: 'none', border: 'none', color: '#ccc', cursor: 'pointer', fontSize: 16, padding: 0 }}
                            onClick={() => handleSpeak(msg)}
                          ><img src='/assets/play-icon.png' alt='play-icon'></img></button>
                          <div style={{flexGrow: 1}} />
                          <button
                            title="Good response"
                            style={{ background: msg.feedback === 'up' ? '#007bff' : 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: 14, padding: '2px 6px', borderRadius: 4 }}
                            onClick={() => handleFeedback(msg.id, 'up')}
                          ><img src='/assets/thumbup-icon.png' alt='thumb-up'></img></button>
                          <button
                            title="Bad response"
                            style={{ background: msg.feedback === 'down' ? '#dc3545' : 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: 14, padding: '2px 6px', borderRadius: 4 }}
                            onClick={() => handleFeedback(msg.id, 'down')}
                          ><img src='/assets/thumbdown-icon.png' alt='thumb-down'></img></button>
                        </div>
                      </div>
                    ) : (
                      typeof msg.text === 'string' ? msg.text : JSON.stringify(msg.text)
                    )}
                  </div>
                  <div style={{ fontSize: 11, color: '#888', textAlign: msg.sender === 'user' ? 'right' : 'left', padding: '4px 8px' }}>{formatTime(msg.timestamp)}</div>
                </div>
                {msg.sender === 'user' && <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#007bff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><img src='/assets/user-icon.png' alt='user-icon'></img></div>}
              </div>
            ))}
            {isTyping && <TypingIndicator />}
          </div>
        )}
        
        <div style={{ padding: '15px', fontSize: '12px', color: '#888', textAlign: 'center', borderTop: '1px solid #333' }}>
          By chatting, you agree to our <a href="#" style={{color: '#00aaff'}}>Terms of Service</a>.
        </div>
      </div>
    </>
  );
};

export default TravelAssistantPanel; 