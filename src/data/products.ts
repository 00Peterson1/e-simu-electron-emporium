import { Product } from '../types/Product';

export const products: Product[] = [
  // Smartphones
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    description: "Latest flagship with A17 Pro chip, titanium design, and advanced camera system",
    price: 179850,
    originalPrice: 189000,
    discount: 5,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop",
    featured: true,
    onSale: true
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    description: "Premium Android flagship with S Pen, 200MP camera, and AI features",
    price: 194850,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    featured: true
  },
  {
    id: 3,
    name: "Google Pixel 8 Pro",
    description: "Pure Android experience with computational photography excellence",
    price: 134865,
    originalPrice: 149850,
    discount: 10,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=400&fit=crop",
    onSale: true
  },
  {
    id: 4,
    name: "OnePlus 12",
    description: "Flagship killer with Snapdragon 8 Gen 3 and ultra-fast charging",
    price: 119865,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop"
  },
  {
    id: 5,
    name: "iPhone 14 Pro",
    description: "Dynamic Island technology with A16 Bionic chip",
    price: 134865,
    originalPrice: 149850,
    discount: 10,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&h=400&fit=crop",
    onSale: true
  },

  // Laptops
  {
    id: 6,
    name: "MacBook Pro 16-inch M3",
    description: "Professional laptop with M3 Max chip, Liquid Retina XDR display",
    price: 374625,
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    featured: true
  },
  {
    id: 7,
    name: "Dell XPS 13 Plus",
    description: "Ultra-premium ultrabook with InfinityEdge display and haptic touchpad",
    price: 179865,
    originalPrice: 194850,
    discount: 8,
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop",
    onSale: true
  },
  {
    id: 8,
    name: "ASUS ROG Zephyrus G14",
    description: "Gaming laptop with AMD Ryzen 9 and RTX 4070, compact design",
    price: 239865,
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop"
  },
  {
    id: 9,
    name: "Lenovo ThinkPad X1 Carbon",
    description: "Business ultrabook with legendary keyboard and robust build quality",
    price: 209865,
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop"
  },
  {
    id: 10,
    name: "MacBook Air M2",
    description: "Lightweight powerhouse with all-day battery life",
    price: 179865,
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop"
  },

  // Headphones
  {
    id: 11,
    name: "AirPods Pro 2",
    description: "Wireless earbuds with adaptive transparency and spatial audio",
    price: 37365,
    category: "Headphones",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop",
    featured: true
  },
  {
    id: 12,
    name: "Sony WH-1000XM5",
    description: "Industry-leading noise cancellation with premium sound quality",
    price: 53865,
    originalPrice: 59865,
    discount: 10,
    category: "Headphones",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    onSale: true
  },
  {
    id: 13,
    name: "Bose QuietComfort 45",
    description: "Legendary comfort with world-class noise cancellation",
    price: 49365,
    category: "Headphones",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop"
  },
  {
    id: 14,
    name: "Sennheiser HD 660S2",
    description: "Audiophile open-back headphones with reference sound quality",
    price: 89865,
    category: "Headphones",
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=400&h=400&fit=crop"
  },
  {
    id: 15,
    name: "Audio-Technica ATH-M50xBT2",
    description: "Professional monitor headphones with wireless connectivity",
    price: 26865,
    originalPrice: 29865,
    discount: 10,
    category: "Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    onSale: true
  },

  // Smartwatches
  {
    id: 16,
    name: "Apple Watch Series 9",
    description: "Advanced health monitoring with Always-On Retina display",
    price: 59865,
    category: "Smartwatches",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
    featured: true
  },
  {
    id: 17,
    name: "Samsung Galaxy Watch6",
    description: "Comprehensive health tracking with Wear OS powered by Samsung",
    price: 49365,
    originalPrice: 54865,
    discount: 10,
    category: "Smartwatches",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    onSale: true
  },
  {
    id: 18,
    name: "Garmin Forerunner 965",
    description: "Premium GPS running watch with AMOLED display and training metrics",
    price: 89865,
    category: "Smartwatches",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop"
  },
  {
    id: 19,
    name: "Fitbit Versa 4",
    description: "Health and fitness focused smartwatch with 6+ day battery life",
    price: 29865,
    category: "Smartwatches",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=400&fit=crop"
  },
  {
    id: 20,
    name: "Apple Watch Ultra 2",
    description: "Rugged titanium smartwatch for extreme adventures",
    price: 119865,
    category: "Smartwatches",
    image: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=400&h=400&fit=crop"
  },

  // Gaming
  {
    id: 21,
    name: "PlayStation 5",
    description: "Next-gen gaming console with ray tracing and haptic feedback",
    price: 74865,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop",
    featured: true
  },
  {
    id: 22,
    name: "Xbox Series X",
    description: "Most powerful Xbox ever with 4K gaming and quick resume",
    price: 74865,
    originalPrice: 79865,
    discount: 6,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&h=400&fit=crop",
    onSale: true
  },
  {
    id: 23,
    name: "Nintendo Switch OLED",
    description: "Hybrid gaming with vibrant 7-inch OLED screen",
    price: 52365,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop"
  },
  {
    id: 24,
    name: "Steam Deck",
    description: "Handheld PC gaming with access to your entire Steam library",
    price: 59865,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=400&fit=crop"
  },
  {
    id: 25,
    name: "Meta Quest 3",
    description: "Mixed reality VR headset with improved graphics and passthrough",
    price: 74865,
    originalPrice: 84865,
    discount: 12,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&h=400&fit=crop",
    onSale: true
  },

  // Accessories
  {
    id: 26,
    name: "MagSafe Wireless Charger",
    description: "Fast wireless charging for iPhone with magnetic alignment",
    price: 5865,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop"
  },
  {
    id: 27,
    name: "Logitech MX Master 3S",
    description: "Advanced wireless mouse with ultra-precise scrolling",
    price: 14865,
    originalPrice: 16865,
    discount: 12,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    onSale: true
  },
  {
    id: 28,
    name: "Mechanical Gaming Keyboard",
    description: "RGB backlit mechanical keyboard with Cherry MX switches",
    price: 22365,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop"
  },
  {
    id: 29,
    name: "USB-C Hub 7-in-1",
    description: "Multi-port hub with HDMI, USB 3.0, and PD charging",
    price: 7365,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop"
  },
  {
    id: 30,
    name: "Power Bank 20000mAh",
    description: "High-capacity portable charger with fast charging support",
    price: 7365,
    originalPrice: 8865,
    discount: 17,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1609592388283-7bb23a8634b7?w=400&h=400&fit=crop",
    onSale: true
  },

  // Home Tech
  {
    id: 31,
    name: "Amazon Echo Studio",
    description: "High-fidelity smart speaker with 3D audio and Alexa",
    price: 29865,
    category: "Home Tech",
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=400&h=400&fit=crop"
  },
  {
    id: 32,
    name: "Nest Learning Thermostat",
    description: "Smart thermostat that learns your schedule and saves energy",
    price: 37365,
    category: "Home Tech",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop"
  },
  {
    id: 33,
    name: "Ring Video Doorbell Pro",
    description: "Advanced home security with 1536p HD video and motion detection",
    price: 26865,
    originalPrice: 29865,
    discount: 10,
    category: "Home Tech",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
    onSale: true
  },
  {
    id: 34,
    name: "Philips Hue Starter Kit",
    description: "Smart lighting system with 16 million colors and voice control",
    price: 14865,
    category: "Home Tech",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  {
    id: 35,
    name: "Roomba j7+",
    description: "Self-emptying robot vacuum with object detection and mapping",
    price: 89865,
    category: "Home Tech",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=400&fit=crop"
  },

  // Additional products to reach 50
  {
    id: 36,
    name: "iPad Pro 12.9-inch M2",
    description: "Professional tablet with M2 chip and Liquid Retina XDR display",
    price: 164865,
    category: "Tablets",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop"
  },
  {
    id: 37,
    name: "Surface Pro 9",
    description: "2-in-1 laptop with Intel Core i7 and all-day battery",
    price: 149865,
    originalPrice: 164865,
    discount: 9,
    category: "Tablets",
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop",
    onSale: true
  },
  {
    id: 38,
    name: "Samsung Galaxy Tab S9 Ultra",
    description: "Ultra-large Android tablet with S Pen included",
    price: 179865,
    category: "Tablets",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=400&fit=crop"
  },
  {
    id: 39,
    name: "Canon EOS R6 Mark II",
    description: "Full-frame mirrorless camera with dual-pixel autofocus",
    price: 374865,
    category: "Cameras",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop"
  },
  {
    id: 40,
    name: "Sony A7 IV",
    description: "Professional hybrid camera for photo and video creation",
    price: 329865,
    originalPrice: 359865,
    discount: 8,
    category: "Cameras",
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop",
    onSale: true
  },
  {
    id: 41,
    name: "GoPro Hero 12 Black",
    description: "Action camera with 5.3K video and HyperSmooth stabilization",
    price: 59865,
    category: "Cameras",
    image: "https://images.unsplash.com/photo-1551817958-11e0f7bbea9c?w=400&h=400&fit=crop"
  },
  {
    id: 42,
    name: "DJI Air 3",
    description: "Dual-camera drone with 46-minute flight time",
    price: 232365,
    category: "Drones",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=400&fit=crop"
  },
  {
    id: 43,
    name: "DJI Mini 4 Pro",
    description: "Compact drone with 4K HDR video and obstacle sensing",
    price: 113865,
    originalPrice: 127365,
    discount: 11,
    category: "Drones",
    image: "https://images.unsplash.com/photo-1508614999368-9260051292e5?w=400&h=400&fit=crop",
    onSale: true
  },
  {
    id: 44,
    name: "4K Gaming Monitor 27\"",
    description: "High refresh rate 4K monitor with HDR and G-Sync compatibility",
    price: 89865,
    category: "Monitors",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop"
  },
  {
    id: 45,
    name: "Ultrawide Monitor 34\"",
    description: "Curved ultrawide display perfect for productivity and gaming",
    price: 67365,
    originalPrice: 74865,
    discount: 10,
    category: "Monitors",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=400&fit=crop",
    onSale: true
  },
  {
    id: 46,
    name: "Wireless Earbuds Pro",
    description: "Premium earbuds with active noise cancellation",
    price: 26865,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop"
  },
  {
    id: 47,
    name: "Bluetooth Speaker Portable",
    description: "Waterproof speaker with 360-degree sound and 24h battery",
    price: 11865,
    originalPrice: 13865,
    discount: 14,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    onSale: true
  },
  {
    id: 48,
    name: "Smart Home Hub",
    description: "Central control hub for all your smart home devices",
    price: 19365,
    category: "Smart Home",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop"
  },
  {
    id: 49,
    name: "Security Camera 4K",
    description: "Indoor/outdoor camera with night vision and AI detection",
    price: 44865,
    category: "Security",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=400&fit=crop"
  },
  {
    id: 50,
    name: "Electric Scooter Pro",
    description: "High-performance electric scooter with 40-mile range",
    price: 134865,
    originalPrice: 149865,
    discount: 10,
    category: "Transportation",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
    onSale: true
  },
  {
    id: 51,
    name: "Basic Entry Earphones",
    description: "Affordable wired earphones for everyday casual listening. Great for kids and basic use.",
    price: 1,
    category: "Earphones",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop"
  },
  {
    id: 52,
    name: "Comfort Fit Earphones",
    description: "Comfortable in-ear wired earphones with decent sound, excellent for calls and meetings.",
    price: 5000,
    category: "Earphones",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop"
  },
  {
    id: 53,
    name: "Premium Studio Earphones",
    description: "Audiophile grade earphones with high-fidelity sound; suitable for studio and audiophiles.",
    price: 50000,
    category: "Earphones",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop"
  },
  {
    id: 54,
    name: "Luxury Diamond Earphones",
    description: "Hand-crafted designer earphones with luxury materials and the latest audio technology.",
    price: 150000,
    category: "Earphones",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop"
  },
  {
    id: 55,
    name: "Ultimate Millionaire Earphones",
    description: "For the elite: bespoke, diamond-encrusted earphones. The peak of luxury sound.",
    price: 400000,
    category: "Earphones",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop"
  }
];

export const categories = [
  { name: "Smartphones", icon: "📱", count: products.filter(p => p.category === "Smartphones").length },
  { name: "Laptops", icon: "💻", count: products.filter(p => p.category === "Laptops").length },
  { name: "Headphones", icon: "🎧", count: products.filter(p => p.category === "Headphones").length },
  { name: "Earphones", icon: "🎧", count: products.filter(p => p.category === "Earphones").length },
  { name: "Smartwatches", icon: "⌚", count: products.filter(p => p.category === "Smartwatches").length },
  { name: "Gaming", icon: "🎮", count: products.filter(p => p.category === "Gaming").length },
  { name: "Accessories", icon: "🔌", count: products.filter(p => p.category === "Accessories").length },
  { name: "Home Tech", icon: "🏠", count: products.filter(p => p.category === "Home Tech").length }
];
