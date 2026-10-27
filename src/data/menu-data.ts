// Authentic Non-Veg Menu Dataset for Tharam Restaurant
// 100% verified dishes, exact prices, categories, and media assets

export type DishItem = {
  id: string;
  name: string;
  price: string;
  priceNum: number;
  category: string;
  meat: "chicken" | "mutton" | "fish" | "prawn" | "crab" | "seafood" | "egg" | "nonveg";
  img: string;
  desc: string;
  tag?: string;
};

export type CategoryMeta = {
  title?: string;
  blurb: string;
  icon?: string;
  iconName?: string;
};

export const CATEGORY_ORDER: string[] = [
  "Special Non-Veg Biryani",
  "Non-Vegetarian Meals",
  "Bucket Biryani",
  "South Indian Chicken Dry Specials",
  "Chinese Chicken Starters",
  "South Indian Mutton Dry Specials",
  "Seafood Starters \u2013 Fish",
  "Seafood Starters \u2013 Prawns",
  "Seafood Starters \u2013 South Indian",
  "Tandoori \u2013 Non-Veg",
  "Arabian Barbecue",
  "South Indian Gravies",
  "Indian Gravy \u2013 Chicken",
  "Indian Gravy \u2013 Mutton",
  "Parotta Specials \u2013 Non-Veg",
  "Chinese Rice / Noodles \u2013 Non-Veg",
  "Non-Vegetarian Breakfast",
  "Egg Dishes",
  "Non-Vegetarian Soups"
];

export const CATEGORY_METADATA: Record<string, CategoryMeta> = {
  "Special Non-Veg Biryani": {
    "icon": "Flame",
    "blurb": "Slow dum-cooked Seeraga Samba non-veg biryanis prepared with whole aromatic spices."
  },
  "Non-Vegetarian Meals": {
    "icon": "Utensils",
    "blurb": "Authentic banana leaf feast meals with steaming rice, rich curries, gravies and accompaniments."
  },
  "Bucket Biryani": {
    "icon": "Sparkles",
    "blurb": "Generous party buckets serving 4 to 5 members with chicken/mutton biryani, eggs, dalcha & raita."
  },
  "South Indian Chicken Dry Specials": {
    "icon": "Flame",
    "blurb": "Fiery Chettinad, Kongu Pallipalayam & authentic tava-roasted chicken delicacies."
  },
  "Chinese Chicken Starters": {
    "icon": "Sparkles",
    "blurb": "Crispy wok-tossed chicken starters including Dragon Chicken, Manchurian, 65 & drumsticks."
  },
  "South Indian Mutton Dry Specials": {
    "icon": "Flame",
    "blurb": "Slow-roasted tender boneless mutton, succulent bone-marrow nalli chukka & pepper fries."
  },
  "Seafood Starters \u2013 Fish": {
    "icon": "Fish",
    "blurb": "Crispy pan-fried fish fillets, Dragon Fish, spicy Manchurian and golden Fish 65."
  },
  "Seafood Starters \u2013 Prawns": {
    "icon": "Fish",
    "blurb": "Succulent ocean prawns in butter garlic, golden fry, fiery schezwan & pepper roasts."
  },
  "Seafood Starters \u2013 South Indian": {
    "icon": "Fish",
    "blurb": "Fresh King Fish (Vanjaram), crispy golden Nethili fry, Crab Lollipop & Chettinad prawn."
  },
  "Tandoori \u2013 Non-Veg": {
    "icon": "Flame",
    "blurb": "Clay-oven roasted kebabs, smoky chicken tikka, malai kebabs and chef tandoori platter."
  },
  "Arabian Barbecue": {
    "icon": "Flame",
    "blurb": "Charcoal-grilled Alfahm BBQ, tender rotisserie whole grill chicken and zesty peri-peri."
  },
  "South Indian Gravies": {
    "icon": "Soup",
    "blurb": "Traditional earthen-pot chicken kulambu, Madurai style mutton gravy, fish curry & crab masala."
  },
  "Indian Gravy \u2013 Chicken": {
    "icon": "Soup",
    "blurb": "Rich Mughlai gravies, butter chicken masala, kadai chicken and spicy Andhra gravies."
  },
  "Indian Gravy \u2013 Mutton": {
    "icon": "Soup",
    "blurb": "Aromatic Kashmiri Mutton Rogan Josh and rich Kadai Mutton Masala cooked to perfection."
  },
  "Parotta Specials \u2013 Non-Veg": {
    "icon": "Utensils",
    "blurb": "Steamed banana-leaf parottas, Madurai street-style kothu parotta and flaky veechu parotta."
  },
  "Chinese Rice / Noodles \u2013 Non-Veg": {
    "icon": "Utensils",
    "blurb": "High-flame wok tossed basmati fried rice & noodles with chicken, egg, prawns and mutton."
  },
  "Non-Vegetarian Breakfast": {
    "icon": "Utensils",
    "blurb": "Iconic Madurai Kari Dosa, Chicken Keema Dosa, Aattukaal Paaya and salna idlis."
  },
  "Egg Dishes": {
    "icon": "Egg",
    "blurb": "Street-style hot Kalakki, fluffy omelettes, podimas, poriyal and pepper egg masala."
  },
  "Non-Vegetarian Soups": {
    "icon": "Soup",
    "blurb": "Hot, nourishing clear soups, chicken manchow, soothing sweet corn & spicy seafood mix."
  }
};

