// Insert your Cohere API key here
const COHERE_API_KEY = 'RSIiqrvjllYXUqUEGhthMUPbMpdoDkyRrMHPMWnJ';

import { mockListings } from '../data/listings';

function getListingsSummary() {
  return mockListings.slice(0, 10).map(listing => {
    return `Title: ${listing.title}\nLocation: ${listing.location}\nPrice: $${listing.price}/night\nAmenities: ${listing.amenities.join(', ')}\nRating: ${listing.rating}\nDescription: ${listing.description}`;
  }).join('\n---\n');
}

export async function getCohereResponse(chatHistory) {
  const listingsSummary = getListingsSummary();
  const preamble = `
You are an AI assistant for Stay Finder, a platform for booking unique accommodations and travel stays. 
Only answer questions related to Stay Finder, its listings, booking process, amenities, locations, and travel help. 
If a question is not about Stay Finder, politely say you can only answer Stay Finder-related questions.
Here are some Stay Finder listings you can reference when answering questions:\n\n${listingsSummary}\n`;

  const lastMessage = chatHistory.pop();

  const response = await fetch('https://api.cohere.ai/v1/chat', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${COHERE_API_KEY}`,
      'Content-Type': 'application/json',
      'Cohere-Version': '2022-12-06'
    },
    body: JSON.stringify({
      model: 'command',
      message: lastMessage.message,
      chat_history: chatHistory.map(msg => ({ ...msg, message: msg.message.replace(/<[^>]+>/g, '') })),
      preamble,
      temperature: 0.3,
    }),
  });

  const data = await response.json();
  if (data.text) {
    return data.text.trim();
  } else if (data.message) {
    return 'Error: ' + data.message;
  } else {
    return 'No response from Cohere model.';
  }
} 