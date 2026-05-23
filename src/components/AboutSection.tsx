import { aboutCards } from '../data/portfolioData';

const AboutSection = () => {
  return (
    <section id="about" className="py-28 relative z-[1]">
      <div className="max-w-[1120px] mx-auto px-[5%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Text */}
          <div>
            <div className="font-mono text-[0.72rem] text-[#64748b] tracking-[0.12em] uppercase mb-2 flex items-center gap-2">
              <span className="text-[#4facfe]">//</span> Introduction
            </div>
            <h2 className="text-[clamp(2rem,3.5vw,2.7rem)] font-black tracking-[-0.03em] leading-[1.1] mb-3">
              About <span className="bg-gradient-to-r from-[#4facfe] to-[#a78bfa] bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-[#64748b] text-[0.82rem] font-semibold tracking-[0.04em] uppercase mb-6">
              Who I Am
            </p>

            <div className="space-y-4">
              <p className="text-[#64748b] leading-[1.9] text-[0.95rem]">
                I'm an <strong className="text-[#e2e8f0]">ambitious MERN Stack developer</strong> with hands-on experience building scalable web applications using React.js, Node.js, and MongoDB. I have genuine passion for crafting products that solve real problems — from school management systems to AI-powered platforms.
              </p>
              <p className="text-[#64748b] leading-[1.9] text-[0.95rem]">
                With a growing focus on <strong className="text-[#e2e8f0]">Artificial Intelligence</strong>, I'm actively working with AI agents, agentic AI systems, and LLM-based applications. I bring hands-on exposure to prompt engineering and AI tool integration to every project.
              </p>
              <p className="text-[#64748b] leading-[1.9] text-[0.95rem]">
                Pursuing my <strong className="text-[#e2e8f0]">BSCS from University of Punjab, Lahore</strong> while actively building and shipping production-grade applications.
              </p>
            </div>
          </div>

          {/* Right - Cards */}
          <div className="flex flex-col gap-4">
            {aboutCards.map((card, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-[#0d1525] border border-[rgba(255,255,255,0.06)] transition-all duration-[250ms] hover:border-[rgba(79,172,254,0.35)] hover:-translate-y-[3px]"
              >
                <div className="text-[1.5rem] mb-2">{card.icon}</div>
                <h4 className="text-[0.9rem] font-bold mb-1">{card.title}</h4>
                <p className="text-[#64748b] text-[0.84rem] leading-[1.65]">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
