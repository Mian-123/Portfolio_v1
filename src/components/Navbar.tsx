import { useState } from 'react';
import { navLinks } from '../data/portfolioData';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleConnectClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-[5%] h-[68px] bg-[rgba(10,15,30,0.92)] backdrop-blur-[24px] saturate-[1.4] border-b border-[rgba(255,255,255,0.06)]">
      {/* Logo */}
      <a href="#hero" className="text-[1.25rem] font-extrabold tracking-tight text-[#4facfe] no-underline">
        MW
      </a>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex gap-8 list-none">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[#64748b] no-underline text-[0.875rem] font-medium hover:text-[#e2e8f0] transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop Action Buttons */}
      <div className="hidden md:flex gap-3 items-center">
        <a
          href="/assets/M_Waleed_CV.pdf"
          download="Muhammad_Waleed_CV.pdf"
          className="px-5 py-2 rounded-lg text-[0.85rem] font-semibold bg-transparent border border-[rgba(79,172,254,0.35)] text-[#e2e8f0] hover:bg-[rgba(79,172,254,0.06)] hover:border-[#4facfe] transition-all duration-200 no-underline inline-flex items-center"
        >
          Resume
        </a>
        <button
          onClick={handleConnectClick}
          className="px-5 py-2 rounded-lg text-[0.85rem] font-semibold bg-gradient-to-br from-[#4facfe] to-[#00f2fe] border border-transparent text-[#0a0f1e] hover:shadow-[0_0_28px_rgba(79,172,254,0.45)] hover:brightness-110 transition-all duration-200"
        >
          Connect
        </button>
      </div>

      {/* Mobile Hamburger Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-[#64748b] hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="fixed top-[68px] left-0 right-0 md:hidden border-t border-[rgba(255,255,255,0.06)] bg-[rgba(10,15,30,0.98)] backdrop-blur-[24px] z-[999] max-h-[calc(100vh-68px)] overflow-y-auto">
          <div className="px-[5%] py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-[#64748b] hover:text-white transition-colors duration-200 py-2 text-[0.875rem] font-medium no-underline"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[rgba(255,255,255,0.06)] flex flex-col space-y-3">
              <a
                href="/assets/M_Waleed_CV.pdf"
                download="Muhammad_Waleed_CV.pdf"
                className="px-5 py-3 rounded-lg text-[0.85rem] font-semibold bg-transparent border border-[rgba(79,172,254,0.35)] text-[#e2e8f0] text-center no-underline"
              >
                Resume
              </a>
              <button
                onClick={handleConnectClick}
                className="px-5 py-3 rounded-lg text-[0.85rem] font-semibold bg-gradient-to-br from-[#4facfe] to-[#00f2fe] border border-transparent text-[#0a0f1e]"
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
