import { motion } from 'motion/react';
import { ShoppingBag, Star, Zap } from 'lucide-react';
import { useStore } from '../store/useStore';
import { Button } from '../components/ui/Button';

const products = [
  {
    id: "nxs-hoodie-blk",
    name: "NEXUS'26 Origin Hoodie",
    price: 2499,
    tag: "Bestseller",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "nxs-tee-wht",
    name: "Builder's Tee",
    price: 1299,
    tag: "Limited Edition",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "nxs-cap-glw",
    name: "Cyber Cap",
    price: 899,
    tag: "Glow in dark",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "nxs-mat",
    name: "Deskmat Pro",
    price: 1899,
    tag: "Premium",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=800",
  }
];

export default function MerchandisePage() {
  const { addToCart } = useStore();

  return (
    <div className="min-h-screen bg-[#030712] pt-32 pb-20 px-6 lg:px-12 relative overflow-hidden">
      {/* 3D Visual Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#7C3AED]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-200px] left-[-200px] w-[600px] h-[600px] bg-[#00F5FF]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-12">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[#00F5FF] text-xs font-semibold mb-4"
            >
              <Zap className="w-3 h-3" />
              <span>OFFICIAL STORE</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter text-white"
            >
              NEXUS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#00F5FF]">DROP.</span>
            </motion.h1>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-sm mt-6 md:mt-0 text-left md:text-right"
          >
            Premium gear designed for the builders of tomorrow. Limited stock available.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, type: 'spring' }}
              className="group"
            >
              <div className="relative aspect-[4/5] bg-white/5 rounded-3xl overflow-hidden border border-white/10 mb-6 group-hover:border-[#7C3AED]/50 transition-colors duration-500">
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-bold tracking-wider uppercase text-white">
                  {product.tag}
                </div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-70 mix-blend-lighten group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button 
                    onClick={() => addToCart({ ...product, quantity: 1 })}
                    className="w-full bg-white text-black hover:bg-gray-200 border-none font-sans font-bold py-3 rounded-xl flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-5 h-5" /> Add to Cart
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-[#7C3AED] transition-colors">{product.name}</h3>
                  <div className="flex items-center gap-1 text-[#00F5FF]">
                    <Star className="w-3 h-3 fill-[#00F5FF]" />
                    <Star className="w-3 h-3 fill-[#00F5FF]" />
                    <Star className="w-3 h-3 fill-[#00F5FF]" />
                    <Star className="w-3 h-3 fill-[#00F5FF]" />
                    <Star className="w-3 h-3 fill-[#00F5FF]" />
                  </div>
                </div>
                <span className="font-mono font-bold text-xl text-white">₹{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
