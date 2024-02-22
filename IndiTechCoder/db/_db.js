const games = [
  {
    id: "1",
    title: "The Legend of Zelda: Breath of the Wild",
    platform: ["Nintendo Switch", "Wii U"],
  },
  { id: "2", title: "Super Mario Odyssey", platform: ["Nintendo Switch"] },
  { id: "3", title: "God of War", platform: ["PlayStation 4"] },
  {
    id: "4",
    title: "Red Dead Redemption 2",
    platform: ["PlayStation 4", "Xbox One"],
  },
  {
    id: "5",
    title: "The Witcher 3: Wild Hunt",
    platform: ["PlayStation 4", "Xbox One", "PC"],
  },
  {
    id: "6",
    title: "Fortnite",
    platform: [
      "PlayStation 4",
      "Xbox One",
      "Nintendo Switch",
      "PC",
      "iOS",
      "Android",
    ],
  },
];
const reviews = [
  {
    id: "1",
    rating: 4,
    content: "Great game with amazing graphics and storyline.",
  },
  {
    id: "2",
    rating: 5,
    content: "One of the best games I've ever played. Highly recommended!",
  },
  {
    id: "3",
    rating: 3,
    content: "Decent game, but some technical issues need to be addressed.",
  },
  {
    id: "4",
    rating: 5,
    content: "Absolutely fantastic! Couldn't put it down.",
  },
  {
    id: "5",
    rating: 2,
    content: "Disappointing. Overhyped and underdelivered.",
  },
  {
    id: "6",
    rating: 4,
    content: "Solid gameplay mechanics and engaging story.",
  },
];

const authors = [
  { id: "1", name: "John Doe", verified: true },
  { id: "2", name: "Alice Smith", verified: false },
  { id: "3", name: "Bob Johnson", verified: true },
  { id: "4", name: "Emily Brown", verified: true },
  { id: "5", name: "Michael Wilson", verified: false },
];

export default { games, reviews, authors };
