import { roles } from '../data/portfolioData';

const RotatingTitles = () => {
  return (
    <div className="h-[1.7rem] overflow-hidden mb-6 text-[1.1rem] font-semibold text-[#94a3b8]">
      <div className="flex flex-col animate-[scrollRoles_10s_steps(1)_infinite]">
        {roles.map((role, index) => (
          <span key={index} className="h-[1.7rem] flex items-center">
            {role}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RotatingTitles;
