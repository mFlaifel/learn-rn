const BOY_AVATAR =
  'https://th.bing.com/th/id/OIP.icRntapo_CZpFI2-WEo_YgHaHn?rs=1&pid=ImgDetMain';
const GIRL_AVATAR =
  'data:image/jpeg;base64,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';

export const Plants = [
  {
    id: 1,
    name: 'Eucalyptus cineria',
    category: 'Outdoor',
    description: 'A beautiful outdoor plant with aromatic leaves.',
    price: 250,
    quantity: 10,
    careMethod: 'Water once a week',
    rating: 4.5,
    reviews: [
      { name: 'John', avatar: BOY_AVATAR, review: 'Great plant!' },
      { name: 'Michael', avatar: BOY_AVATAR, review: 'Easy to care for' },
      { name: 'David', avatar: BOY_AVATAR, review: 'Beautiful leaves' },
    ],
    image:
      'https://th.bing.com/th/id/OIP.Xu_jZg-ScurHkASQb6uIAwHaE8?rs=1&pid=ImgDetMain',
  },
  {
    id: 2,
    name: 'Spider Plant',
    category: 'Outdoor',
    description: 'An easy-to-grow plant that purifies the air.',
    price: 250,
    quantity: 15,
    careMethod: 'Water twice a week',
    rating: 4.2,
    reviews: [
      { name: 'James', avatar: BOY_AVATAR, review: 'Very resilient' },
      { name: 'Robert', avatar: BOY_AVATAR, review: 'Looks great' },
      { name: 'William', avatar: BOY_AVATAR, review: 'Good for beginners' },
    ],
    image:
      'https://th.bing.com/th/id/OIP.-hkgK2rmngJ5LX9dyJksigHaHa?rs=1&pid=ImgDetMain',
  },
  {
    id: 3,
    name: 'Fiddle Leaf Fig',
    category: 'Indoor',
    description: 'A popular indoor plant with large, glossy leaves.',
    price: 300,
    quantity: 8,
    careMethod: 'Water once a week',
    rating: 4.7,
    reviews: [
      { name: 'John', avatar: BOY_AVATAR, review: 'Stunning plant' },
      { name: 'Michael', avatar: BOY_AVATAR, review: 'Needs a lot of light' },
      { name: 'David', avatar: BOY_AVATAR, review: 'Worth the price' },
    ],
    image:
      'https://th.bing.com/th/id/OIP.xSA-H55MX31n8Bx0wN28pgHaHa?rs=1&pid=ImgDetMain',
  },
  {
    id: 4,
    name: 'Peace Lily',
    category: 'Indoor',
    description: 'A low-maintenance plant with beautiful white flowers.',
    price: 200,
    quantity: 12,
    careMethod: 'Water once a week',
    rating: 4.3,
    reviews: [
      { name: 'James', avatar: BOY_AVATAR, review: 'Easy to care for' },
      { name: 'Robert', avatar: BOY_AVATAR, review: 'Beautiful flowers' },
      { name: 'William', avatar: BOY_AVATAR, review: 'Great for indoors' },
    ],
    image:
      'https://th.bing.com/th/id/OIP.CoNa1gPEpgcNuZ2GTwWm0AHaHa?rs=1&pid=ImgDetMain',
  },
  {
    id: 6,
    name: 'Monstera',
    category: 'Indoor',
    description:
      'A striking plant with large, split leaves, perfect for indoor decor.',
    price: 350,
    quantity: 5,
    careMethod: 'Water once a week',
    rating: 4.8,
    reviews: [
      { name: 'Alice', avatar: GIRL_AVATAR, review: 'Beautiful leaves' },
      { name: 'Emily', avatar: GIRL_AVATAR, review: 'Great for decor' },
      { name: 'Sophia', avatar: GIRL_AVATAR, review: 'Needs space to grow' },
    ],
    image:
      'https://th.bing.com/th/id/OIP.lpMkZa-rYrAf4GMSkPOUkwAAAA?rs=1&pid=ImgDetMain',
  },
  {
    id: 7,
    name: 'Cactus',
    category: 'Outdoor',
    description: 'A low-maintenance outdoor plant, ideal for sunny areas.',
    price: 100,
    quantity: 30,
    careMethod: 'Water once a month',
    rating: 4.1,
    reviews: [
      { name: 'Emma', avatar: GIRL_AVATAR, review: 'Very low maintenance' },
      {
        name: 'Olivia',
        avatar: GIRL_AVATAR,
        review: 'Perfect for sunny spots',
      },
      { name: 'Ava', avatar: GIRL_AVATAR, review: 'Hardy plant' },
    ],
    image:
      'https://th.bing.com/th/id/R.ac118cb3f7985e8e3127257f5282660c?rik=JnCq2EuLFwx1aA&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0968%2f5384%2fproducts%2f91fa6e3d-f910-5185-af51-c8b873396d36_1200x1200.jpg%3fv%3d1569110174&ehk=0h1KI6ea%2bqhdNHpLjvPyzFRBM6LCc44M0eOd4P3Jb5g%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    id: 8,
    name: 'Aloe Vera',
    category: 'Outdoor',
    description: 'A versatile plant known for its medicinal properties.',
    price: 120,
    quantity: 18,
    careMethod: 'Water once every two weeks',
    rating: 4.4,
    reviews: [
      { name: 'Isabella', avatar: GIRL_AVATAR, review: 'Great for skin' },
      { name: 'Mia', avatar: GIRL_AVATAR, review: 'Easy to grow' },
      {
        name: 'Charlotte',
        avatar: GIRL_AVATAR,
        review: 'Medicinal properties',
      },
    ],
    image:
      'https://th.bing.com/th/id/OIP.cKvYucYTEpdc2v8AAErllAHaE8?rs=1&pid=ImgDetMain',
  },
  {
    id: 9,
    name: 'Fern',
    category: 'Indoor',
    description: 'A lush green plant that thrives in humidity.',
    price: 150,
    quantity: 10,
    careMethod: 'Keep soil moist',
    rating: 4.3,
    reviews: [
      { name: 'Amelia', avatar: GIRL_AVATAR, review: 'Loves humidity' },
      { name: 'Harper', avatar: GIRL_AVATAR, review: 'Beautiful green' },
      { name: 'Evelyn', avatar: GIRL_AVATAR, review: 'Needs regular watering' },
    ],
    image:
      'https://gardeningsoul.com/wp-content/uploads/2017/05/fern-square-2.jpg',
  },
  {
    id: 10,
    name: 'Adam Plant',
    category: 'Indoor',
    description: 'A stunning plant with shiny, dark green leaves.',
    price: 280,
    quantity: 7,
    careMethod: 'Water once a week',
    rating: 4.5,
    reviews: [
      { name: 'Abigail', avatar: GIRL_AVATAR, review: 'Beautiful leaves' },
      { name: 'Ella', avatar: GIRL_AVATAR, review: 'Easy to care for' },
      { name: 'Scarlett', avatar: GIRL_AVATAR, review: 'Great for indoors' },
    ],
    image:
      'https://gardeningsoul.com/wp-content/uploads/2017/05/fern-square-2.jpg',
  },
  {
    id: 11,
    name: 'Adam Plant',
    category: 'Indoor',
    description: 'A stunning plant with shiny, dark green leaves.',
    price: 280,
    quantity: 7,
    careMethod: 'Water once a week',
    rating: 4.5,
    reviews: [
      { name: 'Grace', avatar: GIRL_AVATAR, review: 'Beautiful leaves' },
      { name: 'Chloe', avatar: GIRL_AVATAR, review: 'Easy to care for' },
      { name: 'Lily', avatar: GIRL_AVATAR, review: 'Great for indoors' },
    ],
    image:
      'https://th.bing.com/th?id=OIF.kyICEnRXQ9K1r8DH6%2bI3vA&rs=1&pid=ImgDetMain',
  },
  {
    id: 12,
    name: 'Eve Plant',
    category: 'Outdoor',
    description: 'A stunning plant with shiny, dark green leaves.',
    price: 280,
    quantity: 7,
    careMethod: 'Water once a week',
    rating: 4.5,
    reviews: [
      { name: 'Hannah', avatar: GIRL_AVATAR, review: 'Beautiful leaves' },
      { name: 'Zoe', avatar: GIRL_AVATAR, review: 'Easy to care for' },
      { name: 'Nora', avatar: GIRL_AVATAR, review: 'Great for outdoors' },
    ],
    image:
      'https://th.bing.com/th?id=OIF.kyICEnRXQ9K1r8DH6%2bI3vA&rs=1&pid=ImgDetMain',
  },
];
