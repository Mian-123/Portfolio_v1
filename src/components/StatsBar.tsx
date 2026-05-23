import { stats } from '../data/portfolioData';

const StatsBar = () => {
  return (
    <div className="relative z-[1] flex justify-center border-t border-b border-[rgba(255,255,255,0.06)] bg-[rgba(13,21,37,0.7)] backdrop-blur-[8px] flex-wrap">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex-1 max-w-[280px] text-center py-8 px-4 border-r border-[rgba(255,255,255,0.06)] last:border-r-0 max-[960px]:max-w-[50%] max-[960px]:flex-[0_0_50%] max-[560px]:max-w-full max-[560px]:flex-[0_0_100%] max-[560px]:border-r-0 max-[560px]:border-b max-[560px]:border-b-[rgba(255,255,255,0.06)] max-[560px]:last:border-b-0"
        >
          <div className="text-[2.4rem] font-black leading-none tracking-[-0.04em] bg-gradient-to-br from-[#4facfe] to-[#a78bfa] bg-clip-text text-transparent">
            {stat.value}
          </div>
          <div className="text-[#64748b] text-[0.82rem] mt-[0.35rem]">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsBar;
