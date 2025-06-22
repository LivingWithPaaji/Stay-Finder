const mockListings = [
  {
    id: 1,
    title: 'Cozy Downtown Apartment',
    description: 'A cozy apartment in the heart of the city, close to all attractions.',
    location: 'New York, USA',
    price: 120,
    images: [
      '/cozy-downtown-apartment/cozy.jpg',
      '/cozy-downtown-apartment/cozy2.jpg',
    ],
    amenities: ['WiFi', 'Kitchen', 'Air Conditioning'],
    hostName: 'Host User 1',
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    availability: [],
    rating: 4.5,
    reviews: [],
    createdAt: '2024-01-26T12:00:00.000Z'
  },
  {
    id: 2,
    title: 'Modern Loft with City View',
    description: 'Enjoy a modern loft with a stunning view of the skyline.',
    location: 'Los Angeles, USA',
    price: 200,
    images: [
      '/modern-loft-with-city-view/Modern.jpg',
      '/modern-loft-with-city-view/Modern2.jpg',
    ],
    amenities: ['WiFi', 'Pool', 'Parking'],
    hostName: 'Host User 1',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    availability: [],
    rating: 4.8,
    reviews: [],
    createdAt: '2024-01-26T12:05:00.000Z'
  },
  {
    id: 3,
    title: 'Beachside Bungalow',
    description: 'Relax in this charming bungalow just steps from the beach.',
    location: 'Miami, USA',
    price: 180,
    images: [
      '/beachside-bungalow/Beachside.jpg',
      '/beachside-bungalow/Beachside2.jpg',
    ],
    amenities: ['WiFi', 'Beach Access', 'Breakfast'],
    hostName: 'Host User 1',
    maxGuests: 3,
    bedrooms: 1,
    bathrooms: 1,
    availability: [],
    rating: 4.6,
    reviews: [],
    createdAt: '2024-01-26T12:10:00.000Z'
  },
  {
    id: 4,
    title: 'Mountain Cabin Retreat',
    description: 'Escape to a peaceful cabin in the mountains, perfect for nature lovers.',
    location: 'Aspen, USA',
    price: 250,
    images: [
      '/mountain-cabin-retreat/aspen.jpg',
      '/mountain-cabin-retreat/aspen2.jpg',
    ],
    amenities: ['Fireplace', 'Hot Tub', 'Mountain View'],
    hostName: 'Host User 1',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    availability: [],
    rating: 4.9,
    reviews: [
      { name: 'Liam', rating: 5, comment: 'A peaceful escape in the mountains. Hot tub was a highlight!' },
      { name: 'Sophia', rating: 5, comment: 'Beautiful views and cozy fireplace. Highly recommend.' },
    ],
    createdAt: '2024-01-26T12:15:00.000Z'
  },
  {
    id: 5,
    title: 'Chic Studio in the Arts District',
    description: 'A stylish studio in the vibrant arts district, close to galleries and cafes.',
    location: 'Chicago, USA',
    price: 110,
    images: [
      '/chic-studio-in-the-arts-district/Chic.webp',
      '/chic-studio-in-the-arts-district/Chic2.webp',
    ],
    amenities: ['WiFi', 'Washer', 'Pet Friendly'],
    hostName: 'Host User 1',
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    availability: [],
    rating: 4.2,
    reviews: [
      { name: 'Olivia', rating: 4, comment: 'Trendy spot, close to galleries. Great for solo travelers.' },
      { name: 'Noah', rating: 4, comment: 'Clean and modern, but a bit small for two.' },
    ],
    createdAt: '2024-01-26T12:20:00.000Z'
  },
  {
    id: 6,
    title: 'Rustic Forest Cabin',
    description: 'Escape to a cozy wooden cabin surrounded by Portland lush forest.',
    location: 'Portland, USA',
    price: 160,
    images: [
        '/rustic-forest-cabin/Rustic.jpg',
        '/rustic-forest-cabin/Rustic2.jpg'
    ],
    amenities: ['WiFi', 'Washer', 'Pet Friendly'],
    hostName: 'Host User 1',
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    availability: [],
    rating: 4.2,
    reviews: [
      { name: 'Ava', rating: 5, comment: 'Loved the forest setting and pet-friendly vibe.' },
      { name: 'Mason', rating: 4, comment: 'Very relaxing, but WiFi was a bit slow.' },
    ],
    createdAt: '2024-01-26T12:21:12:00.000Z'
  },
  {
    id: 7,
    title: 'Luxury Villa with Infinity Pool',
    description: 'Enjoy ocean views from a stunning Bali villa with a private infinity pool.',
    location: 'Bali, Indonesia',
    price: 320,
    images: [
        '/luxury-villa-with-infinity-pool/infinity.jpg',
        '/luxury-villa-with-infinity-pool/infinity2.jpg'
    ],
    amenities: ['Private Pool','Air-Conditioning','Chef Services','Ocean View'],
    hostName: 'Host User 1',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    availability: [],
    rating: 4.9,
    reviews: [
      { name: 'Lucas', rating: 5, comment: 'The infinity pool and ocean view are stunning.' },
      { name: 'Mia', rating: 5, comment: 'Chef services made our stay extra special.' },
    ],
    createdAt: '2024-01-26T12:22:22:00.000Z',
  },
  {
    id: 8,
    title: 'Historical Stone Cottage',
    description: 'Stay in a charming 18th-century cottage nested in Edinburgh Countryside',
    location: 'Edinburg, UK',
    price: 140,
    images: [
        '/historic-stone-cottage/historic.jpg',
        '/historic-stone-cottage/historic2.jpg'
    ],
    amenities: ['Fireplace','Garden','Wi-Fi','Washer'],
    maxGuests: 3,
    bedrooms: 2,
    bathrooms: 1,
    availability: [],
    rating: 4.5,
    reviews: [
      { name: 'Benjamin', rating: 4, comment: 'Charming and historic, with a lovely garden.' },
      { name: 'Ella', rating: 5, comment: 'Felt like stepping back in time. Very clean.' },
    ],
    createdAt: '2024-01-26T12:22:22:00.000Z'
  },
  {
    id: 9,
    title: 'High-Rise City Penthouse',
    description: 'Experience skyline luxury from a modern penthouse in the heart of Tokyo.',
    location: 'Tokyo, Japan',
    price: 270,
    images: [
        '/high-rise-city-penthouse/high.webp',
        '/high-rise-city-penthouse/high2.webp'
    ],
    amenities: ['City View','Gym Access','Wi-Fi','TV'],
    maxGuests: 5,
    bedrooms: 2,
    bathrooms: 2,
    availability: [],
    rating: 4.8,
    reviews: [
      { name: 'Henry', rating: 5, comment: 'Amazing city views and modern amenities.' },
      { name: 'Grace', rating: 4, comment: 'Spacious and luxurious, but a bit pricey.' },
    ],
    createdAt: '2024-01-26T11:23:12:00.000Z'
  },
  {
    id: 10,
    title: 'Lakeview Glass House',
    description: 'Wake up to panoramic lake views in a sleek, all-glass house in Zurich.',
    location: 'Zurich, Switzerland',
    price: 290,
    images: [
        '/lakeview-glass-house/glass.avif',
        '/lakeview-glass-house/glass2.avif'
    ],
    amenities: ['Floor-to-Ceiling Windows','Kitchen','Wi-Fi','Sauna'],
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 1,
    availability: [],
    rating: 4.7,
    reviews: [
      { name: 'Jack', rating: 5, comment: 'Waking up to the lake view was magical.' },
      { name: 'Chloe', rating: 5, comment: 'Unique design and very comfortable.' },
    ],
    createdAt: '2024-01-26T12:22:22:00.000Z'
  },
  {
    id: 11,
    title: 'Desert Dome Retreat',
    description: 'Unplug in a peaceful desert dome under the star in Joshua Tree.',
    location: 'Joshua Tree, USA',
    price: 180,
    images: [
        '/desert-home-retreat/desert.jpg',
        '/desert-home-retreat/desert2.webp'
    ],
    amenities: ['Stargazing Deck','Solar Power','Wi-Fi','Kitchen'],
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    availability: [],
    rating: 4.4,
    reviews: [
      { name: 'Zara', rating: 5, comment: 'Stargazing from the dome was unforgettable.' },
      { name: 'Ethan', rating: 4, comment: 'Unique experience, but a bit hot during the day.' },
    ],
    createdAt: '2024-01-26T12:22:22:00.000Z'
  },
  {
    id: 12,
    title: 'Countryside Barn Loft',
    description: 'Relax in a rustic-chic barn loft surrounded by Tuscany rolling hills.',
    location: 'Tuscany, Italy',
    price: 200,
    images: [
        '/countryside-barn-loft/barn.jpg',
        '/countryside-barn-loft/barn.jpg'
    ],
    amenities: ['Wine Cellar','Fireplace','Wi-Fi','Garden'],
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 1,
    availability: [],
    rating: 4.6,
    reviews: [
      { name: 'Sophie', rating: 5, comment: 'Charming loft and beautiful countryside views.' },
      { name: 'Leo', rating: 4, comment: 'Great wine cellar and cozy fireplace.' },
    ],
    createdAt: '2024-01-26T12:22:22:00.000Z'
  },
  {
    id: 13,
    title: 'Floating Houseboat',
    description: 'Live on water with stylish houseboat docked in scenic Amsterdam canals.',
    location: 'Amsterdam, Netherlands',
    price: 190,
    images: [
        '/floating-houseboat/float.png',
        '/floating-houseboat/float2.webp'
    ],
    amenities: ['Beach View','Kitchen','Wi-Fi','Patio'],
    maxGuests: 3,
    bedrooms: 1,
    bathrooms: 1,
    availability: [],
    rating: 4.5,
    reviews: [
      { name: 'Nina', rating: 5, comment: 'Loved living on the water. Very peaceful.' },
      { name: 'Oscar', rating: 4, comment: 'Fun experience, but a bit rocky at night.' },
    ],
    createdAt: '2024-01-26T12:22:22:00.000Z'
  },
  {
    id: 14,
    title: 'Arctic Igloo Stay',
    description: 'Sleep under the northern lights in a heated glass igloo in Lapland.',
    location: 'Lapland, Finland',
    price: 300,
    images: [
        '/arctic-igloo-stay/igloo.jpg',
        '/arctic-igloo-stay/igloo2.jpg'
    ],
    amenities: ['Heating','Wi-Fi','Snow Gear'],
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    availability: [],
    rating: 4.9,
    reviews: [
      { name: 'Viktor', rating: 5, comment: 'Saw the northern lights from my bed! Incredible.' },
      { name: 'Anna', rating: 5, comment: 'Warm and cozy despite the snow outside.' },
    ],
    createdAt: '2024-01-26T12:22:22:00.000Z'
  },
  {
    id: 15,
    title: 'Beach Hut on Private island',
    description: 'Experience total seclusion in a luxury beach hut on a private Maldivian Island.',
    location: 'Maldives',
    price: 350,
    images: [
        '/beach-hut-on-private-island/hut.webp',
        '/beach-hut-on-private-island/hut2.webp'
    ],
    amenities: ['Private Beach','Snow Gear','Air-Conditioning'],
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    availability: [],
    rating: 4.9,
    reviews: [
      { name: 'Isla', rating: 5, comment: 'Total privacy and beautiful beach. Paradise!' },
      { name: 'Ravi', rating: 4, comment: 'Amazing location, but bring your own snacks.' },
    ],
    createdAt: '2024-01-26T12:22:22:00.000Z'
  },
  {
    id: 16,
    title: 'Cliffside Ocean Bungalow',
    description: 'Bank in Breathtaking sunsets from a whitewashed bungalow perched on Santorini\'s cliffs.',
    location: 'Edinburg, UK',
    price: 140,
    images: [
        '/cliffside-ocean-bungalow/cliffside.avif',
        '/cliffside-ocean-bungalow/cliffside2.avif'
    ],
    amenities: ['Fireplace','Garden','Wi-Fi','Washer'],
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    availability: [],
    rating: 4.8,
    reviews: [
      { name: 'Elena', rating: 5, comment: 'Sunsets from the cliff were breathtaking.' },
      { name: 'Tom', rating: 4, comment: 'Great views, but lots of stairs.' },
    ],
    createdAt: '2024-01-26T12:22:22:00.000Z'
  }
];

