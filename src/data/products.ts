
import { Product } from '../types/Product';

export const products: Product[] = [
  // Smartphones
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    description: "Latest flagship with A17 Pro chip, titanium design, and advanced camera system",
    price: 1199,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop",
    featured: true
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    description: "Premium Android flagship with S Pen, 200MP camera, and AI features",
    price: 1299,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    featured: true
  },
  {
    id: 3,
    name: "Google Pixel 8 Pro",
    description: "Pure Android experience with computational photography excellence",
    price: 999,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop"
  },
  {
    id: 4,
    name: "OnePlus 12",
    description: "Flagship killer with Snapdragon 8 Gen 3 and ultra-fast charging",
    price: 799,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=400&fit=crop"
  },
  {
    id: 5,
    name: "Xiaomi 14 Ultra",
    description: "Photography powerhouse with Leica collaboration and premium build",
    price: 899,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop"
  },

  // Laptops
  {
    id: 6,
    name: "MacBook Pro 16-inch M3",
    description: "Professional laptop with M3 Max chip, Liquid Retina XDR display",
    price: 2499,
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    featured: true
  },
  {
    id: 7,
    name: "Dell XPS 13 Plus",
    description: "Ultra-premium ultrabook with InfinityEdge display and haptic touchpad",
    price: 1199,
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop"
  },
  {
    id: 8,
    name: "ASUS ROG Zephyrus G14",
    description: "Gaming laptop with AMD Ryzen 9 and RTX 4070, compact design",
    price: 1599,
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop"
  },
  {
    id: 9,
    name: "Lenovo ThinkPad X1 Carbon",
    description: "Business ultrabook with legendary keyboard and robust build quality",
    price: 1399,
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop"
  },
  {
    id: 10,
    name: "HP Spectre x360",
    description: "2-in-1 convertible with OLED display and premium aluminum build",
    price: 1299,
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&h=400&fit=crop"
  },

  // Headphones
  {
    id: 11,
    name: "AirPods Pro 2",
    description: "Wireless earbuds with adaptive transparency and spatial audio",
    price: 249,
    category: "Headphones",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop",
    featured: true
  },
  {
    id: 12,
    name: "Sony WH-1000XM5",
    description: "Industry-leading noise cancellation with premium sound quality",
    price: 399,
    category: "Headphones",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop"
  },
  {
    id: 13,
    name: "Bose QuietComfort 45",
    description: "Legendary comfort with world-class noise cancellation",
    price: 329,
    category: "Headphones",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop"
  },
  {
    id: 14,
    name: "Sennheiser HD 660S2",
    description: "Audiophile open-back headphones with reference sound quality",
    price: 599,
    category: "Headphones",
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=400&h=400&fit=crop"
  },
  {
    id: 15,
    name: "Beats Studio Pro",
    description: "Wireless over-ear headphones with personalized spatial audio",
    price: 349,
    category: "Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
  },

  // Smartwatches
  {
    id: 16,
    name: "Apple Watch Series 9",
    description: "Advanced health monitoring with Always-On Retina display",
    price: 399,
    category: "Smartwatches",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
    featured: true
  },
  {
    id: 17,
    name: "Samsung Galaxy Watch6",
    description: "Comprehensive health tracking with Wear OS powered by Samsung",
    price: 329,
    category: "Smartwatches",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop"
  },
  {
    id: 18,
    name: "Garmin Forerunner 965",
    description: "Premium GPS running watch with AMOLED display and training metrics",
    price: 599,
    category: "Smartwatches",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop"
  },
  {
    id: 19,
    name: "Fitbit Versa 4",
    description: "Health and fitness focused smartwatch with 6+ day battery life",
    price: 199,
    category: "Smartwatches",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=400&fit=crop"
  },
  {
    id: 20,
    name: "Amazfit GTR 4",
    description: "Rugged smartwatch with 14-day battery and 150+ sports modes",
    price: 199,
    category: "Smartwatches",
    image: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=400&h=400&fit=crop"
  },

  // Gaming
  {
    id: 21,
    name: "PlayStation 5",
    description: "Next-gen gaming console with ray tracing and haptic feedback",
    price: 499,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop",
    featured: true
  },
  {
    id: 22,
    name: "Xbox Series X",
    description: "Most powerful Xbox ever with 4K gaming and quick resume",
    price: 499,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&h=400&fit=crop"
  },
  {
    id: 23,
    name: "Nintendo Switch OLED",
    description: "Hybrid gaming with vibrant 7-inch OLED screen",
    price: 349,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop"
  },
  {
    id: 24,
    name: "Steam Deck",
    description: "Handheld PC gaming with access to your entire Steam library",
    price: 399,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=400&fit=crop"
  },
  {
    id: 25,
    name: "ASUS ROG Ally",
    description: "Windows-based handheld gaming device with Ryzen Z1 Extreme",
    price: 699,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=400&fit=crop"
  },

  // Accessories
  {
    id: 26,
    name: "MagSafe Wireless Charger",
    description: "Fast wireless charging for iPhone with magnetic alignment",
    price: 39,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop"
  },
  {
    id: 27,
    name: "Logitech MX Master 3S",
    description: "Advanced wireless mouse with ultra-precise scrolling",
    price: 99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop"
  },
  {
    id: 28,
    name: "Mechanical Gaming Keyboard",
    description: "RGB backlit mechanical keyboard with Cherry MX switches",
    price: 149,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop"
  },
  {
    id: 29,
    name: "USB-C Hub 7-in-1",
    description: "Multi-port hub with HDMI, USB 3.0, and PD charging",
    price: 49,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=400&fit=crop"
  },
  {
    id: 30,
    name: "Wireless Phone Stand",
    description: "Adjustable stand with 15W fast wireless charging",
    price: 29,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop"
  },

  // Home Tech
  {
    id: 31,
    name: "Amazon Echo Studio",
    description: "High-fidelity smart speaker with 3D audio and Alexa",
    price: 199,
    category: "Home Tech",
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=400&h=400&fit=crop"
  },
  {
    id: 32,
    name: "Nest Learning Thermostat",
    description: "Smart thermostat that learns your schedule and saves energy",
    price: 249,
    category: "Home Tech",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop"
  },
  {
    id: 33,
    name: "Ring Video Doorbell Pro",
    description: "Advanced home security with 1536p HD video and motion detection",
    price: 179,
    category: "Home Tech",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop"
  },
  {
    id: 34,
    name: "Philips Hue Starter Kit",
    description: "Smart lighting system with 16 million colors and voice control",
    price: 99,
    category: "Home Tech",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  {
    id: 35,
    name: "Roomba j7+",
    description: "Self-emptying robot vacuum with object detection and mapping",
    price: 599,
    category: "Home Tech",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop"
  },

  // Additional Smartphones
  {
    id: 36,
    name: "iPhone 14",
    description: "Reliable flagship with A15 Bionic chip and improved cameras",
    price: 799,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop"
  },
  {
    id: 37,
    name: "Samsung Galaxy A54",
    description: "Mid-range champion with flagship features at affordable price",
    price: 449,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop"
  },
  {
    id: 38,
    name: "Nothing Phone (2)",
    description: "Unique transparent design with Glyph interface and clean Android",
    price: 599,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop"
  },

  // Additional Laptops
  {
    id: 39,
    name: "Surface Laptop Studio 2",
    description: "Convertible powerhouse for creators with RTX 4060 graphics",
    price: 1999,
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop"
  },
  {
    id: 40,
    name: "Razer Blade 15",
    description: "Gaming laptop with premium build and RTX 4080 graphics",
    price: 2299,
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop"
  },

  // Additional Headphones
  {
    id: 41,
    name: "Audio-Technica ATH-M50xBT2",
    description: "Professional monitor headphones with wireless connectivity",
    price: 199,
    category: "Headphones",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop"
  },
  {
    id: 42,
    name: "Beyerdynamic DT 770 Pro",
    description: "Studio reference headphones with exceptional comfort",
    price: 179,
    category: "Headphones",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop"
  },

  // Additional Gaming
  {
    id: 43,
    name: "Meta Quest 3",
    description: "Mixed reality VR headset with improved graphics and passthrough",
    price: 499,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop"
  },
  {
    id: 44,
    name: "Gaming Monitor 27\" 4K",
    description: "High refresh rate 4K monitor with HDR and G-Sync compatibility",
    price: 599,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&h=400&fit=crop"
  },

  // Additional Accessories
  {
    id: 45,
    name: "Webcam 4K Pro",
    description: "Professional 4K webcam with auto-focus and noise cancellation",
    price: 199,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop"
  },
  {
    id: 46,
    name: "Power Bank 20000mAh",
    description: "High-capacity portable charger with fast charging support",
    price: 49,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop"
  },
  {
    id: 47,
    name: "Bluetooth Speaker Portable",
    description: "Waterproof speaker with 360-degree sound and 24h battery",
    price: 79,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=400&h=400&fit=crop"
  },
  {
    id: 48,
    name: "Cable Organizer Set",
    description: "Premium cable management solution for desk organization",
    price: 24,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=400&fit=crop"
  },

  // Additional Home Tech
  {
    id: 49,
    name: "Smart Security Camera",
    description: "Indoor/outdoor camera with night vision and AI detection",
    price: 129,
    category: "Home Tech",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop"
  },
  {
    id: 50,
    name: "Smart Plug 4-Pack",
    description: "WiFi-enabled smart plugs with scheduling and voice control",
    price: 39,
    category: "Home Tech",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  }
];

export const categories = [
  { name: "Smartphones", icon: "📱", count: products.filter(p => p.category === "Smartphones").length },
  { name: "Laptops", icon: "💻", count: products.filter(p => p.category === "Laptops").length },
  { name: "Headphones", icon: "🎧", count: products.filter(p => p.category === "Headphones").length },
  { name: "Smartwatches", icon: "⌚", count: products.filter(p => p.category === "Smartwatches").length },
  { name: "Gaming", icon: "🎮", count: products.filter(p => p.category === "Gaming").length },
  { name: "Accessories", icon: "🔌", count: products.filter(p => p.category === "Accessories").length },
  { name: "Home Tech", icon: "🏠", count: products.filter(p => p.category === "Home Tech").length }
];
