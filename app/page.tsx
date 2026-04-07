"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FridgeSmartRedesign() {
  const [selected, setSelected] = useState([]);
  const [isCooking, setIsCooking] = useState(false);
  const [recipe, setRecipe] = useState(null);

  const ingredients = [
    { id: 'broccoli', emoji: '🥦', label: 'Broccoli' },
    { id: 'cheese', emoji: '🧀', label: 'Cheddar' },
    { id: 'egg', emoji: '🥚', label: 'Fresh Egg' },
  ];

  const handleToggle = (id) => {
    setRecipe(null);
    setSelected(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : prev.length < 3 ? [...prev, id] : prev
    );
  };

  const generateRecipe = () => {
    setIsCooking(true);
    setTimeout(() => {
      setRecipe({
        title: "Chef Lumi's Broccoli Frittata",
        time: "12 mins",
        cal: "280 kcal",
        desc: "A fluffy, protein-packed delight using your exact ingredients."
      });
      setIsCooking(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#050c0a] text-white font-sans selection:bg-emerald-500/30">
      
      {/* --- GLASS NAV --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050c0a]/80 backdrop-blur-xl px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white">🥗</div>
          FridgeSmart
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <button className="hover:text-emerald-400 transition">How it Works</button>
          <button className="hover:text-emerald-400 transition">Recipes</button>
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 rounded-full transition shadow-lg shadow-emerald-500/20">Download App</button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="z-10"
          >
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight mb-8">
              STOP ASKING <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                WHAT'S FOR DINNER.
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-md mb-10 leading-relaxed">
              Your fridge already knows the answer. Our AI tracks your inventory and generates gourmet meals in seconds.
            </p>
            <div className="flex gap-4">
              <button className="h-14 px-8 bg-white text-black font-bold rounded-2xl hover:scale-105 transition active:scale-95">App Store</button>
              <button className="h-14 px-8 bg-white/10 text-white font-bold rounded-2xl border border-white/10 hover:bg-white/20 transition">Google Play</button>
            </div>
          </motion.div>

          {/* THE "MAGIC" FRIDGE VISUAL */}
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500/20 blur-[120px] rounded-full animate-pulse" />
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-square bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-[3rem] backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-2xl"
            >
               <span className="text-9xl">🧊</span>
               {/* This is where your 3D Transparent PNG goes */}
               <div className="absolute bottom-6 left-6 right-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl backdrop-blur-md">
                  <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">Live Inventory</p>
                  <p className="text-sm text-white/80">Spinach: Expires in 2 days</p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- INTERACTIVE LAB --- */}
      <section className="py-20 px-6 bg-[#081310]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Try the AI Lab</h2>
            <p className="text-gray-400">Select ingredients to see Chef Lumi's magic</p>
          </div>

          <div className="bg-[#0b1d18] border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-inner">
            <div className="flex justify-center gap-4 md:gap-8 mb-12">
              {ingredients.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => handleToggle(item.id)}
                  className={`group relative w-24 h-24 md:w-32 md:h-32 rounded-3xl flex flex-col items-center justify-center transition-all duration-500 ${
                    selected.includes(item.id) 
                    ? 'bg-emerald-500 border-white shadow-[0_0_30px_rgba(16,185,129,0.3)]' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                  } border-2`}
                >
                  <span className="text-4xl mb-2">{item.emoji}</span>
                  <span className={`text-[10px] font-bold uppercase tracking-tighter ${selected.includes(item.id) ? 'text-white' : 'text-gray-500'}`}>
                    {item.label}
                  </span>
                </button>
              ))}
            </div>

            <button 
              disabled={selected.length === 0 || isCooking}
              onClick={generateRecipe}
              className="w-full py-6 bg-emerald-500 disabled:bg-white/5 disabled:text-gray-600 rounded-2xl font-black text-xl hover:bg-emerald-400 transition-all active:scale-[0.98]"
            >
              {isCooking ? "CHEF LUMI IS COOKING..." : "GENERATE RECIPE"}
            </button>

            <AnimatePresence>
              {recipe && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                  className="mt-10 overflow-hidden"
                >
                  <div className="p-6 bg-white/5 border border-emerald-500/20 rounded-2xl flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-24 h-24 bg-emerald-500/20 rounded-xl flex items-center justify-center text-4xl">🍳</div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-emerald-400">{recipe.title}</h3>
                      <p className="text-gray-400 text-sm mt-1 mb-4">{recipe.desc}</p>
                      <div className="flex justify-center md:justify-start gap-4 text-xs font-bold uppercase text-emerald-500/60">
                        <span>⏱ {recipe.time}</span>
                        <span>🔥 {recipe.cal}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- CHEF LUMI FLOATING --- */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div whileHover={{ scale: 1.05 }} className="bg-emerald-600 p-4 rounded-full shadow-2xl cursor-pointer flex items-center gap-3 border border-white/20">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl">👨‍🍳</div>
          <div className="pr-2">
            <p className="text-[10px] font-black uppercase opacity-60 leading-none">AI Assistant</p>
            <p className="text-sm font-bold">Ask Chef Lumi</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