mockListings.forEach(listing => {
  if (!listing.reviews || listing.reviews.length === 0) {
    listing.reviews = [
      { name: 'Sample User', rating: 4, comment: 'Nice stay, would recommend.' },
      { name: 'Another Guest', rating: 5, comment: 'Wonderful experience and great host!' }
    ];
  }
  // Set the rating to the average of the reviews
  const avg = listing.reviews.reduce((sum, r) => sum + r.rating, 0) / listing.reviews.length;
  listing.rating = Math.round(avg * 10) / 10;
});

// Example: Add a 4.5 rating review to several listings
mockListings[0].reviews.unshift({ name: 'Alex', rating: 4.5, comment: 'Great location and value, but a bit noisy at night.' });
mockListings[1].reviews.push({ name: 'Alicia', rating: 4.5, comment: 'Stylish loft, loved the view. Could use more kitchenware.' });
mockListings[2].reviews.unshift({ name: 'Sam', rating: 4.5, comment: 'Beach was amazing, breakfast was decent.' });
mockListings[3].reviews.push({ name: 'Raj', rating: 4.5, comment: 'Cabin was cozy, hot tub was fantastic.' });
mockListings[4].reviews.push({ name: 'Maya', rating: 4.5, comment: 'Nice studio, close to everything. A bit small for two.' });
mockListings[5].reviews.unshift({ name: 'Lars', rating: 4.5, comment: 'Forest setting is beautiful, WiFi could be better.' });
mockListings[6].reviews.push({ name: 'Sven', rating: 4.5, comment: 'Infinity pool was a dream, chef was excellent.' });
mockListings[7].reviews.unshift({ name: 'Fatima', rating: 4.5, comment: 'Charming cottage, garden was lovely.' });
mockListings[8].reviews.push({ name: 'Yuki', rating: 4.5, comment: 'Penthouse views were stunning, a bit expensive.' });
mockListings[9].reviews.unshift({ name: 'Luca', rating: 4.5, comment: 'Glass house was unique, sauna was relaxing.' });

export { mockListings }; 