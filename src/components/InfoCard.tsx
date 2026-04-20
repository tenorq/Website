// /components/InfoCard.tsx

type InfoCardProps = {
  title: string;
  desc: string;
};

export const InfoCard = ({ title, desc }: InfoCardProps) => {
  return (
    <div
      className="p-8 rounded-2xl 
  border border-white/5 
  bg-white/[0.03] 
  hover:bg-white/[0.06] 
  hover:border-white/10 
  hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]
  transition-all duration-300
"
    >
      <h4 className="text-blue-400 font-bold text-lg mb-4">{title}</h4>
      <p className="text-gray-300 leading-relaxed">{desc}</p>
    </div>
  );
};
