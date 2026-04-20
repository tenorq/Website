export type CardItem = {
  title: string;
  desc: string;
};

export function CardGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-6 mt-12">
      {items.map((item) => (
        <div
          key={item.title}
          className="group relative p-8 rounded-2xl border border-white/5 
                     bg-[#121212]/50 backdrop-blur-sm
                     hover:border-[#2f5d8c]/30 hover:bg-[#121212]
                     transition-all duration-300 hover:shadow-2xl hover:shadow-[#2f5d8c]/5"
        >
          {/* Subtle Accent Glow on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2f5d8c]/0 to-[#2f5d8c]/0 group-hover:from-[#2f5d8c]/5 group-hover:to-transparent rounded-2xl transition-all duration-500" />
          
          <div className="relative z-10">
            <h3 className="text-xl font-semibold text-white group-hover:text-[#2f5d8c] transition-colors">
              {item.title}
            </h3>
            <p className="mt-4 text-[#9ca3af] leading-relaxed group-hover:text-[#f3f4f6]/80 transition-colors">
              {item.desc}
            </p>
            
            <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-widest text-[#2f5d8c] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              Learn More 
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
