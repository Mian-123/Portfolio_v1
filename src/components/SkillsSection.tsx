import { skillCategories } from '../data/portfolioData';
import TechTag from './TechTag';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 relative z-[1] bg-[rgba(13,21,37,0.5)]">
      <div className="max-w-[1120px] mx-auto px-[5%]">
        {/* Section Header */}
        <div className="mb-12">
          <div className="font-mono text-[0.72rem] text-[#64748b] tracking-[0.12em] uppercase mb-2 flex items-center gap-2">
            <span className="text-[#4facfe]">//</span> Expertise
          </div>
          <h2 className="text-[clamp(2rem,3.5vw,2.7rem)] font-black tracking-[-0.03em] leading-[1.1] mb-3">
            Skills & <span className="bg-gradient-to-r from-[#4facfe] to-[#a78bfa] bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-[#64748b] text-[0.95rem] max-w-[540px] leading-[1.75]">
            A curated stack of tools and technologies I use to build fast, scalable, and intelligent applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[#0d1525] border border-[rgba(255,255,255,0.06)] transition-all duration-[250ms] hover:border-[rgba(79,172,254,0.35)] hover:shadow-[0_0_40px_rgba(79,172,254,0.08)]"
            >
              <div className="font-mono text-[0.68rem] text-[#4facfe] tracking-[0.1em] uppercase mb-4">
                {category.category}
              </div>
              <div className="flex flex-wrap gap-[0.45rem]">
                {category.skills.map((skill, skillIndex) => (
                  <TechTag key={skillIndex} name={skill} variant="skill" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
