import { getTechIcon } from '../data/techIcons';

interface TechTagProps {
  name: string;
  variant?: 'skill' | 'project';
}

const TechTag = ({ name, variant = 'skill' }: TechTagProps) => {
  const iconPath = getTechIcon(name);

  if (variant === 'project') {
    return (
      <span className="inline-flex items-center gap-1.5 px-[0.6rem] py-[0.2rem] rounded text-[0.67rem] font-mono bg-[rgba(167,139,250,0.07)] border border-[rgba(167,139,250,0.15)] text-[#a78bfa]">
        {iconPath && (
          <svg className="w-3 h-3 opacity-80" viewBox="0 0 24 24" fill="currentColor">
            <path d={iconPath} />
          </svg>
        )}
        {name}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-[0.28rem] rounded-full bg-[rgba(79,172,254,0.06)] border border-[rgba(79,172,254,0.13)] text-[0.78rem] text-[#94a3b8] transition-all duration-[180ms] hover:bg-[rgba(79,172,254,0.14)] hover:border-[#4facfe] hover:text-[#4facfe]">
      {iconPath && (
        <svg className="w-3.5 h-3.5 opacity-70" viewBox="0 0 24 24" fill="currentColor">
          <path d={iconPath} />
        </svg>
      )}
      {name}
    </span>
  );
};

export default TechTag;
