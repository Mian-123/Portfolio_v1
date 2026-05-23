import { footerData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="py-8 px-[5%] text-center border-t border-[rgba(255,255,255,0.06)] text-[#64748b] text-[0.82rem] font-mono relative z-[1]">
      <span className="text-[#4facfe] font-bold">{footerData.name}</span>
      {' '}&nbsp;·&nbsp; {footerData.role} &nbsp;·&nbsp; © {footerData.year}
      <br />
      <span className="text-[0.7rem] mt-1 block">
        {footerData.location} &nbsp;·&nbsp;{' '}
        <a href={`mailto:${footerData.email}`} className="text-[#4facfe] no-underline hover:underline">
          {footerData.email}
        </a>
      </span>
    </footer>
  );
};

export default Footer;
