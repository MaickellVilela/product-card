const PRODUCTS = [
  {
    img: "https://kitchenunited.imgix.net/original/1630558936604-2item_combo_slribs.jpeg",
    restaurantName: "Lucille's Smokehouse BBQ",
    title: "Build Your Own Lunch BBQ Combo - 2 Meat",
    description:
      "Your choice of: St. Louis Ribs (3 Bones) 465 cal, Beef Ribs (1bone) 295 cal, Sliced Brisket 375 cal, Pulled Pork 265 cal, BBQ Chicken (1/4) 390 cal, Tri Tip 270 cal, Texas Red Hot Sausage (1) 300 cal. Served with your choice of 1 side and housemade biscuit & apple butter.",
    price: 16.99,
    available: true,
    availabilityTag: {
      label: "Available later",
      type: "availableLater",
    },
    hasOffer: false,
  },
  {
    img: "https://kitchenunited.imgix.net/original/1602779662062-320355.jpg",
    restaurantName: "Arrogant Cow Cheese Steaks",
    title: "Macho Man Chipotle Chicken Cheese Steak",
    description:
      "Premium chicken grilled with white American cheese, topped with lettuce, tomato, crispy cheddar onions and chipotle ranch dressing.",
    price: 7.29,
    available: false,
    availabilityTag: {
      label: "Available later",
      type: "availableLater",
    },
    hasOffer: false,
  },
  {
    img: "https://kitchenunited.imgix.net/original/1602785446249-237541.jpg",
    restaurantName: "Dog Haus",
    title: "Corn Dog",
    description: "Haus made root beer batter",
    price: "5.00",
    available: true,
    availabilityTag: {
      label: "Available later",
      type: "availableLater",
    },
    hasOffer: true,
  },
  {
    img: "https://kitchenunited.imgix.net/original/1616539060166-boxochicken.jpg",
    restaurantName: "Dinah's Chiken",
    title: "Box O' Chicken",
    description:
      "3 Pieces of chicken, 2 individual sides, & 1 roll with honey.",
    price: 12.65,
    available: true,
    availabilityTag: {
      label: "Available later",
      type: "availableLater",
    },
    hasOffer: false,
  },
  {
    img: "https://kitchenunited.imgix.net/original/1620853833940-screenshot2021-05-12at1.47.59pm.jpeg",
    restaurantName: "Portillo's",
    title: "Famous Meal #5: Beef & Sausage Combo Sandwich",
    description:
      "Chicago's #1 Italian Beef & Italian Sausage served on perfectly baked French bread with small fry and drink. *This picture shows optional sweet and hot peppers that must be added to the sandwich, as they do not come standard.",
    price: 7.89,
    available: true,
    availabilityTag: {
      label: "Available later",
      type: "availableLater",
    },
    hasOffer: false,
  },
  {
    img: "https://kitchenunited.imgix.net/original/1620853833940-screenshot2021-05-12at1.47.59pm.jpeg",
    restaurantName: "Portillo's",
    title: "Hot Dog",
    description:
      "Everything includes mustard, relish, celery salt, freshly chopped onions, sliced red ripe tomatoes, kosher pickle, and sport peppers piled onto a steamed poppy seed bun.",
    price: 3.49,
    available: false,
    availabilityTag: {
      label: "Sold Out",
      type: "soldOut",
    },
    hasOffer: false,
  },

  {
    img: "https://kitchenunited.imgix.net/original/1602779914917-320112.jpg",
    restaurantName: "Born Again Vegetarian Subs",
    title: "Born Again Cole Slaw",
    description: "Creamy, great tasting cole slaw crafted in-house.",
    price: 3.99,
    available: true,
    availabilityTag: {
      label: "Available later",
      type: "availableLater",
    },
    hasOffer: false,
  },
  {
    img: "https://kitchenunited.imgix.net/original/1602779919481-320113.jpg",
    restaurantName: "Born Again Vegetarian Subs",
    title: "Chips",
    description: "Choose from Plain, BBQ or Salt & Vinegar chips.",
    price: 2.39,
    available: true,
    availabilityTag: {
      label: "Available later",
      type: "availableLater",
    },
    hasOffer: false,
  },
  {
    img: "https://kitchenunited.imgix.net/original/1633565587978-chocolatechipcookiesandwich.jpeg",
    restaurantName: "Brothers Desserts",
    title: "Chocolate Chip Cookie Sandwich",
    description:
      "Premium vanilla ice cream, cut with a chocolaty ribbon, all sandwiched between two of the best chocolate chip cookies on the planet. Enjoy!",
    price: 3.0,
    available: true,
    availabilityTag: {
      label: "Available later",
      type: "availableLater",
    },
    hasOffer: false,
  },
  {
    img: "https://kitchenunited.imgix.net/original/1602779194415-267314.jpg",
    restaurantName: "Brothers Desserts",
    title: "Mint Ice Cream BonBons",
    description:
      "Ultra premium Brothers Mint Ice Cream enrobed in dark chocolate. A fan favorite! 12 BonBons in a box.",
    price: 9.99,
    available: false,
    availabilityTag: {
      label: "Sold out",
      type: "soldOut",
    },
    hasOffer: false,
  },
  {
    img: "https://kitchenunited.imgix.net/original/1602779631121-315396.jpg",
    restaurantName: "Capriotti's",
    title: "Capastrami Fries",
    description:
      "Flat fries topped with pastrami, swiss cheese, cole slaw and Russian dressing.",
    price: 7.29,
    available: false,
    availabilityTag: {
      label: "Available at 10pm",
      type: "availableAt",
    },
    hasOffer: true,
  },
  {
    img: "https://kitchenunited.imgix.net/original/1625154497362-caesar.png",
    restaurantName: "Fresh Brothers",
    title: "Caesar Salad",
    description:
      "Crisp romaine topped with focaccia croutons and shaved parmesan cheese, with a tangy parmesan Caesar dressing.",
    price: 12.65,
    available: false,
    availabilityTag: {
      label: "Available tomorrow",
      type: "availableTomorrow",
    },
    hasOffer: true,
  },
  {
    img: "https://kitchenunited.imgix.net/original/1610752984915-fries.jpg",
    restaurantName: "Dog Haus",
    title: "Fries",
    description: "",
    price: 2.99,
    available: false,
    availabilityTag: {
      label: "Unavailable",
      type: "unavailable",
    },
    hasOffer: false,
  },
  {
    img: "https://via.placeholder.com/728x90",
    restaurantName: "Dog Haus",
    title: "Debug 278x90",
    description: "",
    price: 2300.99,
    available: false,
    availabilityTag: {
      label: "Available later",
      type: "availableLater",
    },
    hasOffer: false,
  },
  {
    img: "https://via.placeholder.com/500x1080",
    restaurantName: "Dog Haus",
    title: "image 500x1080",
    description: "",
    price: 2300.99,
    available: false,
    availabilityTag: {
      label: "Available later",
      type: "availableLater",
    },
    hasOffer: false,
  },
];

export default PRODUCTS;