export const MENU_DISHES: DishItem[] = [
  {
    "id": "dish-1",
    "name": "Egg Dosa",
    "price": "\u20b9110",
    "priceNum": 110,
    "category": "Non-Vegetarian Breakfast",
    "meat": "egg",
    "img": "/dishes/Kalakki.png",
    "desc": "Crispy hot tiffin delicacy paired with flavorful country gravy and fresh spices."
  },
  {
    "id": "dish-2",
    "name": "Egg Masala Dosa",
    "price": "\u20b9150",
    "priceNum": 150,
    "category": "Non-Vegetarian Breakfast",
    "meat": "egg",
    "img": "/dishes/Kalakki.png",
    "desc": "Crispy hot tiffin delicacy paired with flavorful country gravy and fresh spices."
  },
  {
    "id": "dish-3",
    "name": "Mutton Kari Dosa (Madurai Spl)",
    "price": "\u20b9240",
    "priceNum": 240,
    "category": "Non-Vegetarian Breakfast",
    "meat": "mutton",
    "img": "/dishes/Vazhai Ilai Mutton Parotta.png",
    "desc": "Crispy hot tiffin delicacy paired with flavorful country gravy and fresh spices.",
    "tag": "Madurai Icon"
  },
  {
    "id": "dish-4",
    "name": "Chicken Keema Dosa (Madurai Spl)",
    "price": "\u20b9170",
    "priceNum": 170,
    "category": "Non-Vegetarian Breakfast",
    "meat": "chicken",
    "img": "/dishes/Vazhai Ilai Chicken Parotta.png",
    "desc": "Crispy hot tiffin delicacy paired with flavorful country gravy and fresh spices.",
    "tag": "Madurai Icon"
  },
  {
    "id": "dish-5",
    "name": "Mini Salna Idli (2 pcs)",
    "price": "\u20b9130",
    "priceNum": 130,
    "category": "Non-Vegetarian Breakfast",
    "meat": "nonveg",
    "img": "/dishes/Chicken Kulambu.png",
    "desc": "Crispy hot tiffin delicacy paired with flavorful country gravy and fresh spices."
  },
  {
    "id": "dish-6",
    "name": "Idiyappam with Aattukaal Paaya",
    "price": "\u20b9180",
    "priceNum": 180,
    "category": "Non-Vegetarian Breakfast",
    "meat": "mutton",
    "img": "/dishes/Mutton Nalli Chukka.png",
    "desc": "Crispy hot tiffin delicacy paired with flavorful country gravy and fresh spices.",
    "tag": "Traditional Morning"
  },
  {
    "id": "dish-7",
    "name": "Idli with Kudal Curry",
    "price": "\u20b9210",
    "priceNum": 210,
    "category": "Non-Vegetarian Breakfast",
    "meat": "mutton",
    "img": "/dishes/(Kudal) Boti Kulambu.png",
    "desc": "Crispy hot tiffin delicacy paired with flavorful country gravy and fresh spices."
  },
  {
    "id": "dish-8",
    "name": "Egg Kalakki",
    "price": "\u20b990",
    "priceNum": 90,
    "category": "Non-Vegetarian Breakfast",
    "meat": "egg",
    "img": "/dishes/Kalakki.png",
    "desc": "Crispy hot tiffin delicacy paired with flavorful country gravy and fresh spices."
  },
  {
    "id": "dish-9",
    "name": "Idli with Chicken Curry",
    "price": "\u20b9160",
    "priceNum": 160,
    "category": "Non-Vegetarian Breakfast",
    "meat": "chicken",
    "img": "/dishes/Chicken Kulambu.png",
    "desc": "Crispy hot tiffin delicacy paired with flavorful country gravy and fresh spices."
  },
  {
    "id": "dish-10",
    "name": "Kal Dosa (2 pcs) with Chicken Curry",
    "price": "\u20b9190",
    "priceNum": 190,
    "category": "Non-Vegetarian Breakfast",
    "meat": "chicken",
    "img": "/dishes/Chicken Kulambu.png",
    "desc": "Crispy hot tiffin delicacy paired with flavorful country gravy and fresh spices."
  },
  {
    "id": "dish-11",
    "name": "Idli with Fish Kulambu",
    "price": "\u20b9220",
    "priceNum": 220,
    "category": "Non-Vegetarian Breakfast",
    "meat": "fish",
    "img": "/dishes/Mathi Fish Kulambu.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-12",
    "name": "Omelette",
    "price": "\u20b990",
    "priceNum": 90,
    "category": "Non-Vegetarian Breakfast",
    "meat": "egg",
    "img": "/dishes/Omelette.png",
    "desc": "Crispy hot tiffin delicacy paired with flavorful country gravy and fresh spices."
  },
  {
    "id": "dish-13",
    "name": "Idli with Mutton Kulambu",
    "price": "\u20b9260",
    "priceNum": 260,
    "category": "Non-Vegetarian Breakfast",
    "meat": "mutton",
    "img": "/dishes/Special Madurai Style Mutton Kulambu.png",
    "desc": "Crispy hot tiffin delicacy paired with flavorful country gravy and fresh spices."
  },
  {
    "id": "dish-14",
    "name": "Basic Non-Veg Meals",
    "price": "\u20b9280",
    "priceNum": 280,
    "category": "Non-Vegetarian Meals",
    "meat": "nonveg",
    "img": "/dishes/Tharam Spl Chicken Meals.png",
    "desc": "Authentic non-vegetarian meals dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-15",
    "name": "Tharam Spl Chicken Meals",
    "price": "\u20b9399",
    "priceNum": 399,
    "category": "Non-Vegetarian Meals",
    "meat": "chicken",
    "img": "/dishes/Tharam Spl Chicken Meals.png",
    "desc": "Authentic non-vegetarian meals dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes.",
    "tag": "Bestseller"
  },
  {
    "id": "dish-16",
    "name": "Tharam Spl Mutton Meals",
    "price": "\u20b9499",
    "priceNum": 499,
    "category": "Non-Vegetarian Meals",
    "meat": "mutton",
    "img": "/dishes/Tharam Spl Mutton Meals.png",
    "desc": "Authentic non-vegetarian meals dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes.",
    "tag": "Grand Feast"
  },
  {
    "id": "dish-17",
    "name": "Tharam Spl Seafood Meals",
    "price": "\u20b9499",
    "priceNum": 499,
    "category": "Non-Vegetarian Meals",
    "meat": "seafood",
    "img": "/dishes/Tharam Spl Seafood Meals.png",
    "desc": "Authentic non-vegetarian meals dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes.",
    "tag": "Coastal Feast"
  },
  {
    "id": "dish-18",
    "name": "Tharam Spl Chicken Biryani",
    "price": "\u20b9250",
    "priceNum": 250,
    "category": "Special Non-Veg Biryani",
    "meat": "chicken",
    "img": "/dishes/Tharam Spl Chicken Biryani.png",
    "desc": "Fragrant seeraga samba dum biryani slow-cooked with tender chicken and aromatic whole spices.",
    "tag": "Bestseller"
  },
  {
    "id": "dish-19",
    "name": "Chicken 65 Biryani",
    "price": "\u20b9260",
    "priceNum": 260,
    "category": "Special Non-Veg Biryani",
    "meat": "chicken",
    "img": "/dishes/Chicken 65 Biryani.png",
    "desc": "Fragrant seeraga samba dum biryani slow-cooked with tender chicken and aromatic whole spices.",
    "tag": "Popular"
  },
  {
    "id": "dish-20",
    "name": "Chicken Plain Biryani with Egg",
    "price": "\u20b9170",
    "priceNum": 170,
    "category": "Special Non-Veg Biryani",
    "meat": "egg",
    "img": "/dishes/Chicken Plain Biryani.png",
    "desc": "Fragrant seeraga samba dum biryani slow-cooked with tender egg and aromatic whole spices."
  },
  {
    "id": "dish-21",
    "name": "Tharam Spl Mutton Biryani",
    "price": "\u20b9350",
    "priceNum": 350,
    "category": "Special Non-Veg Biryani",
    "meat": "mutton",
    "img": "/dishes/Tharam Spl Mutton Biryani.png",
    "desc": "Fragrant seeraga samba dum biryani slow-cooked with tender mutton and aromatic whole spices.",
    "tag": "Signature"
  },
  {
    "id": "dish-22",
    "name": "Mutton Chukka Biryani",
    "price": "\u20b9390",
    "priceNum": 390,
    "category": "Special Non-Veg Biryani",
    "meat": "mutton",
    "img": "/dishes/Mutton Chukka Biryani.png",
    "desc": "Fragrant seeraga samba dum biryani slow-cooked with tender mutton and aromatic whole spices.",
    "tag": "Chef Special"
  },
  {
    "id": "dish-23",
    "name": "Mutton Plain Biryani with Egg",
    "price": "\u20b9260",
    "priceNum": 260,
    "category": "Special Non-Veg Biryani",
    "meat": "mutton",
    "img": "/dishes/Mutton Plain Biryani.png",
    "desc": "Fragrant seeraga samba dum biryani slow-cooked with tender mutton and aromatic whole spices."
  },
  {
    "id": "dish-24",
    "name": "Naatu Kozhi Biryani",
    "price": "\u20b9290",
    "priceNum": 290,
    "category": "Special Non-Veg Biryani",
    "meat": "chicken",
    "img": "/dishes/Naatu Kozhi Biryani.png",
    "desc": "Fragrant seeraga samba dum biryani slow-cooked with tender chicken and aromatic whole spices.",
    "tag": "Country Chicken"
  },
  {
    "id": "dish-25",
    "name": "Prawn Biryani",
    "price": "\u20b9420",
    "priceNum": 420,
    "category": "Special Non-Veg Biryani",
    "meat": "prawn",
    "img": "/dishes/Prawn Biryani.png",
    "desc": "Fragrant seeraga samba dum biryani slow-cooked with tender prawn and aromatic whole spices.",
    "tag": "Seafood Special"
  },
  {
    "id": "dish-26",
    "name": "Chicken Kulambu",
    "price": "\u20b9250",
    "priceNum": 250,
    "category": "South Indian Gravies",
    "meat": "chicken",
    "img": "/dishes/Chicken Kulambu.png",
    "desc": "Authentic south indian gravies dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-27",
    "name": "Chicken Chinthamani (Spicy)",
    "price": "\u20b9260",
    "priceNum": 260,
    "category": "South Indian Gravies",
    "meat": "chicken",
    "img": "/dishes/Chicken Sindhamani - Dry.png",
    "desc": "Authentic south indian gravies dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes.",
    "tag": "Fiery Dry"
  },
  {
    "id": "dish-28",
    "name": "Chettinadu Chicken",
    "price": "\u20b9260",
    "priceNum": 260,
    "category": "South Indian Gravies",
    "meat": "chicken",
    "img": "/dishes/Chettinadu Chicken.png",
    "desc": "Authentic south indian gravies dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes.",
    "tag": "Chettinad Classic"
  },
  {
    "id": "dish-29",
    "name": "White Rice",
    "price": "\u20b990",
    "priceNum": 90,
    "category": "South Indian Gravies",
    "meat": "nonveg",
    "img": "/dishes/Tharam Spl Chicken Meals.png",
    "desc": "Authentic south indian gravies dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-30",
    "name": "Ragi Mudde",
    "price": "\u20b9120",
    "priceNum": 120,
    "category": "South Indian Gravies",
    "meat": "nonveg",
    "img": "/dishes/Tharam Spl Mutton Meals.png",
    "desc": "Authentic south indian gravies dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-31",
    "name": "Madurai Style Mutton Kulambu",
    "price": "\u20b9340",
    "priceNum": 340,
    "category": "South Indian Gravies",
    "meat": "mutton",
    "img": "/dishes/Special Madurai Style Mutton Kulambu.png",
    "desc": "Authentic south indian gravies dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-32",
    "name": "Kudal (Boti) Kulambu",
    "price": "\u20b9310",
    "priceNum": 310,
    "category": "South Indian Gravies",
    "meat": "mutton",
    "img": "/dishes/(Kudal) Boti Kulambu.png",
    "desc": "Authentic south indian gravies dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-33",
    "name": "Mathi Meen Kulambu",
    "price": "\u20b9240",
    "priceNum": 240,
    "category": "South Indian Gravies",
    "meat": "fish",
    "img": "/dishes/Mathi Fish Kulambu.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-34",
    "name": "Chettinadu Style Prawn Thokku",
    "price": "\u20b9440",
    "priceNum": 440,
    "category": "South Indian Gravies",
    "meat": "prawn",
    "img": "/dishes/Chettinadu Style Prawn Kulambu.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-35",
    "name": "Nandu (Crab) Masala",
    "price": "\u20b9440",
    "priceNum": 440,
    "category": "South Indian Gravies",
    "meat": "crab",
    "img": "/dishes/Crab Gravy (Nandu Masala).png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection.",
    "tag": "Coastal Favorite"
  },
  {
    "id": "dish-36",
    "name": "Kalakki",
    "price": "\u20b990",
    "priceNum": 90,
    "category": "Egg Dishes",
    "meat": "egg",
    "img": "/dishes/Kalakki.png",
    "desc": "Authentic egg dishes dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes.",
    "tag": "Street Favorite"
  },
  {
    "id": "dish-37",
    "name": "Omelette",
    "price": "\u20b990",
    "priceNum": 90,
    "category": "Egg Dishes",
    "meat": "egg",
    "img": "/dishes/Omelette.png",
    "desc": "Authentic egg dishes dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-38",
    "name": "Boiled Egg",
    "price": "\u20b930",
    "priceNum": 30,
    "category": "Egg Dishes",
    "meat": "egg",
    "img": "/dishes/Boiled Egg.png",
    "desc": "Authentic egg dishes dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-39",
    "name": "Egg Poriyal",
    "price": "\u20b9120",
    "priceNum": 120,
    "category": "Egg Dishes",
    "meat": "egg",
    "img": "/dishes/Egg Poriyal (Podimas).png",
    "desc": "Authentic egg dishes dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-40",
    "name": "Egg Podimas",
    "price": "\u20b9150",
    "priceNum": 150,
    "category": "Egg Dishes",
    "meat": "egg",
    "img": "/dishes/Egg Mutta Podimas.png",
    "desc": "Authentic egg dishes dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-41",
    "name": "Egg Masala (2 Eggs)",
    "price": "\u20b9160",
    "priceNum": 160,
    "category": "Egg Dishes",
    "meat": "egg",
    "img": "/dishes/Egg Masala (2 Eggs).png",
    "desc": "Authentic egg dishes dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-42",
    "name": "Chef Spl Chicken Maharani",
    "price": "\u20b9300",
    "priceNum": 300,
    "category": "South Indian Chicken Dry Specials",
    "meat": "chicken",
    "img": "/dishes/Chef Spl. Chicken Maharani.png",
    "desc": "Authentic south indian chicken dry specials dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes.",
    "tag": "Royal Mild"
  },
  {
    "id": "dish-43",
    "name": "Chicken Pallipalayam",
    "price": "\u20b9280",
    "priceNum": 280,
    "category": "South Indian Chicken Dry Specials",
    "meat": "chicken",
    "img": "/dishes/Chicken Pallipalayam.png",
    "desc": "Authentic south indian chicken dry specials dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes.",
    "tag": "Kongu Special"
  },
  {
    "id": "dish-44",
    "name": "Chicken Chinthamani (Spicy)",
    "price": "\u20b9280",
    "priceNum": 280,
    "category": "South Indian Chicken Dry Specials",
    "meat": "chicken",
    "img": "/dishes/Chicken Sindhamani - Dry.png",
    "desc": "Authentic south indian chicken dry specials dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes.",
    "tag": "Fiery Dry"
  },
  {
    "id": "dish-45",
    "name": "Chicken Pepper Fry",
    "price": "\u20b9280",
    "priceNum": 280,
    "category": "South Indian Chicken Dry Specials",
    "meat": "chicken",
    "img": "/dishes/Chicken Pepper Fry.png",
    "desc": "Authentic south indian chicken dry specials dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-46",
    "name": "Naatu Kozhi Pichu Pottathu",
    "price": "\u20b9270",
    "priceNum": 270,
    "category": "South Indian Chicken Dry Specials",
    "meat": "chicken",
    "img": "/dishes/Chicken Pichupottathu.png",
    "desc": "Authentic south indian chicken dry specials dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-47",
    "name": "Manapatti Mutton Chukka",
    "price": "\u20b9420",
    "priceNum": 420,
    "category": "South Indian Mutton Dry Specials",
    "meat": "mutton",
    "img": "/dishes/Manapatti Mutton Chukka.png",
    "desc": "Authentic south indian mutton dry specials dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes.",
    "tag": "Signature"
  },
  {
    "id": "dish-48",
    "name": "Mutton Chettinadu Dry",
    "price": "\u20b9380",
    "priceNum": 380,
    "category": "South Indian Mutton Dry Specials",
    "meat": "mutton",
    "img": "/dishes/Mutton Chettinadu Dry.png",
    "desc": "Authentic south indian mutton dry specials dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-49",
    "name": "Mutton Pepper Fry",
    "price": "\u20b9390",
    "priceNum": 390,
    "category": "South Indian Mutton Dry Specials",
    "meat": "mutton",
    "img": "/dishes/Mutton Pepper Fry.png",
    "desc": "Authentic south indian mutton dry specials dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-50",
    "name": "Mutton Nalli Chukka",
    "price": "\u20b9490",
    "priceNum": 490,
    "category": "South Indian Mutton Dry Specials",
    "meat": "mutton",
    "img": "/dishes/Mutton Nalli Chukka.png",
    "desc": "Authentic south indian mutton dry specials dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes.",
    "tag": "Must Try"
  },
  {
    "id": "dish-51",
    "name": "Mutton Kudal Pepper Fry",
    "price": "\u20b9370",
    "priceNum": 370,
    "category": "South Indian Mutton Dry Specials",
    "meat": "mutton",
    "img": "/dishes/Mutton Boti Pepper Fry.png",
    "desc": "Authentic south indian mutton dry specials dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-52",
    "name": "Salem Spl Mutton Chilly",
    "price": "\u20b9290",
    "priceNum": 290,
    "category": "South Indian Mutton Dry Specials",
    "meat": "mutton",
    "img": "/dishes/Salem Spl. Mutton Crispy Chilli.png",
    "desc": "Authentic south indian mutton dry specials dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-53",
    "name": "Mutton Liver Fry",
    "price": "\u20b9410",
    "priceNum": 410,
    "category": "South Indian Mutton Dry Specials",
    "meat": "mutton",
    "img": "/dishes/Tharam Spl Chicken Biryani.png",
    "desc": "Authentic south indian mutton dry specials dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-54",
    "name": "Vanjaram Fish Fry",
    "price": "\u20b9400",
    "priceNum": 400,
    "category": "Seafood Starters \u2013 South Indian",
    "meat": "fish",
    "img": "/dishes/Vanjayam Fish Fry.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection.",
    "tag": "Fresh Catch"
  },
  {
    "id": "dish-55",
    "name": "Nethili Fish Fry",
    "price": "\u20b9280",
    "priceNum": 280,
    "category": "Seafood Starters \u2013 South Indian",
    "meat": "fish",
    "img": "/dishes/Nethili Fish Fry.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection.",
    "tag": "Crispy Gold"
  },
  {
    "id": "dish-56",
    "name": "Fish Chilly",
    "price": "\u20b9360",
    "priceNum": 360,
    "category": "Seafood Starters \u2013 South Indian",
    "meat": "fish",
    "img": "/dishes/Fish Chilly.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-57",
    "name": "Fish Fingers",
    "price": "\u20b9360",
    "priceNum": 360,
    "category": "Seafood Starters \u2013 South Indian",
    "meat": "fish",
    "img": "/dishes/Fish Fingers - South Indian Starters.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-58",
    "name": "Crab Lollipop",
    "price": "\u20b9360",
    "priceNum": 360,
    "category": "Seafood Starters \u2013 South Indian",
    "meat": "crab",
    "img": "/dishes/Crab Lollipop.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection.",
    "tag": "Crispy Bite"
  },
  {
    "id": "dish-59",
    "name": "Prawn Chilly",
    "price": "\u20b9380",
    "priceNum": 380,
    "category": "Seafood Starters \u2013 South Indian",
    "meat": "prawn",
    "img": "/dishes/Prawn Chilly.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-60",
    "name": "Butter Garlic Prawn",
    "price": "\u20b9390",
    "priceNum": 390,
    "category": "Seafood Starters \u2013 South Indian",
    "meat": "prawn",
    "img": "/dishes/Butter Garlic Prawn.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-61",
    "name": "Ginger Prawn",
    "price": "\u20b9380",
    "priceNum": 380,
    "category": "Seafood Starters \u2013 South Indian",
    "meat": "prawn",
    "img": "/dishes/Ginger Prawn - South Indian Starters.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-62",
    "name": "Chettinadu Prawn",
    "price": "\u20b9390",
    "priceNum": 390,
    "category": "Seafood Starters \u2013 South Indian",
    "meat": "prawn",
    "img": "/dishes/Chettinad Prawn.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-63",
    "name": "Vazhai Ilai Chicken Parotta",
    "price": "\u20b9220",
    "priceNum": 220,
    "category": "Parotta Specials \u2013 Non-Veg",
    "meat": "chicken",
    "img": "/dishes/Vazhai Ilai Chicken Parotta.png",
    "desc": "Flaky layered parotta blended with spiced chicken masala and aromatic salna.",
    "tag": "Bestseller"
  },
  {
    "id": "dish-64",
    "name": "Vazhai Ilai Mutton Parotta",
    "price": "\u20b9290",
    "priceNum": 290,
    "category": "Parotta Specials \u2013 Non-Veg",
    "meat": "mutton",
    "img": "/dishes/Vazhai Ilai Mutton Parotta.png",
    "desc": "Flaky layered parotta blended with spiced mutton masala and aromatic salna.",
    "tag": "Signature Feast"
  },
  {
    "id": "dish-65",
    "name": "Egg Veechu Parotta",
    "price": "\u20b9140",
    "priceNum": 140,
    "category": "Parotta Specials \u2013 Non-Veg",
    "meat": "egg",
    "img": "/dishes/Egg Veechu Parotta.png",
    "desc": "Flaky layered parotta blended with spiced egg masala and aromatic salna."
  },
  {
    "id": "dish-66",
    "name": "Chicken Veechu Parotta",
    "price": "\u20b9180",
    "priceNum": 180,
    "category": "Parotta Specials \u2013 Non-Veg",
    "meat": "chicken",
    "img": "/dishes/Chicken Veechu Parotta.png",
    "desc": "Flaky layered parotta blended with spiced chicken masala and aromatic salna."
  },
  {
    "id": "dish-67",
    "name": "Mutton Kothu Parotta",
    "price": "\u20b9260",
    "priceNum": 260,
    "category": "Parotta Specials \u2013 Non-Veg",
    "meat": "mutton",
    "img": "/dishes/Mutton Kothu Parotta.png",
    "desc": "Flaky layered parotta blended with spiced mutton masala and aromatic salna.",
    "tag": "Street Classic"
  },
  {
    "id": "dish-68",
    "name": "Mixed Non-Veg Kothu Parotta",
    "price": "\u20b9320",
    "priceNum": 320,
    "category": "Parotta Specials \u2013 Non-Veg",
    "meat": "nonveg",
    "img": "/dishes/Mixed (Egg, Chicken, Mutton) Kothu Parotta.png",
    "desc": "Flaky layered parotta blended with spiced nonveg masala and aromatic salna."
  },
  {
    "id": "dish-69",
    "name": "Handi Chicken Masala",
    "price": "\u20b9280",
    "priceNum": 280,
    "category": "Indian Gravy \u2013 Chicken",
    "meat": "chicken",
    "img": "/dishes/Handi Chicken Masala.png",
    "desc": "Authentic indian gravy \u2013 chicken dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-70",
    "name": "Kadai Chicken Masala",
    "price": "\u20b9280",
    "priceNum": 280,
    "category": "Indian Gravy \u2013 Chicken",
    "meat": "chicken",
    "img": "/dishes/Kadai Chicken Masala.png",
    "desc": "Authentic indian gravy \u2013 chicken dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-71",
    "name": "Butter Chicken Masala",
    "price": "\u20b9320",
    "priceNum": 320,
    "category": "Indian Gravy \u2013 Chicken",
    "meat": "chicken",
    "img": "/dishes/Butter Chicken Masala.png",
    "desc": "Authentic indian gravy \u2013 chicken dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-72",
    "name": "Chicken Tikka Masala",
    "price": "\u20b9300",
    "priceNum": 300,
    "category": "Indian Gravy \u2013 Chicken",
    "meat": "chicken",
    "img": "/dishes/Chicken Tikka Masala.png",
    "desc": "Authentic indian gravy \u2013 chicken dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-73",
    "name": "Hyderabad Chicken Gravy",
    "price": "\u20b9320",
    "priceNum": 320,
    "category": "Indian Gravy \u2013 Chicken",
    "meat": "chicken",
    "img": "/dishes/Hyderabadi Chicken Gravy.png",
    "desc": "Authentic indian gravy \u2013 chicken dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-74",
    "name": "Mughalai Chicken Gravy",
    "price": "\u20b9350",
    "priceNum": 350,
    "category": "Indian Gravy \u2013 Chicken",
    "meat": "chicken",
    "img": "/dishes/Mughlai Chicken Gravy.png",
    "desc": "Authentic indian gravy \u2013 chicken dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-75",
    "name": "Guntur Chicken Masala",
    "price": "\u20b9290",
    "priceNum": 290,
    "category": "Indian Gravy \u2013 Chicken",
    "meat": "chicken",
    "img": "/dishes/Guntur Chicken Masala.png",
    "desc": "Authentic indian gravy \u2013 chicken dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-76",
    "name": "Ginger Garlic Chicken Gravy",
    "price": "\u20b9310",
    "priceNum": 310,
    "category": "Indian Gravy \u2013 Chicken",
    "meat": "chicken",
    "img": "/dishes/Ginger Garlic Chicken Gravy.png",
    "desc": "Authentic indian gravy \u2013 chicken dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-77",
    "name": "Hyderabad Leg Gravy (2 pcs)",
    "price": "\u20b9350",
    "priceNum": 350,
    "category": "Indian Gravy \u2013 Chicken",
    "meat": "chicken",
    "img": "/dishes/Hyderabadi Leg Gravy (2 pcs).png",
    "desc": "Authentic indian gravy \u2013 chicken dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-78",
    "name": "Schezwan Chicken Masala",
    "price": "\u20b9320",
    "priceNum": 320,
    "category": "Indian Gravy \u2013 Chicken",
    "meat": "chicken",
    "img": "/dishes/Schezwan Chicken Masala.png",
    "desc": "Authentic indian gravy \u2013 chicken dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-79",
    "name": "Patiala Chicken Gravy",
    "price": "\u20b9330",
    "priceNum": 330,
    "category": "Indian Gravy \u2013 Chicken",
    "meat": "chicken",
    "img": "/dishes/Patiala Chicken Gravy.png",
    "desc": "Authentic indian gravy \u2013 chicken dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-80",
    "name": "Chicken Kofta Curry",
    "price": "\u20b9360",
    "priceNum": 360,
    "category": "Indian Gravy \u2013 Chicken",
    "meat": "chicken",
    "img": "/dishes/Chicken Kofta.png",
    "desc": "Authentic indian gravy \u2013 chicken dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-81",
    "name": "Pepper Chicken Masala",
    "price": "\u20b9280",
    "priceNum": 280,
    "category": "Indian Gravy \u2013 Chicken",
    "meat": "chicken",
    "img": "/dishes/Pepper Chicken Masala.png",
    "desc": "Authentic indian gravy \u2013 chicken dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-82",
    "name": "Mutton Rogan Josh",
    "price": "\u20b9390",
    "priceNum": 390,
    "category": "Indian Gravy \u2013 Mutton",
    "meat": "mutton",
    "img": "/dishes/Mutton Rogan Josh.png",
    "desc": "Authentic indian gravy \u2013 mutton dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-83",
    "name": "Kadai Mutton Masala",
    "price": "\u20b9380",
    "priceNum": 380,
    "category": "Indian Gravy \u2013 Mutton",
    "meat": "mutton",
    "img": "/dishes/Kadai Mutton Masala.png",
    "desc": "Authentic indian gravy \u2013 mutton dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-84",
    "name": "Chicken 65 Boneless (6 pcs)",
    "price": "\u20b9250",
    "priceNum": 250,
    "category": "Chinese Chicken Starters",
    "meat": "chicken",
    "img": "/dishes/Chicken 65.png",
    "desc": "Authentic chinese chicken starters dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-85",
    "name": "Dragon Chicken",
    "price": "\u20b9290",
    "priceNum": 290,
    "category": "Chinese Chicken Starters",
    "meat": "chicken",
    "img": "/dishes/Dragon Chicken.png",
    "desc": "Authentic chinese chicken starters dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes.",
    "tag": "Crowd Favorite"
  },
  {
    "id": "dish-86",
    "name": "Honey Chicken",
    "price": "\u20b9300",
    "priceNum": 300,
    "category": "Chinese Chicken Starters",
    "meat": "chicken",
    "img": "/dishes/Honey Chicken.png",
    "desc": "Authentic chinese chicken starters dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-87",
    "name": "Hot Pepper Chicken",
    "price": "\u20b9280",
    "priceNum": 280,
    "category": "Chinese Chicken Starters",
    "meat": "chicken",
    "img": "/dishes/Hot Pepper Chicken.png",
    "desc": "Authentic chinese chicken starters dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-88",
    "name": "Schezwan Chicken",
    "price": "\u20b9310",
    "priceNum": 310,
    "category": "Chinese Chicken Starters",
    "meat": "chicken",
    "img": "/dishes/Schezwan Chicken.png",
    "desc": "Authentic chinese chicken starters dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-89",
    "name": "Crunchy Chicken",
    "price": "\u20b9300",
    "priceNum": 300,
    "category": "Chinese Chicken Starters",
    "meat": "chicken",
    "img": "/dishes/Crunchy Chicken.png",
    "desc": "Authentic chinese chicken starters dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-90",
    "name": "Lemon Chicken",
    "price": "\u20b9290",
    "priceNum": 290,
    "category": "Chinese Chicken Starters",
    "meat": "chicken",
    "img": "/dishes/Lemon Chicken.png",
    "desc": "Authentic chinese chicken starters dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-91",
    "name": "Popcorn Chicken (10 pcs)",
    "price": "\u20b9280",
    "priceNum": 280,
    "category": "Chinese Chicken Starters",
    "meat": "chicken",
    "img": "/dishes/Popcorn Chicken (10 pcs).png",
    "desc": "Authentic chinese chicken starters dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-92",
    "name": "Ginger Chicken",
    "price": "\u20b9280",
    "priceNum": 280,
    "category": "Chinese Chicken Starters",
    "meat": "chicken",
    "img": "/dishes/Ginger Chicken.png",
    "desc": "Authentic chinese chicken starters dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-93",
    "name": "Butter Garlic Chicken",
    "price": "\u20b9310",
    "priceNum": 310,
    "category": "Chinese Chicken Starters",
    "meat": "chicken",
    "img": "/dishes/Butter Garlic Chicken.png",
    "desc": "Authentic chinese chicken starters dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-94",
    "name": "Sesame Chicken",
    "price": "\u20b9300",
    "priceNum": 300,
    "category": "Chinese Chicken Starters",
    "meat": "chicken",
    "img": "/dishes/Sesame Chicken.png",
    "desc": "Authentic chinese chicken starters dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-95",
    "name": "Lollipop Chicken (5 pcs)",
    "price": "\u20b9290",
    "priceNum": 290,
    "category": "Chinese Chicken Starters",
    "meat": "chicken",
    "img": "/dishes/Chicken Lollipop (5 pcs).png",
    "desc": "Authentic chinese chicken starters dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-96",
    "name": "Chicken 555",
    "price": "\u20b9300",
    "priceNum": 300,
    "category": "Chinese Chicken Starters",
    "meat": "chicken",
    "img": "/dishes/Chicken 555.png",
    "desc": "Authentic chinese chicken starters dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-97",
    "name": "Chilli Chicken",
    "price": "\u20b9280",
    "priceNum": 280,
    "category": "Chinese Chicken Starters",
    "meat": "chicken",
    "img": "/dishes/Chilli Chicken.png",
    "desc": "Authentic chinese chicken starters dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-98",
    "name": "Chicken Manchurian",
    "price": "\u20b9290",
    "priceNum": 290,
    "category": "Chinese Chicken Starters",
    "meat": "chicken",
    "img": "/dishes/Chicken Manchurian.png",
    "desc": "Authentic chinese chicken starters dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-99",
    "name": "Drumstick Chicken (5 pcs)",
    "price": "\u20b9350",
    "priceNum": 350,
    "category": "Chinese Chicken Starters",
    "meat": "chicken",
    "img": "/dishes/Drumstick Chicken (Spl.).png",
    "desc": "Authentic chinese chicken starters dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-100",
    "name": "Drums of Heaven Chicken (6 pcs)",
    "price": "\u20b9360",
    "priceNum": 360,
    "category": "Chinese Chicken Starters",
    "meat": "chicken",
    "img": "/dishes/Drums of Heaven Chicken (6 pcs).png",
    "desc": "Authentic chinese chicken starters dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-101",
    "name": "Wings Pepper Fry (6 pcs)",
    "price": "\u20b9280",
    "priceNum": 280,
    "category": "Chinese Chicken Starters",
    "meat": "chicken",
    "img": "/dishes/Wings Pepper Fry (6 pcs).png",
    "desc": "Authentic chinese chicken starters dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-102",
    "name": "Andhra Chicken Dry",
    "price": "\u20b9280",
    "priceNum": 280,
    "category": "Chinese Chicken Starters",
    "meat": "chicken",
    "img": "/dishes/Andhra Chicken Dry.png",
    "desc": "Authentic chinese chicken starters dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-103",
    "name": "Crispy Fried Chicken (5 pcs)",
    "price": "\u20b9320",
    "priceNum": 320,
    "category": "Chinese Chicken Starters",
    "meat": "chicken",
    "img": "/dishes/Crispy Fried Chicken (5 pcs).png",
    "desc": "Authentic chinese chicken starters dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-104",
    "name": "Singapore Chicken Dry",
    "price": "\u20b9320",
    "priceNum": 320,
    "category": "Chinese Chicken Starters",
    "meat": "chicken",
    "img": "/dishes/Singapore Chicken Dry.png",
    "desc": "Authentic chinese chicken starters dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-105",
    "name": "Japan Chicken",
    "price": "\u20b9320",
    "priceNum": 320,
    "category": "Chinese Chicken Starters",
    "meat": "chicken",
    "img": "/dishes/Japan Chicken.png",
    "desc": "Authentic chinese chicken starters dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-106",
    "name": "Chicken Fried Rice / Noodles",
    "price": "\u20b9260",
    "priceNum": 260,
    "category": "Chinese Rice / Noodles \u2013 Non-Veg",
    "meat": "chicken",
    "img": "/dishes/Chicken 65 Biryani.png",
    "desc": "Authentic chinese rice / noodles \u2013 non-veg dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-107",
    "name": "Egg Fried Rice / Noodles",
    "price": "\u20b9220",
    "priceNum": 220,
    "category": "Chinese Rice / Noodles \u2013 Non-Veg",
    "meat": "egg",
    "img": "/dishes/Egg Biryani.png",
    "desc": "Authentic chinese rice / noodles \u2013 non-veg dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-108",
    "name": "Schezwan Chicken Fried Rice / Noodles",
    "price": "\u20b9280",
    "priceNum": 280,
    "category": "Chinese Rice / Noodles \u2013 Non-Veg",
    "meat": "chicken",
    "img": "/dishes/Chicken 65 Biryani.png",
    "desc": "Authentic chinese rice / noodles \u2013 non-veg dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-109",
    "name": "Schezwan Egg Fried Rice / Noodles",
    "price": "\u20b9240",
    "priceNum": 240,
    "category": "Chinese Rice / Noodles \u2013 Non-Veg",
    "meat": "egg",
    "img": "/dishes/Egg Biryani.png",
    "desc": "Authentic chinese rice / noodles \u2013 non-veg dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-110",
    "name": "Mixed Non-Veg Fried Rice / Noodles",
    "price": "\u20b9320",
    "priceNum": 320,
    "category": "Chinese Rice / Noodles \u2013 Non-Veg",
    "meat": "nonveg",
    "img": "/dishes/Tharam Spl Chicken Biryani.png",
    "desc": "Authentic chinese rice / noodles \u2013 non-veg dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-111",
    "name": "Schezwan Non-Veg Mixed Fried Rice / Noodles",
    "price": "\u20b9340",
    "priceNum": 340,
    "category": "Chinese Rice / Noodles \u2013 Non-Veg",
    "meat": "nonveg",
    "img": "/dishes/Tharam Spl Chicken Biryani.png",
    "desc": "Authentic chinese rice / noodles \u2013 non-veg dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-112",
    "name": "Prawn Fried Rice / Noodles",
    "price": "\u20b9330",
    "priceNum": 330,
    "category": "Chinese Rice / Noodles \u2013 Non-Veg",
    "meat": "prawn",
    "img": "/dishes/Prawn Biryani.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-113",
    "name": "Schezwan Prawn Fried Rice / Noodles",
    "price": "\u20b9350",
    "priceNum": 350,
    "category": "Chinese Rice / Noodles \u2013 Non-Veg",
    "meat": "prawn",
    "img": "/dishes/Prawn Biryani.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-114",
    "name": "Mutton Fried Rice",
    "price": "\u20b9300",
    "priceNum": 300,
    "category": "Chinese Rice / Noodles \u2013 Non-Veg",
    "meat": "mutton",
    "img": "/dishes/Mutton Chukka Biryani.png",
    "desc": "Authentic chinese rice / noodles \u2013 non-veg dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-115",
    "name": "Schezwan Mutton Fried Rice / Noodles",
    "price": "\u20b9320",
    "priceNum": 320,
    "category": "Chinese Rice / Noodles \u2013 Non-Veg",
    "meat": "mutton",
    "img": "/dishes/Mutton Chukka Biryani.png",
    "desc": "Authentic chinese rice / noodles \u2013 non-veg dish prepared with fresh ingredients, signature stone-ground spices and traditional recipes."
  },
  {
    "id": "dish-116",
    "name": "Tandoori Chicken (Half)",
    "price": "\u20b9300",
    "priceNum": 300,
    "category": "Tandoori \u2013 Non-Veg",
    "meat": "chicken",
    "img": "/dishes/Tandoori Chicken - Half.png",
    "desc": "Fire-roasted over hot coals with aromatic spice marinade and herb butter glaze."
  },
  {
    "id": "dish-117",
    "name": "Tandoori Chicken (Full)",
    "price": "\u20b9600",
    "priceNum": 600,
    "category": "Tandoori \u2013 Non-Veg",
    "meat": "chicken",
    "img": "/dishes/Tandoori Chicken - Full.png",
    "desc": "Fire-roasted over hot coals with aromatic spice marinade and herb butter glaze.",
    "tag": "Bestseller"
  },
  {
    "id": "dish-118",
    "name": "Chicken Tikka (6 pcs)",
    "price": "\u20b9320",
    "priceNum": 320,
    "category": "Tandoori \u2013 Non-Veg",
    "meat": "chicken",
    "img": "/dishes/Chicken Tikka (6 pcs).png",
    "desc": "Fire-roasted over hot coals with aromatic spice marinade and herb butter glaze."
  },
  {
    "id": "dish-119",
    "name": "Tangri Kebab",
    "price": "\u20b9300",
    "priceNum": 300,
    "category": "Tandoori \u2013 Non-Veg",
    "meat": "chicken",
    "img": "/dishes/Tangri Kebab (3 pcs-leg).png",
    "desc": "Fire-roasted over hot coals with aromatic spice marinade and herb butter glaze."
  },
  {
    "id": "dish-120",
    "name": "Murgh Malai Kebab (6 pcs)",
    "price": "\u20b9350",
    "priceNum": 350,
    "category": "Tandoori \u2013 Non-Veg",
    "meat": "chicken",
    "img": "/dishes/Murgh Malai Kebab (6 pcs).png",
    "desc": "Fire-roasted over hot coals with aromatic spice marinade and herb butter glaze."
  },
  {
    "id": "dish-121",
    "name": "Chicken Hariyali Kebab (6 pcs)",
    "price": "\u20b9300",
    "priceNum": 300,
    "category": "Tandoori \u2013 Non-Veg",
    "meat": "chicken",
    "img": "/dishes/Chicken Hariyali Kebab (6 pcs).png",
    "desc": "Fire-roasted over hot coals with aromatic spice marinade and herb butter glaze."
  },
  {
    "id": "dish-122",
    "name": "Chicken Sheekh Kebab",
    "price": "\u20b9320",
    "priceNum": 320,
    "category": "Tandoori \u2013 Non-Veg",
    "meat": "chicken",
    "img": "/dishes/Chicken Seekh Kebab.png",
    "desc": "Fire-roasted over hot coals with aromatic spice marinade and herb butter glaze."
  },
  {
    "id": "dish-123",
    "name": "Mutton Sheekh Kebab",
    "price": "\u20b9370",
    "priceNum": 370,
    "category": "Tandoori \u2013 Non-Veg",
    "meat": "mutton",
    "img": "/dishes/Mutton Seekh Kebab.png",
    "desc": "Fire-roasted over hot coals with aromatic spice marinade and herb butter glaze."
  },
  {
    "id": "dish-124",
    "name": "Tandoori Platter (8 Varieties)",
    "price": "\u20b9699",
    "priceNum": 699,
    "category": "Tandoori \u2013 Non-Veg",
    "meat": "nonveg",
    "img": "/dishes/Tandoori Platter (8 Varieties).png",
    "desc": "Fire-roasted over hot coals with aromatic spice marinade and herb butter glaze.",
    "tag": "Chef Platter"
  },
  {
    "id": "dish-125",
    "name": "Prawn Tikka",
    "price": "\u20b9380",
    "priceNum": 380,
    "category": "Tandoori \u2013 Non-Veg",
    "meat": "prawn",
    "img": "/dishes/Prawn Tikka (7 pcs).png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-126",
    "name": "Fish Tikka",
    "price": "\u20b9380",
    "priceNum": 380,
    "category": "Tandoori \u2013 Non-Veg",
    "meat": "fish",
    "img": "/dishes/Fish Tikka (5 pcs).png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-127",
    "name": "Grill Chicken (Full)",
    "price": "\u20b9600",
    "priceNum": 600,
    "category": "Arabian Barbecue",
    "meat": "chicken",
    "img": "/dishes/Grill Chicken (Full).png",
    "desc": "Fire-roasted over hot coals with aromatic spice marinade and herb butter glaze."
  },
  {
    "id": "dish-128",
    "name": "Grill Chicken (Half)",
    "price": "\u20b9300",
    "priceNum": 300,
    "category": "Arabian Barbecue",
    "meat": "chicken",
    "img": "/dishes/Grill Chicken (Half).png",
    "desc": "Fire-roasted over hot coals with aromatic spice marinade and herb butter glaze."
  },
  {
    "id": "dish-129",
    "name": "Peri Peri Barbecue (Full)",
    "price": "\u20b9650",
    "priceNum": 650,
    "category": "Arabian Barbecue",
    "meat": "nonveg",
    "img": "/dishes/Peri Peri Barbeque (Full).png",
    "desc": "Fire-roasted over hot coals with aromatic spice marinade and herb butter glaze."
  },
  {
    "id": "dish-130",
    "name": "Peri Peri Barbecue (Half)",
    "price": "\u20b9350",
    "priceNum": 350,
    "category": "Arabian Barbecue",
    "meat": "nonveg",
    "img": "/dishes/Peri Peri Barbeque (Half).png",
    "desc": "Fire-roasted over hot coals with aromatic spice marinade and herb butter glaze."
  },
  {
    "id": "dish-131",
    "name": "Alfahm Chicken BBQ (Full)",
    "price": "\u20b9650",
    "priceNum": 650,
    "category": "Arabian Barbecue",
    "meat": "chicken",
    "img": "/dishes/Alfahm Chicken BBQ (Full).png",
    "desc": "Fire-roasted over hot coals with aromatic spice marinade and herb butter glaze.",
    "tag": "Arabian Charcoal"
  },
  {
    "id": "dish-132",
    "name": "Alfahm Chicken BBQ (Half)",
    "price": "\u20b9350",
    "priceNum": 350,
    "category": "Arabian Barbecue",
    "meat": "chicken",
    "img": "/dishes/Alfahm Chicken BBQ (Half).png",
    "desc": "Fire-roasted over hot coals with aromatic spice marinade and herb butter glaze."
  },
  {
    "id": "dish-133",
    "name": "BBQ Chicken (Full)",
    "price": "\u20b9650",
    "priceNum": 650,
    "category": "Arabian Barbecue",
    "meat": "chicken",
    "img": "/dishes/BBQ Chicken (Full).png",
    "desc": "Fire-roasted over hot coals with aromatic spice marinade and herb butter glaze."
  },
  {
    "id": "dish-134",
    "name": "BBQ Chicken (Half)",
    "price": "\u20b9350",
    "priceNum": 350,
    "category": "Arabian Barbecue",
    "meat": "chicken",
    "img": "/dishes/BBQ Chicken (Half).png",
    "desc": "Fire-roasted over hot coals with aromatic spice marinade and herb butter glaze."
  },
  {
    "id": "dish-135",
    "name": "Chicken Manchow Soup",
    "price": "\u20b9140",
    "priceNum": 140,
    "category": "Non-Vegetarian Soups",
    "meat": "chicken",
    "img": "/dishes/Chicken Manchow Soup.png",
    "desc": "Piping hot, soul-warming broth slow-simmered with aromatic herbs and fresh chicken."
  },
  {
    "id": "dish-136",
    "name": "Chicken Clear Soup",
    "price": "\u20b9140",
    "priceNum": 140,
    "category": "Non-Vegetarian Soups",
    "meat": "chicken",
    "img": "/dishes/Chicken Clear Soup.png",
    "desc": "Piping hot, soul-warming broth slow-simmered with aromatic herbs and fresh chicken."
  },
  {
    "id": "dish-137",
    "name": "Chicken Noodles Soup",
    "price": "\u20b9140",
    "priceNum": 140,
    "category": "Non-Vegetarian Soups",
    "meat": "chicken",
    "img": "/dishes/Chicken Noodles Soup.png",
    "desc": "Piping hot, soul-warming broth slow-simmered with aromatic herbs and fresh chicken."
  },
  {
    "id": "dish-138",
    "name": "Chicken Hot & Sour Soup",
    "price": "\u20b9140",
    "priceNum": 140,
    "category": "Non-Vegetarian Soups",
    "meat": "chicken",
    "img": "/dishes/Chicken Hot & Sour Soup.png",
    "desc": "Piping hot, soul-warming broth slow-simmered with aromatic herbs and fresh chicken."
  },
  {
    "id": "dish-139",
    "name": "Seafood Mix Soup",
    "price": "\u20b9160",
    "priceNum": 160,
    "category": "Non-Vegetarian Soups",
    "meat": "seafood",
    "img": "/dishes/Seafood Mix Soup.png",
    "desc": "Piping hot, soul-warming broth slow-simmered with aromatic herbs and fresh seafood."
  },
  {
    "id": "dish-140",
    "name": "Tom Yum Soup",
    "price": "\u20b9140",
    "priceNum": 140,
    "category": "Non-Vegetarian Soups",
    "meat": "nonveg",
    "img": "/dishes/Tomyone Soup.png",
    "desc": "Piping hot, soul-warming broth slow-simmered with aromatic herbs and fresh nonveg."
  },
  {
    "id": "dish-141",
    "name": "Chicken Sweet Corn Soup",
    "price": "\u20b9150",
    "priceNum": 150,
    "category": "Non-Vegetarian Soups",
    "meat": "chicken",
    "img": "/dishes/Chicken Sweet Corn Soup.png",
    "desc": "Piping hot, soul-warming broth slow-simmered with aromatic herbs and fresh chicken."
  },
  {
    "id": "dish-142",
    "name": "Cream of Chicken Soup",
    "price": "\u20b9150",
    "priceNum": 150,
    "category": "Non-Vegetarian Soups",
    "meat": "chicken",
    "img": "/dishes/Cream of Chicken Soup.png",
    "desc": "Piping hot, soul-warming broth slow-simmered with aromatic herbs and fresh chicken."
  },
  {
    "id": "dish-143",
    "name": "Chicken Biryani Bucket (4\u20135 Members)",
    "price": "\u20b91300",
    "priceNum": 1300,
    "category": "Bucket Biryani",
    "meat": "chicken",
    "img": "/dishes/Tharam Spl Chicken Biryani.png",
    "desc": "Fragrant seeraga samba dum biryani slow-cooked with tender chicken and aromatic whole spices.",
    "tag": "Party Bucket"
  },
  {
    "id": "dish-144",
    "name": "Mutton Biryani Bucket (4\u20135 Members)",
    "price": "\u20b92100",
    "priceNum": 2100,
    "category": "Bucket Biryani",
    "meat": "mutton",
    "img": "/dishes/Tharam Spl Mutton Biryani.png",
    "desc": "Fragrant seeraga samba dum biryani slow-cooked with tender mutton and aromatic whole spices.",
    "tag": "Party Bucket"
  },
  {
    "id": "dish-145",
    "name": "Butter Garlic Prawn",
    "price": "\u20b9340",
    "priceNum": 340,
    "category": "Seafood Starters \u2013 Prawns",
    "meat": "prawn",
    "img": "/dishes/Butter Garlic Prawn.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-146",
    "name": "Chilli Prawn",
    "price": "\u20b9340",
    "priceNum": 340,
    "category": "Seafood Starters \u2013 Prawns",
    "meat": "prawn",
    "img": "/dishes/Chilli Prawn.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-147",
    "name": "Prawn Manchurian",
    "price": "\u20b9350",
    "priceNum": 350,
    "category": "Seafood Starters \u2013 Prawns",
    "meat": "prawn",
    "img": "/dishes/Prawn Manchurian.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-148",
    "name": "Dragon Prawn",
    "price": "\u20b9350",
    "priceNum": 350,
    "category": "Seafood Starters \u2013 Prawns",
    "meat": "prawn",
    "img": "/dishes/Dragon Prawn.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-149",
    "name": "Golden Fry Prawn",
    "price": "\u20b9370",
    "priceNum": 370,
    "category": "Seafood Starters \u2013 Prawns",
    "meat": "prawn",
    "img": "/dishes/Golden Fry Prawn.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-150",
    "name": "Prawn 65",
    "price": "\u20b9330",
    "priceNum": 330,
    "category": "Seafood Starters \u2013 Prawns",
    "meat": "prawn",
    "img": "/dishes/Prawn 65.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-151",
    "name": "Prawn Pepper Fry",
    "price": "\u20b9340",
    "priceNum": 340,
    "category": "Seafood Starters \u2013 Prawns",
    "meat": "prawn",
    "img": "/dishes/Prawn Pepper Fry.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-152",
    "name": "Ginger Prawn",
    "price": "\u20b9330",
    "priceNum": 330,
    "category": "Seafood Starters \u2013 Prawns",
    "meat": "prawn",
    "img": "/dishes/Ginger Prawn - South Indian Starters.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-153",
    "name": "Schezwan Prawn",
    "price": "\u20b9350",
    "priceNum": 350,
    "category": "Seafood Starters \u2013 Prawns",
    "meat": "prawn",
    "img": "/dishes/Schezwan Prawn.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-154",
    "name": "Hot Pepper Prawn",
    "price": "\u20b9360",
    "priceNum": 360,
    "category": "Seafood Starters \u2013 Prawns",
    "meat": "prawn",
    "img": "/dishes/Hot Pepper Prawn.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-155",
    "name": "Garlic Fish",
    "price": "\u20b9350",
    "priceNum": 350,
    "category": "Seafood Starters \u2013 Fish",
    "meat": "fish",
    "img": "/dishes/Garlic Fish.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-156",
    "name": "Fish Poriyal",
    "price": "\u20b9380",
    "priceNum": 380,
    "category": "Seafood Starters \u2013 Fish",
    "meat": "fish",
    "img": "/dishes/Fish Poriyal.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-157",
    "name": "Ginger Fish",
    "price": "\u20b9370",
    "priceNum": 370,
    "category": "Seafood Starters \u2013 Fish",
    "meat": "fish",
    "img": "/dishes/Ginger Fish.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-158",
    "name": "Chilli Fish",
    "price": "\u20b9380",
    "priceNum": 380,
    "category": "Seafood Starters \u2013 Fish",
    "meat": "fish",
    "img": "/dishes/Chilli Fish.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-159",
    "name": "Fish Fingers",
    "price": "\u20b9380",
    "priceNum": 380,
    "category": "Seafood Starters \u2013 Fish",
    "meat": "fish",
    "img": "/dishes/Fish Fingers - South Indian Starters.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-160",
    "name": "Schezwan Fish",
    "price": "\u20b9370",
    "priceNum": 370,
    "category": "Seafood Starters \u2013 Fish",
    "meat": "fish",
    "img": "/dishes/Schezwan Fish.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-161",
    "name": "Hot Pepper Fish",
    "price": "\u20b9380",
    "priceNum": 380,
    "category": "Seafood Starters \u2013 Fish",
    "meat": "fish",
    "img": "/dishes/Hot Pepper Fish.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-162",
    "name": "Fish 65",
    "price": "\u20b9350",
    "priceNum": 350,
    "category": "Seafood Starters \u2013 Fish",
    "meat": "fish",
    "img": "/dishes/Fish 65.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-163",
    "name": "Fish Manchurian",
    "price": "\u20b9370",
    "priceNum": 370,
    "category": "Seafood Starters \u2013 Fish",
    "meat": "fish",
    "img": "/dishes/Fish Manchurian.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  },
  {
    "id": "dish-164",
    "name": "Dragon Fish",
    "price": "\u20b9390",
    "priceNum": 390,
    "category": "Seafood Starters \u2013 Fish",
    "meat": "fish",
    "img": "/dishes/Dragon Fish.png",
    "desc": "Fresh coastal catch seasoned with house spices and prepared to golden perfection."
  }
];
