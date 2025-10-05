// destinations.js

export const destinations = [
  {
    id: "goa",
    name: "Goa",
    description: "Famous for its beaches, nightlife, and Portuguese heritage.",
    tips: "Best time to visit is between November and February. Don’t miss Baga and Anjuna beaches."
  },
  {
    id: "manali",
    name: "Manali",
    description: "A beautiful hill station in Himachal Pradesh.",
    tips: "Visit Solang Valley and Rohtang Pass. Best for snow lovers in winter."
  },
  {
    id: "jaipur",
    name: "Jaipur",
    description: "The Pink City, known for forts, palaces, and rich culture.",
    tips: "Explore Amber Fort, Hawa Mahal, and try Rajasthani cuisine."
  },
  {
    id: "kerala",
    name: "Kerala",
    description: "Known as 'God’s Own Country', famous for backwaters and greenery.",
    tips: "Try a houseboat stay in Alleppey and visit Munnar tea gardens."
  },
  {
    id: "ladakh",
    name: "Ladakh",
    description: "A high-altitude desert with monasteries and scenic landscapes.",
    tips: "Visit Pangong Lake and Nubra Valley. Carry warm clothes."
  },
  {
    id: "agra",
    name: "Agra",
    description: "Home of the Taj Mahal, one of the wonders of the world.",
    tips: "Best time to visit is sunrise or sunset for stunning views."
  },
  {
    id: "darjeeling",
    name: "Darjeeling",
    description: "Hill station in West Bengal, famous for tea and toy train.",
    tips: "Watch the sunrise at Tiger Hill and enjoy Darjeeling tea."
  },
  {
    id: "udaipur",
    name: "Udaipur",
    description: "City of Lakes, known for palaces and romantic vibes.",
    tips: "Take a boat ride on Lake Pichola and visit City Palace."
  },
  {
    id: "rishikesh",
    name: "Rishikesh",
    description: "Yoga capital of the world and hub for adventure sports.",
    tips: "Try river rafting and attend Ganga Aarti at Triveni Ghat."
  },
  {
    id: "andaman",
    name: "Andaman Islands",
    description: "Tropical paradise with coral reefs and beaches.",
    tips: "Go scuba diving at Havelock Island and visit Cellular Jail."
  }
];

export const titles = {
   "/" : "Tourism site",
   "/destinations" : "Destinations",
   "/destinations/:id" : "DestinationDetalis", 
   "/plan-trip" : "Plan Trip",
   "/*" : "Error Page"
};