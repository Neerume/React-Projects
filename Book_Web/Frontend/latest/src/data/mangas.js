import onepiece from "../assets/onepiece.png";
import kentaro from "../assets/kentaro.png";
import Naruto from "../assets/naruto.png";
import Bleach from "../assets/bleach.png";
import Fullmetal from "../assets/Fullmetal.png";
import DemonSlayer from "../assets/demonSlayer.png";

// add more images later
// import yourname from "../assets/yourname.png";
// import tokyoghoul from "../assets/tokyoghoul.png";

const mangas = [
  {
    id: 1,
    title: "One Piece",
    author: "Eiichiro Oda",

    // main category for filtering
    category: "Action & Adventure",

    // extra details
    tags: ["Pirates", "Fantasy", "Comedy"],

    image: onepiece,
    bestSeller: true,
    newArrival: true,
    inStock: true,
    discount: true,
    language: "English",
    price: 9.99,
  },

  {
    id: 2,
    title: "Berserk",
    author: "Kentaro Miura",

    category: "Horror, Mystery & Thriller",

    tags: ["Dark Fantasy", "Psychological", "Violence"],

    image: kentaro,
    bestSeller: true,
    newArrival: false,
    inStock: true,
    discount: false,
    language: "English",
    price: 14.99,
  },

  {
    id: 3,
    title: "Naruto",
    author: "Masashi Kishimoto",

    category: "Action & Adventure",

    tags: ["Ninja", "Fantasy", "Friendship"],

    image: Naruto,
    bestSeller: true,
    newArrival: true,
    inStock: true,
    discount: true,
    language: "English",
    price: 12.99,
  },

  {
    id: 4,
    title: "Bleach",
    author: "Tite Kubo",

    category: "Fantasy",

    tags: ["Supernatural", "Shinigami", "Action"],

    image: Bleach,
    bestSeller: true,
    newArrival: false,
    inStock: false,
    discount: false,
    language: "Japanese",
    price: 11.99,
  },

  {
    id: 5,
    title: "Fullmetal Alchemist",
    author: "Hiromu Arakawa",

    category: "Science Fiction",

    tags: ["Alchemy", "Adventure", "Fantasy"],

    image: Fullmetal,
    bestSeller: true,
    newArrival: true,
    inStock: true,
    discount: true,
    language: "English",
    price: 10.99,
  },

  {
    id: 6,
    title: "Demon Slayer",
    author: "Koyoharu Gotouge",

    category: "Fantasy",

    tags: ["Demons", "Historical", "Action"],

    image: DemonSlayer,
    bestSeller: true,
    newArrival: true,
    inStock: true,
    discount: false,
    language: "English",
    price: 13.99,
  },

  // NEW MANGAS

  {
    id: 7,
    title: "Tokyo Ghoul",
    author: "Sui Ishida",

    category: "Horror, Mystery & Thriller",

    tags: ["Dark", "Psychological", "Action"],

    image: kentaro,
    bestSeller: true,
    newArrival: false,
    inStock: true,
    discount: true,
    language: "Japanese",
    price: 15.99,
  },

  {
    id: 8,
    title: "Your Name",
    author: "Makoto Shinkai",

    category: "Romance",

    tags: ["Drama", "School", "Supernatural"],

    image: onepiece,
    bestSeller: true,
    newArrival: false,
    inStock: true,
    discount: false,
    language: "English",
    price: 8.99,
  },

  {
    id: 9,
    title: "Attack on Titan",
    author: "Hajime Isayama",

    category: "Horror, Mystery & Thriller",

    tags: ["Titans", "Action", "Dark Fantasy"],

    image: Naruto,
    bestSeller: true,
    newArrival: false,
    inStock: true,
    discount: true,
    language: "English",
    price: 16.99,
  },

  {
    id: 10,
    title: "Steins;Gate",
    author: "5pb.",

    category: "Science Fiction",

    tags: ["Time Travel", "Thriller", "Drama"],

    image: Bleach,
    bestSeller: false,
    newArrival: true,
    inStock: true,
    discount: false,
    language: "Japanese",
    price: 17.99,
  },

  {
    id: 11,
    title: "Horimiya",
    author: "HERO",

    category: "Romance",

    tags: ["School", "Comedy", "Slice of Life"],

    image: Fullmetal,
    bestSeller: true,
    newArrival: true,
    inStock: true,
    discount: true,
    language: "English",
    price: 9.49,
  },

  {
    id: 12,
    title: "Jujutsu Kaisen",
    author: "Gege Akutami",

    category: "Action & Adventure",

    tags: ["Curses", "Supernatural", "Dark Fantasy"],

    image: DemonSlayer,
    bestSeller: true,
    newArrival: true,
    inStock: false,
    discount: true,
    language: "Japanese",
    price: 14.49,
  },
];

export default mangas;