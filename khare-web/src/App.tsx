import React, { useState, useMemo } from 'react';

// --- INLINE SVG ICONS ---
const ShoppingBag = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const Sparkles = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const ShieldCheck = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const Leaf = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21c-4.97 0-9-4.03-9-9 0-5.25 4.5-9 9-9 4.97 0 9 4.03 9 9 0 4.97-4.03 9-9 9zm0-18C8.5 7.5 7.5 12 7.5 12s4.5-1 9-4.5" />
  </svg>
);

const Truck = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8h4l3 3v5h-2m-4 0h4" />
  </svg>
);

const Phone = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const Mail = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const Plus = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
  </svg>
);

const Minus = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
  </svg>
);

const Trash2 = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const X = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Check = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

const ChevronRight = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
  </svg>
);

const Flame = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
  </svg>
);

const HeartHandshake = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const Award = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm0 13l-3-3m3 3l3-3m-6-8h6" />
  </svg>
);

const MessageCircle = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const MapPin = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

// --- REUSABLE 3D IMAGE SLIDER ---
function ImageSlider({ images, alt = 'Product Image' }: { images?: string[]; alt?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const safeList: string[] = images && images.length > 0 ? images : ['/podi.png'];

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? safeList.length - 1 : prev - 1));
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === safeList.length - 1 ? 0 : prev + 1));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({ x: -(y / 10), y: x / 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1100px' }}
      className="relative w-full h-64 bg-white/40 backdrop-blur-md rounded-2xl flex items-center justify-center p-4 border border-white/60 shadow-[0_8px_32px_rgba(120,35,18,0.06),inset_0_1px_1px_rgba(255,255,255,0.8)] overflow-hidden group select-none transition-all duration-300"
    >
      <div
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.12s cubic-bezier(0.2, 0, 0, 1)'
        }}
        className="w-full h-full flex items-center justify-center pointer-events-none"
      >
        <img
          src={safeList[currentIndex]}
          alt={`${alt} view ${currentIndex + 1}`}
          style={{
            transform: 'translateZ(55px)',
            filter: `drop-shadow(${tilt.y * -1.2}px ${Math.abs(tilt.x) * 1.5 + 18}px 24px rgba(60,25,10,0.24))`
          }}
          className="h-full max-h-56 object-contain transition-all duration-300"
          onError={(e) => {
            (e.target as HTMLElement).style.opacity = '0.25';
          }}
        />
      </div>

      {safeList.length > 1 && (
        <>
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/75 backdrop-blur-md text-stone-800 shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.9)] hover:bg-white active:scale-90 transition-all flex items-center justify-center font-bold text-sm opacity-90 md:opacity-0 group-hover:opacity-100 z-10 border border-white/80 cursor-pointer"
          >
            &#10094;
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/75 backdrop-blur-md text-stone-800 shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.9)] hover:bg-white active:scale-90 transition-all flex items-center justify-center font-bold text-sm opacity-90 md:opacity-0 group-hover:opacity-100 z-10 border border-white/80 cursor-pointer"
          >
            &#10095;
          </button>

          <div className="absolute bottom-2.5 flex items-center gap-1.5 bg-black/25 backdrop-blur-md px-2.5 py-1 rounded-full z-10 shadow-sm border border-white/20">
            {safeList.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-5 bg-[#A63A24]' : 'w-2 bg-white/80 hover:bg-white'
                }`}
                aria-label={`Jump to image ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// --- DATA TYPES ---
interface NutritionItem {
  label: string;
  value: string;
}

interface Product {
  id: string;
  name: string;
  hindiName: string;
  urduName: string;
  weight: string;
  price: number;
  mrp: number;
  images: string[];
  tagline: string;
  accentColor: string;
  badge: string;
  description: string;
  proteinNote: string;
  ingredients: {
    baseLentils?: string[];
    spices?: string[];
    seedsAndAromatics?: string[];
    spicesAndSeeds?: string[];
    roastedLentils?: string[];
  };
  nutritionPer100g: NutritionItem[];
  storage: string;
  shelfLife: string;
}

interface ComboDeal {
  id: string;
  name: string;
  weight: string;
  price: number;
  mrp: number;
  savings: number;
  description: string;
}

interface CartItem {
  id: string;
  name: string;
  weight: string;
  price: number;
  mrp: number;
  quantity: number;
}

interface DeliveryAddress {
  fullName: string;
  phone: string;
  pincode: string;
  houseNo: string;
  street: string;
  landmark: string;
  city: string;
  state: string;
  addressType: 'Home' | 'Work';
  paymentMethod: 'COD' | 'UPI';
}

const PRODUCTS: Product[] = [
  {
    id: 'podi-masala',
    name: 'Khare Podi Masala',
    hindiName: 'पोडी मसाला',
    urduName: 'پوڈی',
    weight: '150g',
    price: 220,
    mrp: 240,
    images: ['/podi.png', '/podi2.png', '/podi3.png'],
    tagline: 'The only multipurpose Podi Masale you will ever need.',
    accentColor: '#D97706',
    badge: 'High Protein Blend',
    description:
      'If your meals are looking sad, bland, and entirely forgettable, your plate is practically begging for a little Podi magic. Crafted with roasted lentils and aromatic spices—this is the ultimate flavor upgrade everyday food desperately needs.',
    proteinNote: 'Packed with natural protein from 5 roasted lentils. Thank the lentils later!',
    ingredients: {
      baseLentils: ['Roasted Urad Dal', 'Chana Dal', 'Moong Dal', 'Toor Dal', 'Horse Gram (Kulthi)'],
      spices: ['Roasted Jeera Powder', 'Dry Red Chilli', 'Hing (Asafoetida)'],
      seedsAndAromatics: ['Roasted Sesame Seeds (Til)', 'Sun-Dried Curry Leaves']
    },
    nutritionPer100g: [
      { label: 'Energy / Calories', value: '360 - 400 kcal' },
      { label: 'Protein', value: '18 - 22 g' },
      { label: 'Carbohydrates', value: '52 - 58 g' },
      { label: 'Dietary Fiber', value: '12 - 16 g' },
      { label: 'Sugars', value: 'Under 2 g' },
      { label: 'Total Fats', value: '8 g' },
      { label: 'Saturated Fat', value: 'Under 1 g' }
    ],
    storage: 'Store in a cool, dry place. Keep away from moisture & direct sunlight. Use a clean, dry spoon.',
    shelfLife: '12 Months from packing (Batch No. 1)'
  },
  {
    id: 'sambar-powder',
    name: 'Khare Sambar Powder',
    hindiName: 'सांभर पाउडर',
    urduName: 'سامبر پاؤڈر',
    weight: '150g',
    price: 220,
    mrp: 240,
    images: ['/sambar.png', '/sambar2.png', '/sambar3.png'],
    tagline: 'Zero drama of ten different spice jars.',
    accentColor: '#B91C1C',
    badge: 'Authentic South-Style',
    description:
      'The only Sambar Masale you will ever need. Because your kitchen does not need the chaos of ten different spice jars. We kept it simple, hassle-free, and 100% preservative-free—keeping it as fresh as your attitude from the first scoop to the last.',
    proteinNote: 'Roasted slow on gentle heat to lock in natural essential oils and comforting aroma.',
    ingredients: {
      spicesAndSeeds: [
        'Mustard Seeds Powder',
        'Coriander Seeds Powder',
        'Cumin Seeds Powder',
        'Dry Red Chilli Powder',
        'Dry Kashmiri Chilli Powder',
        'Methi Seeds Powder',
        'Black Pepper Powder',
        'Turmeric Powder',
        'Asafoetida (Hing)'
      ],
      roastedLentils: ['Roasted Chana Dal Powder', 'Roasted Urad Dal Powder', 'Roasted Toor Dal Powder']
    },
    nutritionPer100g: [
      { label: 'Energy / Calories', value: '320 - 380 kcal' },
      { label: 'Protein', value: '12 - 20 g' },
      { label: 'Carbohydrates', value: '30 - 60 g' },
      { label: 'Dietary Fiber', value: '15 - 32 g' }
    ],
    storage: 'Store in a cool, dry place. Keep away from moisture & sunlight. Use a clean, dry spoon.',
    shelfLife: '12 Months from packing (Batch No. 1)'
  }
];

const COMBO_DEAL: ComboDeal = {
  id: 'launch-combo-duo',
  name: 'Launch Duo Pack (Podi Masala + Sambar Powder)',
  weight: '300g (150g × 2)',
  price: 400,
  mrp: 440,
  savings: 40,
  description: 'Both signature blends bundled together at an introductory launch price. Complete spice cabinet upgrade!'
};

export default function App(): React.JSX.Element {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProductModal, setSelectedProductModal] = useState<Product | null>(null);
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'address' | 'success'>('cart');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [logoFailed, setLogoFailed] = useState(false);

  // Amazon / Flipkart Delivery Address Details
  const [address, setAddress] = useState<DeliveryAddress>({
    fullName: '',
    phone: '',
    pincode: '',
    houseNo: '',
    street: '',
    landmark: '',
    city: '',
    state: '',
    addressType: 'Home',
    paymentMethod: 'COD'
  });

  // Powder Burst & Floral Particle State
  const [powderBursts, setPowderBursts] = useState<
    Array<{ id: number; x: number; y: number; particles: Array<{ dx: number; dy: number; color: string; size: number }> }>
  >([]);
  const [cartFlowers, setCartFlowers] = useState<
    Array<{ id: number; symbol: string; x: number; y: number; rot: number }>
  >([]);

  const triggerPowderBurst = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const originX = rect.left + rect.width / 2;
    const originY = rect.top + rect.height / 2;
    const colors = ['#F59E0B', '#DC2626', '#EA580C', '#78350F', '#FEF08A', '#B91C1C'];

    const particles = Array.from({ length: 18 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 30 + Math.random() * 55;
      return {
        dx: Math.cos(angle) * distance,
        dy: Math.sin(angle) * distance - 25,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 3 + Math.random() * 4.5
      };
    });

    const burstId = Date.now() + Math.random();
    setPowderBursts((prev) => [...prev, { id: burstId, x: originX, y: originY, particles }]);

    setTimeout(() => {
      setPowderBursts((prev) => prev.filter((b) => b.id !== burstId));
    }, 900);
  };

  const triggerCartFlowers = () => {
    const flowerSymbols = ['🌸', '🌼', '🌺', '🏵️', '🌸'];
    const flowers = flowerSymbols.map((symbol, idx) => ({
      id: Date.now() + idx,
      symbol,
      x: (idx - 2) * 20,
      y: -30 - Math.random() * 25,
      rot: -20 + Math.random() * 40
    }));

    setCartFlowers(flowers);
    setTimeout(() => {
      setCartFlowers([]);
    }, 1200);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const addToCart = (item: Product | ComboDeal, e?: React.MouseEvent) => {
    if (e) triggerPowderBurst(e);
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [
        ...prev,
        {
          id: item.id,
          name: item.name,
          weight: item.weight,
          price: item.price,
          mrp: item.mrp,
          quantity: 1
        }
      ];
    });
    showToast(`Added "${item.name}" to cart!`);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const cartTotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cart]);

  const cartSavings = useMemo(() => {
    return cart.reduce((acc, item) => acc + (item.mrp - item.price) * item.quantity, 0);
  }, [cart]);

  const totalCartCount = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }, [cart]);

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.fullName || !address.phone || !address.pincode || !address.houseNo || !address.city || !address.state) {
      alert("Please fill in all mandatory address fields marked with *");
      return;
    }
    setCheckoutStep('success');
  };

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return;
    const itemList = cart
      .map((item) => `• ${item.name} (${item.weight}) x ${item.quantity} = ₹${item.price * item.quantity}`)
      .join('%0A');

    const addressPayload = address.fullName
      ? `%0A%0A📦 *DELIVERY ADDRESS (All-India Express):*%0A👤 Name: ${encodeURIComponent(address.fullName)}%0A📞 Phone: ${encodeURIComponent(address.phone)}%0A🏠 Address: ${encodeURIComponent(`${address.houseNo}, ${address.street}${address.landmark ? ', Near ' + address.landmark : ''}`)}%0A📍 City & State: ${encodeURIComponent(`${address.city}, ${address.state} - ${address.pincode}`)}%0A🏷️ Type: ${address.addressType}%0A💳 Payment: ${address.paymentMethod}`
      : '';

    const message = `Namaste Khare Masale team! 🙏%0AI would like to place an order:%0A%0A${itemList}%0A%0A*Total Amount:* ₹${cartTotal} (Saved ₹${cartSavings})${addressPayload}%0A%0APlease confirm my order & dispatch details!`;

    window.open(`https://wa.me/918796617874?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#242120] font-sans antialiased selection:bg-[#DCA142]/30 selection:text-[#7C2D12]">
      {/* Top Banner Notice */}
      <div className="bg-[#782312] text-amber-50 text-xs sm:text-sm font-medium py-2 px-3 sm:px-4 text-center tracking-wide flex items-center justify-center gap-1.5 sm:gap-2">
        <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse shrink-0" />
        <span className="truncate">Grand Launch Special: Duo for ₹400! (Save ₹40)</span>
        <span className="hidden md:inline">• Fast 2-4 Day Delivery All Over India</span>
      </div>

      {/* Mobile-Optimized Glass Navbar */}
      <header className="sticky top-0 z-40 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-amber-900/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2">
          
          {/* Logo & Brand Title */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 shrink-0 rounded-xl sm:rounded-2xl bg-[#1C1917] flex items-center justify-center border border-[#E5A83B]/60 shadow-[0_4px_12px_rgba(0,0,0,0.15)] overflow-hidden">
              {!logoFailed ? (
                <img
                  src="/logo.png"
                  alt="Khare Masale Logo"
                  className="w-full h-full object-contain p-1"
                  onError={() => setLogoFailed(true)}
                />
              ) : (
                <span className="font-serif italic font-black text-sm sm:text-base text-[#F59E0B]">
                  KM
                </span>
              )}
            </div>

            <div className="min-w-0 leading-tight">
              <div className="flex items-center gap-1.5 flex-nowrap">
                <span className="font-serif text-lg sm:text-2xl font-black tracking-tight text-[#782312] truncate">
                  Khare Masale
                </span>
                <span className="hidden sm:inline-block text-[9px] uppercase font-bold tracking-wider bg-amber-100/90 text-amber-900 px-1.5 py-0.5 rounded border border-amber-300/80 shrink-0">
                  Veg
                </span>
              </div>
              <p className="text-[10px] sm:text-xs font-serif italic text-amber-800 tracking-wider truncate">
                &ldquo;Ghar mein aane do&rdquo;
              </p>
            </div>
          </div>

          {/* Navigation & Cart Button */}
          <div className="flex items-center shrink-0">
            <nav className="hidden md:flex items-center gap-8 lg:gap-11 text-sm font-semibold text-stone-700 mr-8">
              <a href="#products" className="hover:text-[#782312] transition-colors">Product Directory</a>
              <a href="#combo" className="text-[#A63A24] hover:text-[#782312] transition-colors flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                Launch Combo
              </a>
              <a href="#how-to-use" className="hover:text-[#782312] transition-colors">How to Use</a>
              <a href="#why-us" className="hover:text-[#782312] transition-colors">Why Choose Us</a>
              <a href="#contact" className="hover:text-[#782312] transition-colors">Contact</a>
            </nav>

            <div className="relative">
              {cartFlowers.map((flower) => (
                <span
                  key={flower.id}
                  style={{
                    left: `calc(50% + ${flower.x}px)`,
                    top: `${flower.y}px`,
                    transform: `rotate(${flower.rot}deg)`
                  }}
                  className="absolute pointer-events-none text-base sm:text-xl animate-[flowerBloom_1.1s_cubic-bezier(0.16,1,0.3,1)_forwards] filter drop-shadow-[0_0_8px_rgba(251,191,36,0.8)] z-50 select-none"
                >
                  {flower.symbol}
                </span>
              ))}

              <button
                onClick={() => {
                  triggerCartFlowers();
                  setCheckoutStep('cart');
                  setIsCartOpen(true);
                }}
                className="relative flex items-center gap-1.5 sm:gap-2.5 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl bg-[#A63A24] text-white hover:bg-[#8F2E19] border border-white/30 shadow-[0_4px_14px_rgba(166,58,36,0.35)] active:scale-95 transition-all text-xs sm:text-sm font-bold cursor-pointer"
                aria-label="Open Shopping Cart"
              >
                <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-200" />
                <span className="text-xs sm:text-sm">Cart</span>
                <span className="bg-amber-400 text-stone-900 text-[10px] sm:text-xs font-black w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shadow-xs">
                  {totalCartCount}
                </span>
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* DIRECT 3D PRODUCT DIRECTORY ENTRY */}
      <section id="products" className="pt-6 sm:pt-10 pb-16 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 sm:mb-10 pb-5 border-b border-amber-900/10">
          <div>
            <div className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#A63A24] bg-red-50/80 px-2.5 py-1 rounded-full border border-red-200/80 mb-2">
              Product Directory • Small Batch Milled
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-black text-[#36130B] leading-tight">
              Handcrafted Spice Essentials
            </h1>
            <p className="text-stone-600 text-xs sm:text-base mt-1">
              Stone-ground roasted lentils &amp; slow-cooked spices.
            </p>
          </div>
          <div className="flex items-center gap-3 text-[11px] sm:text-xs font-mono text-stone-500 pt-1">
            <span className="flex items-center gap-1"><Leaf className="w-3.5 h-3.5 text-emerald-600" /> 100% Pure Veg</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-amber-700" /> Zero Chemicals</span>
          </div>
        </div>

        {/* 3D PRODUCT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-white/80 backdrop-blur-md rounded-3xl border border-white/80 shadow-[0_12px_36px_rgba(60,25,10,0.08),inset_0_1px_1px_rgba(255,255,255,0.9)] hover:shadow-[0_20px_48px_rgba(60,25,10,0.14)] transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col">
                <ImageSlider images={product.images} alt={product.name} />

                <div className="flex items-center justify-between gap-2 pt-1">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-600 inline-block border border-emerald-800" title="100% Vegetarian" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50/80 backdrop-blur-xs px-2 py-0.5 rounded border border-emerald-200/50">
                      100% Veg
                    </span>
                    <span className="text-xs font-semibold text-amber-900 bg-amber-50/80 backdrop-blur-xs px-2 py-0.5 rounded border border-amber-200/80">
                      {product.weight}
                    </span>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100/80 backdrop-blur-xs text-amber-900 border border-amber-300/70 shrink-0">
                    {product.badge}
                  </span>
                </div>

                <div className="min-h-[3.8rem] sm:min-h-[4.2rem] flex items-center">
                  <h2 className="font-serif text-2xl sm:text-3xl font-black text-stone-900 leading-tight">
                    {product.name}
                  </h2>
                </div>

                <div className="flex items-center gap-2 text-stone-500 font-serif italic text-sm h-6">
                  <span>{product.hindiName}</span>
                  <span>•</span>
                  <span dir="rtl">{product.urduName}</span>
                </div>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed min-h-[5.5rem] sm:min-h-[6.2rem]">
                  {product.description}
                </p>

                <div className="p-3.5 rounded-2xl bg-white/60 backdrop-blur-sm border border-amber-200/70 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] text-xs sm:text-sm text-stone-700 flex items-start gap-2.5 min-h-[4.2rem]">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{product.proteinNote}</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 text-xs mt-auto">
                  {product.nutritionPer100g.slice(0, 3).map((item, i) => (
                    <div key={i} className="bg-stone-50/80 backdrop-blur-xs p-2.5 rounded-xl border border-stone-200/50">
                      <div className="text-stone-400 font-medium text-[10px] uppercase">{item.label}</div>
                      <div className="font-bold text-stone-800 mt-0.5">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-6 py-5 sm:px-8 sm:py-6 bg-white/50 backdrop-blur-md border-t border-amber-900/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-stone-500 uppercase tracking-wider font-semibold">Net Price (150g)</div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-3xl font-black text-[#782312]">₹{product.price}</span>
                    <span className="text-sm line-through text-stone-400 font-medium">₹{product.mrp}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedProductModal(product)}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 text-stone-700 text-xs font-bold shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.9)] hover:bg-white active:scale-95 transition-all duration-150 cursor-pointer"
                  >
                    View Ingredients
                  </button>

                  <button
                    onClick={(e) => addToCart(product, e)}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-2xl bg-[#A63A24]/90 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-bold shadow-[0_8px_20px_rgba(166,58,36,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:bg-[#8F2E19] active:scale-95 transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMBO DEAL BANNER SECTION */}
      <section id="combo" className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#782312] via-[#8F2E19] to-[#A63A24] text-white shadow-[0_20px_50px_rgba(120,35,18,0.3)] p-8 sm:p-12 lg:p-14 border border-white/20">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-stone-900 font-black text-xs uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-stone-900" />
                Special Launch Pack Deal
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-amber-50">
                Podi Masala + Sambar Powder Duo
              </h3>
              <p className="text-amber-100/90 text-sm sm:text-base max-w-2xl leading-relaxed">
                Transform your breakfast, lunch, and dinner. Get both of our handcrafted 150g pouches 
                packaged fresh and delivered together. Save ₹40 right on launch week.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-xs">
                  <span className="text-amber-300 font-bold">150g</span> Podi Masala
                </div>
                <span className="text-amber-300 font-bold">+</span>
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-xs">
                  <span className="text-amber-300 font-bold">150g</span> Sambar Powder
                </div>
                <span className="text-amber-300 font-bold">=</span>
                <div className="bg-emerald-950/60 backdrop-blur-md px-4 py-2 rounded-xl border border-emerald-400/30 text-xs font-bold text-emerald-300">
                  Instant ₹40 Savings
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-6 border border-white/30 text-center w-full max-w-xs space-y-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                <div>
                  <div className="text-xs uppercase tracking-wider text-amber-200 font-semibold">Special Duo Price</div>
                  <div className="flex items-baseline justify-center gap-2 mt-1">
                    <span className="font-serif text-4xl sm:text-5xl font-black text-amber-300 drop-shadow-sm">₹400</span>
                    <span className="text-base line-through text-amber-200/60">₹440</span>
                  </div>
                </div>

                <button
                  onClick={(e) => addToCart(COMBO_DEAL, e)}
                  className="w-full py-3.5 px-4 rounded-2xl bg-amber-400/95 backdrop-blur-md text-stone-900 font-black text-sm shadow-[0_8px_24px_rgba(245,158,11,0.4),inset_0_1px_1px_rgba(255,255,255,0.7)] border border-white/40 hover:bg-amber-300 active:scale-95 transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Claim Combo Deal</span>
                </button>

                <p className="text-[11px] text-amber-100/70">
                  ⚡ Limited first batch inventory available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO USE SECTION (RESTORED IN FULL) */}
      <section id="how-to-use" className="py-20 bg-[#F7F2E7]/70 border-y border-amber-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100/80 backdrop-blur-xs px-3 py-1 rounded-full border border-amber-300">
              Kitchen Tips &amp; Magic
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#36130B]">
              How to Enjoy Your Podi &amp; Sambar
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              From comforting South-Indian breakfasts to quick veggie roasts, here are the easiest ways to unlock maximum flavor:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'The Classic Idli Dip',
                icon: '🥞',
                desc: 'Mix 2 tablespoons of Khare Podi with warm melted ghee or cold-pressed sesame oil. Dip hot idlis straight in!'
              },
              {
                step: '02',
                title: 'Crispy Dosa Topping',
                icon: '🍳',
                desc: 'Sprinkle podi generously over the dosa right as it sizzles on the tawa, drizzle a dash of oil, and fold.'
              },
              {
                step: '03',
                title: 'Comforting Podi Rice',
                icon: '🍚',
                desc: 'Stir a spoonful of Podi directly into hot, freshly cooked steamed rice with melted ghee. Pure soul food.'
              },
              {
                step: '04',
                title: 'Crunchy Veggie Toss',
                icon: '🥔',
                desc: 'Toss diced baby potatoes, cauliflower, or bhindi with oil and podi before air-frying or pan-roasting.'
              }
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white/80 shadow-[0_8px_24px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.9)] hover:shadow-md transition-shadow relative space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{card.icon}</span>
                  <span className="font-mono text-xs font-black text-amber-800/40 bg-amber-50/80 px-2 py-0.5 rounded">
                    {card.step}
                  </span>
                </div>
                <h4 className="font-serif text-lg font-bold text-stone-900 pt-1">
                  {card.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Sambar Special Recipe Callout */}
          <div className="mt-8 bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-white/80 shadow-[0_8px_24px_rgba(0,0,0,0.04)] flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-center md:text-left">
              <span className="text-3xl">🍲</span>
              <div>
                <h5 className="font-serif font-bold text-stone-900 text-base">Making aromatic Sambar with Khare Powder?</h5>
                <p className="text-xs sm:text-sm text-stone-600">
                  Boil Toor dal with tamarind pulp &amp; your favorite veggies (drumsticks, shallots, pumpkin). Add 2 spoons of Khare Sambar Powder in the last 5 minutes for authentic aroma without burning the spices!
                </p>
              </div>
            </div>
            
            <button
              onClick={(e) => addToCart(PRODUCTS[1], e)}
              className="px-5 py-2.5 rounded-2xl bg-amber-100/80 backdrop-blur-md hover:bg-amber-200 border border-amber-300/80 text-amber-900 text-xs font-black shrink-0 active:scale-95 transition-all duration-150 cursor-pointer shadow-xs"
            >
              Get Sambar Powder (₹220)
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION (RESTORED ALL 6 FEATURES) */}
      <section id="why-us" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#A63A24] bg-red-50/80 backdrop-blur-xs px-3 py-1 rounded-full border border-red-200">
            Purity You Can Taste
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#36130B]">
            Why Khare Masale Belongs in Your Pantry
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Crafted for modern homes that crave traditional authenticity without the hassle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Product of India',
              desc: 'Sourced directly from native spice fields with uncompromised quality and heritage recipes.',
              icon: Award
            },
            {
              title: 'Pocket-Friendly Value',
              desc: 'Premium stone-ground ingredients that fit comfortably within your weekly kitchen budget.',
              icon: Sparkles
            },
            {
              title: 'Hassle-Free & Mess-Free',
              desc: 'Designed for ultimate convenience—no multiple spice measuring, no mess, no stress.',
              icon: ShieldCheck
            },
            {
              title: 'Space-Efficient Pouches',
              desc: 'Smart 150g stand-up packaging that saves counter and pantry space while staying airtight.',
              icon: Leaf
            },
            {
              title: 'Fresh & Preservative-Free',
              desc: 'Pure, fresh taste without any artificial additives, fillers, colors, or MSG.',
              icon: Flame
            },
            {
              title: '100% Sustainable Packaging',
              desc: 'Eco-conscious packaging crafted to be gentle on the earth while locking in spice freshness.',
              icon: HeartHandshake
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/75 backdrop-blur-md border border-white/80 shadow-[0_8px_20px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.9)] hover:border-amber-700/30 transition-all flex flex-col justify-start space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-50/90 border border-amber-200/80 flex items-center justify-center text-[#A63A24]">
                <item.icon className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-stone-900">
                {item.title}
              </h4>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Express Shipping Card */}
        <div className="mt-10 rounded-3xl bg-white/80 backdrop-blur-md border border-white/90 shadow-[0_12px_32px_rgba(0,0,0,0.04)] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#A63A24] text-white flex items-center justify-center shrink-0 shadow-md">
              <Truck className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="font-serif text-xl font-bold text-stone-900">Express Delivery Across India</h4>
              <p className="text-xs sm:text-sm text-stone-600 max-w-xl">
                Orders delivered directly to your doorstep in <span className="font-bold text-stone-900">2 to 4 business days</span> with live courier tracking.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/80 px-3 py-1.5 rounded-full border border-emerald-300">
              ✓ Free Delivery Nationwide
            </span>
          </div>
        </div>
      </section>

      {/* Cart Drawer / Modern Flipkart & Amazon Style Address Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div 
            onClick={() => setIsCartOpen(false)} 
            className="absolute inset-0 bg-stone-900/50 backdrop-blur-xs transition-opacity" 
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
            <div className="w-screen max-w-lg bg-white/95 backdrop-blur-xl shadow-2xl flex flex-col justify-between border-l border-white/60">
              
              {/* Header */}
              <div className="p-4 sm:p-6 border-b border-stone-200/80 flex items-center justify-between bg-white/70 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  {checkoutStep === 'address' ? (
                    <button
                      onClick={() => setCheckoutStep('cart')}
                      className="p-1 rounded-lg hover:bg-stone-200 text-stone-600 mr-1 text-sm font-bold flex items-center cursor-pointer"
                    >
                      ←
                    </button>
                  ) : (
                    <ShoppingBag className="w-5 h-5 text-[#A63A24]" />
                  )}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
                    {checkoutStep === 'cart' ? 'Your Shopping Bag' : checkoutStep === 'address' ? 'Delivery Address' : 'Order Placed'}
                  </h3>
                  {checkoutStep === 'cart' && (
                    <span className="text-xs font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full">
                      {totalCartCount}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1.5 rounded-full hover:bg-stone-200/80 text-stone-500 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
                {cart.length === 0 ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="text-5xl">🥣</div>
                    <div className="font-serif text-lg font-bold text-stone-800">Your basket is feeling empty!</div>
                    <p className="text-xs text-stone-500 max-w-xs mx-auto">
                      Add Khare Podi Masala or our Sambar blend to unlock authentic home flavors.
                    </p>
                    <button
                      onClick={(e) => addToCart(COMBO_DEAL, e)}
                      className="px-5 py-2.5 rounded-2xl bg-[#A63A24]/90 backdrop-blur-md border border-white/30 text-white text-xs font-bold shadow-md hover:bg-[#8F2E19] active:scale-95 transition-all cursor-pointer"
                    >
                      Add Launch Combo (₹400)
                    </button>
                  </div>
                ) : checkoutStep === 'cart' ? (
                  <>
                    <div className="space-y-3">
                      {cart.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between p-3.5 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/80 shadow-xs"
                        >
                          <div className="space-y-0.5">
                            <div className="font-serif font-bold text-sm text-stone-900">{item.name}</div>
                            <div className="text-[11px] text-stone-500">{item.weight} • ₹{item.price} each</div>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="flex items-center border border-stone-300 rounded-lg bg-white/90 shadow-xs">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="p-1.5 hover:bg-stone-100 text-stone-600 rounded-l-lg cursor-pointer"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="w-7 text-center text-xs font-bold text-stone-800">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="p-1.5 hover:bg-stone-100 text-stone-600 rounded-r-lg cursor-pointer"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-stone-400 hover:text-red-600 p-1 transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 bg-emerald-50/80 backdrop-blur-xs rounded-xl border border-emerald-200/80 text-xs text-emerald-900 flex items-center gap-2">
                      <Truck className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span><strong>Free Express Delivery</strong> included with every order.</span>
                    </div>
                  </>
                ) : checkoutStep === 'address' ? (
                  /* FLIPKART & AMAZON STYLE CHECKOUT FORM */
                  <form onSubmit={handleAddressSubmit} className="space-y-4 text-xs">
                    <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 space-y-3">
                      <div className="font-serif font-bold text-stone-800 flex items-center gap-1.5 text-xs">
                        <span>1. Contact Details</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-stone-600 font-medium mb-1">Full Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Savyasanchi Pateriya"
                            value={address.fullName}
                            onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                            className="w-full p-2.5 rounded-lg border border-stone-300 bg-white focus:ring-2 focus:ring-[#A63A24] focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-stone-600 font-medium mb-1">Mobile Number (10 digits) *</label>
                          <input
                            type="tel"
                            required
                            placeholder="e.g. 9876543210"
                            pattern="[0-9]{10}"
                            value={address.phone}
                            onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                            className="w-full p-2.5 rounded-lg border border-stone-300 bg-white focus:ring-2 focus:ring-[#A63A24] focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 space-y-3">
                      <div className="font-serif font-bold text-stone-800 flex items-center gap-1.5 text-xs">
                        <MapPin className="w-3.5 h-3.5 text-[#A63A24]" />
                        <span>2. Delivery Address</span>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-stone-600 font-medium mb-1">Pincode (6 digits) *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. 110001"
                            maxLength={6}
                            value={address.pincode}
                            onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                            className="w-full p-2.5 rounded-lg border border-stone-300 bg-white focus:ring-2 focus:ring-[#A63A24] focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-stone-600 font-medium mb-1">Flat, House no., Building *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Flat 402, Tower B"
                            value={address.houseNo}
                            onChange={(e) => setAddress({ ...address, houseNo: e.target.value })}
                            className="w-full p-2.5 rounded-lg border border-stone-300 bg-white focus:ring-2 focus:ring-[#A63A24] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-stone-600 font-medium mb-1">Area, Street, Sector, Village *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. MG Road, Near City Mall"
                          value={address.street}
                          onChange={(e) => setAddress({ ...address, street: e.target.value })}
                          className="w-full p-2.5 rounded-lg border border-stone-300 bg-white focus:ring-2 focus:ring-[#A63A24] focus:outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-stone-600 font-medium mb-1">City / District *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Delhi / Bengaluru"
                            value={address.city}
                            onChange={(e) => setAddress({ ...address, city: e.target.value })}
                            className="w-full p-2.5 rounded-lg border border-stone-300 bg-white focus:ring-2 focus:ring-[#A63A24] focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-stone-600 font-medium mb-1">State *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Karnataka / UP"
                            value={address.state}
                            onChange={(e) => setAddress({ ...address, state: e.target.value })}
                            className="w-full p-2.5 rounded-lg border border-stone-300 bg-white focus:ring-2 focus:ring-[#A63A24] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-stone-600 font-medium mb-1">Address Type</label>
                        <div className="flex gap-4">
                          {(['Home', 'Work'] as const).map((type) => (
                            <label key={type} className="flex items-center gap-1.5 cursor-pointer">
                              <input
                                type="radio"
                                name="addressType"
                                checked={address.addressType === type}
                                onChange={() => setAddress({ ...address, addressType: type })}
                                className="text-[#A63A24] focus:ring-[#A63A24]"
                              />
                              <span className="text-stone-700">{type}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 space-y-2">
                      <div className="font-serif font-bold text-stone-800 text-xs">3. Payment Mode</div>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setAddress({ ...address, paymentMethod: 'COD' })}
                          className={`p-2.5 rounded-xl border font-bold text-center transition-all ${
                            address.paymentMethod === 'COD'
                              ? 'border-[#A63A24] bg-red-50 text-[#A63A24]'
                              : 'border-stone-200 bg-white text-stone-700'
                          }`}
                        >
                          Cash on Delivery
                        </button>
                        <button
                          type="button"
                          onClick={() => setAddress({ ...address, paymentMethod: 'UPI' })}
                          className={`p-2.5 rounded-xl border font-bold text-center transition-all ${
                            address.paymentMethod === 'UPI'
                              ? 'border-[#A63A24] bg-red-50 text-[#A63A24]'
                              : 'border-stone-200 bg-white text-stone-700'
                          }`}
                        >
                          UPI / QR Pay
                        </button>
                      </div>
                    </div>
                  </form>
                ) : (
                  /* ORDER CONFIRMATION RECEIPT */
                  <div className="text-center py-6 space-y-4">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <Check className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif text-2xl font-bold text-stone-900">Order Placed Successfully!</h4>
                      <p className="text-xs text-stone-600">
                        Thank you, <span className="font-bold text-stone-900">{address.fullName}</span>! Your items will be dispatched to your delivery address shortly.
                      </p>
                    </div>

                    <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 text-left text-xs space-y-2">
                      <div className="font-serif font-bold text-stone-900 border-b pb-1 flex justify-between">
                        <span>Shipping Summary</span>
                        <span className="font-mono text-[10px] text-stone-500">COD / Express</span>
                      </div>
                      <div className="text-stone-700 leading-relaxed">
                        <div><strong>Deliver To:</strong> {address.fullName} ({address.phone})</div>
                        <div>{address.houseNo}, {address.street}</div>
                        <div>{address.city}, {address.state} - {address.pincode} ({address.addressType})</div>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-bold text-stone-900">
                        <span>Total Payable:</span>
                        <span className="text-[#A63A24]">₹{cartTotal}</span>
                      </div>
                    </div>

                    <button
                      onClick={handleWhatsAppOrder}
                      className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-2xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send Order Receipt to WhatsApp</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Price Details Footer */}
              {cart.length > 0 && checkoutStep !== 'success' && (
                <div className="p-4 sm:p-6 border-t border-stone-200/80 bg-white/80 backdrop-blur-md space-y-3">
                  <div className="space-y-1 text-xs text-stone-600">
                    <div className="flex justify-between">
                      <span>Price ({totalCartCount} Items)</span>
                      <span>₹{cartTotal + cartSavings}</span>
                    </div>
                    <div className="flex justify-between text-emerald-700">
                      <span>Special Launch Discount</span>
                      <span>-₹{cartSavings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Charges</span>
                      <span className="text-emerald-700 font-bold">FREE</span>
                    </div>
                    <div className="flex justify-between text-sm font-serif font-black text-stone-900 pt-2 border-t border-stone-200">
                      <span>Total Amount</span>
                      <span className="text-[#A63A24] text-lg">₹{cartTotal}</span>
                    </div>
                  </div>

                  {checkoutStep === 'cart' ? (
                    <button
                      onClick={() => setCheckoutStep('address')}
                      className="w-full py-3.5 rounded-2xl bg-[#A63A24] hover:bg-[#8F2E19] text-white font-bold text-sm shadow-[0_8px_20px_rgba(166,58,36,0.35)] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Proceed to Delivery Address</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        onClick={() => setCheckoutStep('cart')}
                        className="px-4 py-3 rounded-2xl bg-white border border-stone-300 text-stone-700 font-bold text-xs active:scale-95 transition-all cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        onClick={handleAddressSubmit}
                        className="flex-1 py-3 rounded-2xl bg-[#A63A24] hover:bg-[#8F2E19] text-white font-bold text-xs shadow-md active:scale-95 transition-all cursor-pointer"
                      >
                        Confirm Order (₹{cartTotal})
                      </button>
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* Product Detail Modal */}
      {selectedProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setSelectedProductModal(null)}
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-xs"
          />

          <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6 z-10 border border-white/60">
            <div className="flex items-start justify-between border-b border-stone-200/80 pb-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest font-black text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                  Packaging Specifications
                </span>
                <h3 className="font-serif text-2xl font-black text-stone-900 mt-1">
                  {selectedProductModal.name} ({selectedProductModal.weight})
                </h3>
                <p className="text-xs text-stone-500 italic mt-0.5">
                  &ldquo;{selectedProductModal.tagline}&rdquo;
                </p>
              </div>
              <button
                onClick={() => setSelectedProductModal(null)}
                className="p-1.5 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="w-full">
              <ImageSlider 
                images={selectedProductModal?.images || []} 
                alt={selectedProductModal?.name || ''} 
              />
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#A63A24] flex items-center gap-1.5">
                <Leaf className="w-4 h-4" /> Full Ingredients List
              </h4>

              {selectedProductModal.ingredients.baseLentils ? (
                <div className="space-y-2 text-xs text-stone-700">
                  <div>
                    <span className="font-bold text-stone-900">Base Lentils: </span>
                    {selectedProductModal.ingredients.baseLentils.join(', ')}
                  </div>
                  <div>
                    <span className="font-bold text-stone-900">Spices &amp; Flavorings: </span>
                    {selectedProductModal.ingredients.spices?.join(', ')}
                  </div>
                  <div>
                    <span className="font-bold text-stone-900">Seeds &amp; Aromatics: </span>
                    {selectedProductModal.ingredients.seedsAndAromatics?.join(', ')}
                  </div>
                </div>
              ) : (
                <div className="space-y-2 text-xs text-stone-700">
                  <div>
                    <span className="font-bold text-stone-900">Roasted Spices: </span>
                    {selectedProductModal.ingredients.spicesAndSeeds?.join(', ')}
                  </div>
                  <div>
                    <span className="font-bold text-stone-900">Roasted Lentil Base: </span>
                    {selectedProductModal.ingredients.roastedLentils?.join(', ')}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                Nutritional Value (Per 100 gms)
              </h4>
              <div className="rounded-2xl border border-stone-200 overflow-hidden divide-y divide-stone-100 text-xs">
                {selectedProductModal.nutritionPer100g.map((item, idx) => (
                  <div key={idx} className="flex justify-between py-2 px-3 odd:bg-stone-50/50">
                    <span className="text-stone-600">{item.label}</span>
                    <span className="font-bold text-stone-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 bg-amber-50/70 rounded-2xl border border-amber-200 text-xs text-stone-700 space-y-1">
              <div className="font-bold text-amber-950">Storage Instructions:</div>
              <p>{selectedProductModal.storage}</p>
              <div className="text-[11px] text-amber-800 font-medium pt-1">
                Shelf Life: {selectedProductModal.shelfLife}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="font-serif text-2xl font-black text-[#782312]">
                ₹{selectedProductModal.price}
              </div>
              
              <button
                onClick={(e) => {
                  addToCart(selectedProductModal, e);
                  setSelectedProductModal(null);
                }}
                className="px-6 py-2.5 rounded-2xl bg-[#A63A24]/90 backdrop-blur-md border border-white/30 text-white text-xs font-bold shadow-[0_6px_20px_rgba(166,58,36,0.35)] hover:bg-[#8F2E19] active:scale-95 transition-all cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Spice Powder Burst Particles */}
      {powderBursts.map((burst) => (
        <div
          key={burst.id}
          style={{ left: burst.x, top: burst.y }}
          className="fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
        >
          {burst.particles.map((p, idx) => (
            <span
              key={idx}
              style={
                {
                  '--dx': `${p.dx}px`,
                  '--dy': `${p.dy}px`,
                  backgroundColor: p.color,
                  width: `${p.size}px`,
                  height: `${p.size}px`
                } as React.CSSProperties
              }
              className="absolute rounded-full animate-[powderParticle_0.85s_cubic-bezier(0.1,0.8,0.25,1)_forwards] shadow-[0_0_4px_rgba(0,0,0,0.15)]"
            />
          ))}
        </div>
      ))}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900/90 backdrop-blur-md text-white text-xs font-bold py-3 px-4 rounded-2xl shadow-2xl flex items-center gap-2.5 border border-white/20 animate-bounce">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* FOOTER (RESTORED ALL DETAILS) */}
      <footer id="contact" className="bg-[#1C1917] text-stone-300 pt-16 pb-12 border-t-4 border-[#A63A24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#2A2421] border border-[#DCA142]/40 flex items-center justify-center overflow-hidden">
                  {!logoFailed ? (
                    <img src="/logo.png" alt="Khare Masale" className="w-full h-full object-contain p-0.5" />
                  ) : (
                    <span className="font-serif italic font-bold text-amber-400 text-sm">KM</span>
                  )}
                </div>
                <span className="font-serif text-2xl font-black text-amber-400">Khare Masale</span>
              </div>
              <p className="font-serif italic text-stone-400 text-sm">
                &ldquo;Ghar mein aane do&rdquo;
              </p>
              <p className="text-xs text-stone-400 leading-relaxed">
                Handcrafted South-Indian spice essentials. Pure lentils, slow-roasted aromatics, 
                and no artificial additives.
              </p>
              <div className="text-xs text-amber-300 font-mono">
                Website: www.kharemasale.com
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest font-black text-white">Quick Navigation</h4>
              <ul className="space-y-2 text-xs text-stone-400">
                <li><a href="#products" className="hover:text-amber-400 transition-colors">Podi Masala (150g)</a></li>
                <li><a href="#products" className="hover:text-amber-400 transition-colors">Sambar Powder (150g)</a></li>
                <li><a href="#combo" className="hover:text-amber-400 transition-colors">Duo Launch Combo (₹400)</a></li>
                <li><a href="#how-to-use" className="hover:text-amber-400 transition-colors">Recipe &amp; Usage Guide</a></li>
                <li><a href="#why-us" className="hover:text-amber-400 transition-colors">Sustainable Packaging</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest font-black text-white">Customer Support</h4>
              <div className="space-y-2 text-xs text-stone-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <a href="tel:8796617874" className="hover:text-white">8796617874 (WhatsApp)</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-stone-500" />
                  <span>9220288874 / 9220388874</span>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <a href="mailto:support@kharemasale.com" className="hover:text-white">support@kharemasale.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <a href="mailto:feedback@kharemasale.com" className="hover:text-white">feedback@kharemasale.com</a>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest font-black text-white">Shipping &amp; Fulfilment</h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                Nationwide express delivery: <strong>2-4 business days</strong>.
              </p>
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 text-[11px] text-stone-400">
                Fulfilled under Goldie Masale shipping policy standards.
              </div>
              <div className="text-[10px] text-stone-500">
                Batch No. 1 • Best Before 12 Months from Packing
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4">
            <div>
              © 2026 Khare Masale. All rights reserved. Product of India.
            </div>
            <div className="flex gap-4">
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
              <span>•</span>
              <span>Shipping Policy</span>
            </div>
          </div>
        </div>
      </footer>

      {/* KEYFRAME ANIMATIONS */}
      <style>{`
        @keyframes powderParticle {
          0% {
            transform: translate(0, 0) scale(1.4);
            opacity: 1;
          }
          60% {
            opacity: 0.9;
          }
          100% {
            transform: translate(var(--dx), calc(var(--dy) + 40px)) scale(0.3);
            opacity: 0;
          }
        }
        @keyframes flowerBloom {
          0% {
            transform: scale(0.2) translateY(0);
            opacity: 0;
          }
          40% {
            transform: scale(1.2) translateY(-18px);
            opacity: 1;
          }
          80% {
            transform: scale(1) translateY(-32px);
            opacity: 0.85;
          }
          100% {
            transform: scale(0.7) translateY(-46px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}