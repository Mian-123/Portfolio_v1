import { projects } from '../data/portfolioData';
import TechTag from './TechTag';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 relative z-[1]">
      <div className="max-w-[1120px] mx-auto px-[5%]">
        {/* Section Header */}
        <div className="mb-12">
          <div className="font-mono text-[0.72rem] text-[#64748b] tracking-[0.12em] uppercase mb-2 flex items-center gap-2">
            <span className="text-[#4facfe]">//</span> My Work
          </div>
          <h2 className="text-[clamp(2rem,3.5vw,2.7rem)] font-black tracking-[-0.03em] leading-[1.1] mb-3">
            Featured <span className="bg-gradient-to-r from-[#4facfe] to-[#a78bfa] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-[#64748b] text-[0.95rem] max-w-[540px] leading-[1.75]">
            Real-world applications built to solve actual problems — deployed and used in production.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden bg-[#0d1525] border border-[rgba(255,255,255,0.06)] transition-all duration-300 relative hover:-translate-y-[6px] hover:border-[rgba(79,172,254,0.35)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)] group"
            >
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#4facfe] to-[#a78bfa] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Project Image */}
              {project.image && (
                <div className="overflow-hidden rounded-t-xl -mx-[1px] -mt-[1px] mb-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover object-top border-b border-[rgba(255,255,255,0.06)]"
                  />
                </div>
              )}

              <div className="p-7">
                {/* Meta */}
                <div className="flex items-center gap-2 font-mono text-[0.7rem] text-[#4facfe] mb-4 tracking-[0.06em]">
                  <span>{project.year}</span>
                  {project.badges.map((badge, i) => (
                    <span
                      key={i}
                      className={`px-2 py-[0.18rem] rounded text-[0.65rem] ${
                        badge === 'LIVE'
                          ? 'bg-[rgba(74,222,128,0.08)] border border-[rgba(74,222,128,0.2)] text-[#4ade80]'
                          : badge === 'HACKATHON'
                          ? 'bg-[rgba(251,191,36,0.08)] border border-[rgba(251,191,36,0.2)] text-[#fbbf24]'
                          : 'bg-[rgba(167,139,250,0.1)] border border-[rgba(167,139,250,0.2)] text-[#a78bfa]'
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-[1.15rem] font-bold mb-3">{project.title}</h3>

                {/* Description */}
                <p className="text-[#64748b] text-[0.875rem] leading-[1.75] mb-5">
                  {project.description}
                </p>

                {/* Highlight */}
                <div className="flex gap-2 items-start mb-5 p-3 bg-[rgba(79,172,254,0.04)] rounded-lg border border-[rgba(79,172,254,0.08)]">
                  <span className="text-[#4facfe] text-[0.8rem] shrink-0 mt-[0.05rem]">✦</span>
                  <p className="text-[#64748b] text-[0.82rem] leading-[1.6] m-0">{project.highlight}</p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-[0.4rem]">
                  {project.tags.map((tag, i) => (
                    <TechTag key={i} name={tag} variant="project" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
