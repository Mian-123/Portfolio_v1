import RotatingTitles from './RotatingTitles';
import CodeTerminal from './CodeTerminal';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen pt-[68px] flex items-center overflow-hidden relative"
    >
      {/* Orbs */}
      <div className="absolute w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none top-[-150px] right-[-150px] bg-[radial-gradient(circle,rgba(79,172,254,0.14),transparent_70%)]" />
      <div className="absolute w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none bottom-[-100px] left-[-200px] bg-[radial-gradient(circle,rgba(167,139,250,0.11),transparent_70%)]" />

      <div className="max-w-[1120px] mx-auto px-[5%] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-12 items-center">
          {/* Left */}
          <div>
            {/* Available Badge */}
            <div className="inline-flex items-center gap-[0.55rem] px-4 py-[0.35rem] rounded-full bg-[rgba(74,222,128,0.08)] border border-[rgba(74,222,128,0.25)] text-[0.78rem] font-semibold text-[#4ade80] tracking-wide mb-7">
              <span className="w-2 h-2 rounded-full bg-[#4ade80] shadow-[0_0_0_0_rgba(74,222,128,0.5)] animate-[ping_2s_ease-out_infinite]" />
              Available for Work
            </div>

            {/* Name */}
            <p className="text-[1.15rem] font-medium text-[#94a3b8] mb-1">Hi, I'm</p>
            <h1 className="text-[clamp(2.8rem,5.5vw,4.5rem)] font-black tracking-[-0.04em] leading-[1.05] mb-3">
              <span className="bg-gradient-to-br from-[#4facfe] to-[#a78bfa] bg-clip-text text-transparent">Muhammad Waleed</span>
            </h1>

            {/* Rotating Titles */}
            <RotatingTitles />

            {/* Description */}
            <p className="text-[#64748b] text-[1rem] leading-[1.85] max-w-[500px] mb-9">
              I build scalable web applications and explore intelligent systems with{' '}
              <strong className="text-[#e2e8f0]">React.js, Node.js & MongoDB</strong>. Growing focus on{' '}
              <strong className="text-[#e2e8f0]">AI agents, agentic AI systems</strong>, and LLM-based applications — with hands-on exposure to prompt engineering and AI tool integration.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-[0.875rem] flex-wrap">
              <a
                href="/assets/M_Waleed_CV.pdf"
                download="Muhammad_Waleed_CV.pdf"
                className="px-5 py-2 rounded-lg text-[0.85rem] font-semibold bg-gradient-to-br from-[#4facfe] to-[#00f2fe] border border-transparent text-[#0a0f1e] hover:shadow-[0_0_28px_rgba(79,172,254,0.45)] hover:brightness-110 transition-all duration-200 inline-flex items-center gap-1 no-underline"
              >
                Resume
              </a>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-5 py-2 rounded-lg text-[0.85rem] font-semibold bg-transparent border border-[rgba(79,172,254,0.35)] text-[#e2e8f0] hover:bg-[rgba(79,172,254,0.06)] hover:border-[#4facfe] transition-all duration-200"
              >
                View Projects
              </button>
            </div>
          </div>

          {/* Right: Terminal */}
          <div className="hidden lg:block">
            <CodeTerminal />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
