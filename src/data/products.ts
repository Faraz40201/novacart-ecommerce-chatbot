export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  badge?: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 299.00,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
    category: "Electronics",
    description: "Experience unparalleled audio clarity with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and ultra-comfortable memory foam ear cushions.",
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: "2",
    name: "Minimalist Leather Watch",
    price: 189.00,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
    category: "Accessories",
    description: "Timeless elegance meets modern craftsmanship. Swiss movement, genuine Italian leather strap, and sapphire crystal glass.",
    inStock: true,
  },
  {
    id: "3",
    name: "Smart Home Speaker",
    price: 149.00,
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=600&h=600&fit=crop",
    category: "Electronics",
    description: "Fill your space with rich, room-filling sound. Voice-controlled smart home integration with premium audio drivers.",
    badge: "New",
    inStock: true,
  },
  {
    id: "4",
    name: "Classic Canvas Backpack",
    price: 89.00,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
    category: "Bags",
    description: "Durable canvas construction with leather accents. Multiple compartments for organized storage and padded laptop sleeve.",
    inStock: true,
  },
  {
    id: "5",
    name: "Ceramic Pour-Over Set",
    price: 65.00,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop",
    category: "Home",
    description: "Handcrafted ceramic dripper and carafe for the perfect pour-over coffee experience. Includes stainless steel filter.",
    inStock: true,
  },
  {
    id: "6",
    name: "Wireless Charging Pad",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=600&h=600&fit=crop",
    category: "Electronics",
    description: "Fast 15W wireless charging with intelligent device recognition. Sleek aluminum design with non-slip surface.",
    inStock: true,
  },
  {
    id: "7",
    name: "Designer Sunglasses",
    price: 159.00,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop",
    category: "Accessories",
    description: "Premium acetate frames with polarized lenses. 100% UV protection with a timeless silhouette.",
    badge: "Limited",
    inStock: true,
  },
  {
    id: "8",
    name: "Organic Cotton T-Shirt",
    price: 48.00,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
    category: "Apparel",
    description: "Sustainably sourced 100% organic cotton. Pre-shrunk with a relaxed modern fit.",
    inStock: true,
  },
];

export const categories = [
  { name: "Electronics", count: 3 },
  { name: "Accessories", count: 2 },
  { name: "Bags", count: 1 },
  { name: "Home", count: 1 },
  { name: "Apparel", count: 1 },
];
