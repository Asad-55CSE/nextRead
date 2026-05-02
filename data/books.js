const books = [
  {
    id: "1",
    title: "1984",
    author: "George Orwell",
    description:
      "A dystopian masterpiece set in a totalitarian society ruled by Big Brother, where free thought is a crime and history is rewritten daily. Winston Smith secretly rebels against the Party, but nothing remains hidden in Oceania. A chilling exploration of surveillance, propaganda, and the resilience of the human spirit.",
    category: "Story",
    available_quantity: 5,
    image_url:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
  },
  {
    id: "2",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description:
      "Set in the American South during the 1930s, this Pulitzer Prize-winning novel follows young Scout Finch as her father, lawyer Atticus Finch, defends a Black man falsely accused of a crime. A profound meditation on justice, racial inequality, and the loss of innocence.",
    category: "Story",
    available_quantity: 3,
    image_url:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
  },
  {
    id: "3",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    description:
      "Bilbo Baggins, a comfort-loving hobbit, is swept into an epic quest by the wizard Gandalf and thirteen dwarves to reclaim their homeland from the fearsome dragon Smaug. A timeless adventure through Middle-earth filled with trolls, elves, and the legendary One Ring.",
    category: "Story",
    available_quantity: 7,
    image_url:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=600&fit=crop",
  },
  {
    id: "4",
    title: "Dune",
    author: "Frank Herbert",
    description:
      "Set in a distant future amidst a feudal interstellar society, Dune tells the story of Paul Atreides whose family accepts stewardship of the desert planet Arrakis, the only source of the universe's most valuable substance. A sweeping epic of politics, religion, and ecology.",
    category: "Science",
    available_quantity: 4,
    image_url:
      "https://images.unsplash.com/photo-1533659828870-95ee305cee3e?w=400&h=600&fit=crop",
  },
  {
    id: "5",
    title: "Clean Code",
    author: "Robert C. Martin",
    description:
      "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. This book is a must for any developer, software engineer, project manager, team lead, or systems analyst with an interest in producing better code. Packed with practical advice.",
    category: "Tech",
    available_quantity: 6,
    image_url:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=600&fit=crop",
  },
  {
    id: "6",
    title: "The Pragmatic Programmer",
    author: "David Thomas & Andrew Hunt",
    description:
      "Straight from the programming trenches, this guide cuts through the increasing specialization and technicalities of modern software development to examine the core process—taking a requirement and producing working, maintainable code that delights its users.",
    category: "Tech",
    available_quantity: 2,
    image_url:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=600&fit=crop",
  },
  {
    id: "7",
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    description:
      "Was there a beginning of time? Could time run backwards? Is the universe infinite or does it have boundaries? In this landmark volume, Hawking tackles the most profound questions facing scientists and philosophers. A groundbreaking work that transforms complex science into accessible prose.",
    category: "Science",
    available_quantity: 8,
    image_url:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop",
  },
  {
    id: "8",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description:
      "Set in the Roaring Twenties, this lyrical masterpiece follows the mysterious millionaire Jay Gatsby and his obsession to reunite with his former love, Daisy Buchanan. Through narrator Nick Carraway's eyes, Fitzgerald crafts a devastating portrait of the American Dream's allure and hollowness.",
    category: "Story",
    available_quantity: 5,
    image_url:
      "https://images.unsplash.com/photo-1615413833480-6e8427dbcc5e?w=400&h=600&fit=crop",
  },
  {
    id: "9",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    description:
      "From a renowned historian comes a groundbreaking narrative of humanity's creation and evolution. How did our species succeed in the battle for dominance? Why did our foraging ancestors come together to create cities and kingdoms? How did we come to believe in gods, nations and human rights?",
    category: "Science",
    available_quantity: 10,
    image_url:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
  },
  {
    id: "10",
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    description:
      "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This book distills the essence of JavaScript into a subset that works reliably and well.",
    category: "Tech",
    available_quantity: 3,
    image_url:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=600&fit=crop",
  },
  {
    id: "11",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "The romantic clash between the opinionated Elizabeth Bennet and the prideful Mr. Darcy makes for one of literature's most beloved stories. Set in rural England, Austen's wit and social commentary shine in this timeless exploration of love, class, and character.",
    category: "Story",
    available_quantity: 6,
    image_url:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
  },
  {
    id: "12",
    title: "The Origin of Species",
    author: "Charles Darwin",
    description:
      "Darwin's seminal work presenting his theory of evolution through natural selection. First published in 1859, this revolutionary book challenged prevailing views on the origin of biological diversity and remains one of the most influential scientific works ever written.",
    category: "Science",
    available_quantity: 4,
    image_url:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
  },
];

module.exports = books;
