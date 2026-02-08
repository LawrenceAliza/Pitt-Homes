export interface Roommate {
  name: string;
  age: number;
  year: string;
  major: string;
  bio: string;
  avatar: string;
  traits: string[];
}

export interface Listing {
  id: number;
  images: string[];
  price: number;
  beds: number;
  baths: number;
  location: string;
  distance: string;
  description: string;
  owner: string;
  ownerYear: string;
  ownerMajor: string;
  // House details
  petFriendly: boolean;
  furnished: boolean;
  laundry: string;
  parking: string;
  leaseLength: string;
  availableDate: string;
  utilities: string;
  // Roommates currently in the house
  roommates: Roommate[];
}

export const listings: Listing[] = [
  {
    id: 1,
    images: [
      "https://photos.zillowstatic.com/fp/949831e743cd25dc8425735588d0de6a-p_e.jpg",
      "https://photos.zillowstatic.com/fp/3f83fe7e2ec039dfb5945103f0f79442-p_e.jpg",
      "https://photos.zillowstatic.com/fp/06565ea442cb5194eafc3dc02b179dfb-p_e.jpg",
      "https://photos.zillowstatic.com/fp/ee28cca1cec3c3c0a31469be916d02bd-p_e.jpg",
    ],
    price: 650,
    beds: 2,
    baths: 1,
    location: "Oakland",
    distance: "5 min walk to campus",
    description:
      "Bright and cozy 2-bedroom apartment right in the heart of Oakland. Hardwood floors throughout, big windows with tons of natural light. The kitchen was just updated last year. Super close to all the Oakland restaurants and a quick walk to campus. Looking for a chill roommate who keeps things reasonably clean.",
    owner: "Sarah Mitchell",
    ownerYear: "Junior",
    ownerMajor: "Engineering",
    petFriendly: true,
    furnished: true,
    laundry: "In-building",
    parking: "Street parking",
    leaseLength: "12 months",
    availableDate: "Aug 2026",
    utilities: "~$80/mo split",
    roommates: [
      {
        name: "Sarah Mitchell",
        age: 21,
        year: "Junior",
        major: "Engineering",
        bio: "I'm pretty laid-back but focused during the week. I love cooking and usually make dinner most nights — you're welcome to join! I have a cat named Mochi. Looking for someone who's okay with a quiet pet and likes to keep common spaces tidy.",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
        traits: ["Early bird", "Cat owner", "Loves cooking", "Non-smoker"],
      },
    ],
  },
  {
    id: 2,
    images: [
      "https://photos.zillowstatic.com/fp/d0ef3bd9a49e58f9cf1c0587a3290d92-p_e.jpg",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
    ],
    price: 750,
    beds: 3,
    baths: 2,
    location: "South Oakland",
    distance: "10 min walk to campus",
    description:
      "Spacious 3-bedroom house with a big backyard — perfect for hangouts and grilling. Two full bathrooms so no morning rush. The basement is semi-finished and we use it as a study/hangout area. Great landlord who actually fixes things fast. Two of us are here already, looking for a third.",
    owner: "Michael Chen",
    ownerYear: "Senior",
    ownerMajor: "Computer Science",
    petFriendly: false,
    furnished: false,
    laundry: "In-unit washer/dryer",
    parking: "Driveway (2 spots)",
    leaseLength: "12 months",
    availableDate: "Jun 2026",
    utilities: "~$100/mo split",
    roommates: [
      {
        name: "Michael Chen",
        age: 22,
        year: "Senior",
        major: "Computer Science",
        bio: "CS major, big into gaming and hackathons. I'm usually coding or at the gym. Pretty flexible about noise — I wear headphones most of the time anyway. I cook a lot of Asian food so the kitchen smells amazing (you're welcome).",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        traits: ["Night owl", "Gamer", "Gym regular", "Clean kitchen"],
      },
      {
        name: "Alex Rivera",
        age: 21,
        year: "Senior",
        major: "Information Science",
        bio: "I'm the social one in the house. I organize movie nights and usually know about all the events happening on campus. I work part-time at a coffee shop so I bring home free pastries sometimes.",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        traits: ["Social butterfly", "Coffee lover", "Movie nights", "Tidy"],
      },
    ],
  },
  {
    id: 3, 
    images: [
      "https://photos.zillowstatic.com/fp/224f36c843f79c9e7c3deb42c4621f70-cc_ft_1536.webp",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=500&fit=crop",
    ],
    price: 550,
    beds: 1,
    baths: 1,
    location: "Shadyside",
    distance: "15 min bus to campus",
    description:
      "Cozy studio-style room in a quiet Shadyside apartment. Shadyside is beautiful — tree-lined streets, great coffee shops, and the Walnut Street shops are right there. The bus stop to campus is a 2-minute walk. Best for someone who values a peaceful living situation.",
    owner: "Emily Rodriguez",
    ownerYear: "Sophomore",
    ownerMajor: "Business",
    petFriendly: false,
    furnished: true,
    laundry: "In-building",
    parking: "Permit street parking",
    leaseLength: "10 months",
    availableDate: "Aug 2026",
    utilities: "Included in rent",
    roommates: [
      {
        name: "Emily Rodriguez",
        age: 20,
        year: "Sophomore",
        major: "Business",
        bio: "I'm a business major who's super into organization (yes, I color-code my planner). I'm quiet during the week but love going out on weekends. I do yoga every morning in the living room — you can join if you want!",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        traits: ["Organized", "Yoga lover", "Weekend social", "Non-smoker"],
      },
    ],
  },
  {
    id: 4,
    images: [
      "https://photos.zillowstatic.com/fp/0664ea39e0d504bc83b8b870db1574b7-cc_ft_1536.webp",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
    ],
    price: 800,
    beds: 2,
    baths: 2,
    location: "Oakland",
    distance: "3 min walk to campus",
    description:
      "Modern 2-bed 2-bath in the newest building on Oakland Ave. Literally steps from campus — you can leave 5 minutes before class. Building has a gym, rooftop lounge, and package lockers. Each bedroom has its own bathroom so you get full privacy. Premium living for serious students.",
    owner: "David Park",
    ownerYear: "Graduate",
    ownerMajor: "MBA",
    petFriendly: false,
    furnished: true,
    laundry: "In-unit",
    parking: "Garage ($75/mo)",
    leaseLength: "12 months",
    availableDate: "Jul 2026",
    utilities: "~$60/mo split",
    roommates: [
      {
        name: "David Park",
        age: 25,
        year: "Graduate",
        major: "MBA",
        bio: "First-year MBA student. I'm older than most undergrads so I keep things pretty mature and drama-free. I travel for case competitions sometimes so you'll have the place to yourself occasionally. I'm big into fitness and meal prepping.",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        traits: ["Quiet", "Fitness focused", "Travels often", "Clean"],
      },
    ],
  },
  {
    id: 5,
    images: [
      "https://photos.zillowstatic.com/fp/8990559684ec3b5c6518511e0f50dfab-cc_ft_1536.webp",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&h=500&fit=crop",
    ],
    price: 600,
    beds: 2,
    baths: 1,
    location: "Squirrel Hill",
    distance: "20 min bus to campus",
    description:
      "Charming apartment in Squirrel Hill — one of Pittsburgh's best neighborhoods. Amazing food everywhere (Murray Ave has everything). Bit further from campus but the 61 bus is super reliable. Big bedrooms with closet space, updated kitchen, and a nice front porch for hanging out.",
    owner: "Jessica Thompson",
    ownerYear: "Junior",
    ownerMajor: "Biology",
    petFriendly: true,
    furnished: false,
    laundry: "In-building",
    parking: "Free street parking",
    leaseLength: "12 months",
    availableDate: "Aug 2026",
    utilities: "~$70/mo split",
    roommates: [
      {
        name: "Jessica Thompson",
        age: 21,
        year: "Junior",
        major: "Biology",
        bio: "Pre-med student so I study a LOT, but I'm not boring I promise! I have a small dog named Biscuit who's the friendliest little guy. I love hiking on weekends and exploring Pittsburgh's parks. Looking for someone who's pet-friendly and doesn't mind a study-heavy lifestyle.",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        traits: ["Dog owner", "Pre-med", "Hiker", "Studious"],
      },
    ],
  },
  {
    id: 6,
    images: [
      "https://photos.zillowstatic.com/fp/33060e74144093515cefb59166fc94ad-cc_ft_1536.webp",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&h=500&fit=crop",
    ],
    price: 900,
    beds: 3,
    baths: 2,
    location: "Oakland",
    distance: "2 min walk to campus",
    description:
      "Premium 3-bedroom house right on Bates Street. Huge living room, renovated kitchen with dishwasher, and a finished basement perfect for a studio or hangout space. This is the closest house to campus you'll find. Two of us are architecture students so the house has great vibes and decor.",
    owner: "Ryan Williams",
    ownerYear: "Senior",
    ownerMajor: "Architecture",
    petFriendly: false,
    furnished: true,
    laundry: "In-unit",
    parking: "Driveway (3 spots)",
    leaseLength: "12 months",
    availableDate: "Jun 2026",
    utilities: "~$90/mo split",
    roommates: [
      {
        name: "Ryan Williams",
        age: 22,
        year: "Senior",
        major: "Architecture",
        bio: "Architecture student — so yes, the house looks cool because I can't help myself. I'm in studio a lot but when I'm home I love hosting dinners and watching movies. I'm pretty creative and easygoing. Just don't touch my model supplies and we're good.",
        avatar:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
        traits: ["Creative", "Hosts dinners", "Night owl", "Design-focused"],
      },
      {
        name: "Nina Okafor",
        age: 22,
        year: "Senior",
        major: "Architecture",
        bio: "Ryan's studio partner and now housemate. I'm from Nigeria originally and I love sharing my culture through food — I cook jollof rice that'll change your life. I'm focused but fun, and I always have good music playing.",
        avatar:
          "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
        traits: ["Great cook", "Music lover", "Focused", "Friendly"],
      },
    ],
  },
];

// Quick message templates (Facebook Marketplace style)
export const quickMessages = [
  "Hey, I'm interested! Is this still available?",
  "Is the price negotiable?",
  "When can I come see the place?",
  "Are you flexible on the move-in date?",
  "Can you tell me more about the roommate situation?",
];
