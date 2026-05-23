import { education, certifications } from '../data/portfolioData';

const EducationSection = () => {
  return (
    <section id="education" className="py-28 relative z-[1] bg-[rgba(13,21,37,0.5)]">
      <div className="max-w-[1120px] mx-auto px-[5%]">
        {/* Section Header */}
        <div className="mb-12">
          <div className="font-mono text-[0.72rem] text-[#64748b] tracking-[0.12em] uppercase mb-2 flex items-center gap-2">
            <span className="text-[#4facfe]">//</span> Background
          </div>
          <h2 className="text-[clamp(2rem,3.5vw,2.7rem)] font-black tracking-[-0.03em] leading-[1.1] mb-3">
            Education & <span className="bg-gradient-to-r from-[#4facfe] to-[#a78bfa] bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-[#64748b] text-[0.95rem] max-w-[540px] leading-[1.75]">
            Recognized for my achievements and ongoing commitment to learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Academic */}
          <div>
            <div className="font-mono text-[0.7rem] tracking-[0.1em] text-[#64748b] uppercase mb-6">
              Academic
            </div>
            <div className="flex gap-5">
              {/* Timeline spine */}
              <div className="flex flex-col items-center">
                <div className="w-[13px] h-[13px] rounded-full bg-[#4facfe] shadow-[0_0_16px_rgba(79,172,254,0.5)] shrink-0" />
                <div className="w-px flex-1 bg-[rgba(255,255,255,0.06)] min-h-[24px]" />
              </div>
              {/* Body */}
              <div className="p-5 rounded-xl bg-[#0d1525] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(79,172,254,0.35)] transition-colors duration-200 mb-4">
                <h4 className="text-[0.95rem] font-bold mb-1">{education.degree}</h4>
                <div className="text-[#64748b] text-[0.84rem]">{education.institution} · {education.location}</div>
                <div className="font-mono text-[0.7rem] text-[#4facfe] mt-2">{education.years}</div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="font-mono text-[0.7rem] tracking-[0.1em] text-[#64748b] uppercase mb-6">
              Certifications
            </div>
            <div className="flex flex-col gap-[0.85rem]">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start p-[1.1rem_1.25rem] rounded-xl bg-[#0d1525] border border-[rgba(255,255,255,0.06)] transition-all duration-200 hover:border-[rgba(79,172,254,0.35)] hover:translate-x-1"
                >
                  <span className="font-mono text-[0.7rem] px-2 py-[0.22rem] bg-[rgba(79,172,254,0.08)] rounded text-[#4facfe] shrink-0 mt-[2px]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div className="text-[0.88rem] font-semibold mb-[0.22rem]">{cert.name}</div>
                    <div className="text-[#64748b] text-[0.8rem]">{cert.issuer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
