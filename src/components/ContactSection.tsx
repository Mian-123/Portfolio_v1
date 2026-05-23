import { contactLinks } from '../data/portfolioData';

const ContactSection = () => {
  const emailLink = contactLinks.find((link) => link.type === 'email');
  const otherLinks = contactLinks.filter((link) => link.type !== 'email');

  const getIcon = (type: string) => {
    switch (type) {
      case 'linkedin':
        return (
          <svg className="w-[17px] h-[17px] shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case 'phone':
        return (
          <svg className="w-[17px] h-[17px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.49 12 19.79 19.79 0 011.4 3.45 2 2 0 013.38 1.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.9a16 16 0 006.29 6.29l1.21-1.73a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
        );
      case 'github':
        return (
          <svg className="w-[17px] h-[17px] shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.17c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0012 0z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-28 relative z-[1]">
      <div className="max-w-[1120px] mx-auto px-[5%]">
        <div className="max-w-[680px] mx-auto text-center">
          <div className="font-mono text-[0.72rem] text-[#64748b] tracking-[0.12em] uppercase mb-2 flex items-center gap-2 justify-center">
            <span className="text-[#4facfe]">//</span> Let's Talk
          </div>
          <h2 className="text-[clamp(2rem,3.5vw,2.7rem)] font-black tracking-[-0.03em] leading-[1.1] mb-4">
            Get In <span className="bg-gradient-to-r from-[#4facfe] to-[#a78bfa] bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-[#64748b] text-[1rem] leading-[1.8] mb-10">
            Open to new opportunities, collaborations, or a good conversation about tech and AI. Drop me a message — I respond fast.
          </p>

          {/* Email Button */}
          {emailLink && (
            <a
              href={emailLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[0.6rem] px-8 py-[0.9rem] rounded-lg bg-gradient-to-br from-[#4facfe] to-[#00f2fe] text-[#0a0f1e] font-bold no-underline text-[0.95rem] transition-all duration-200 hover:shadow-[0_0_36px_rgba(79,172,254,0.5)] hover:brightness-[1.08] mb-8"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              {emailLink.value}
            </a>
          )}

          {/* Contact Links */}
          <div className="flex gap-4 justify-center flex-wrap">
            {otherLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[0.55rem] px-[1.4rem] py-[0.7rem] rounded-lg bg-[#0d1525] border border-[rgba(255,255,255,0.06)] text-[#e2e8f0] no-underline text-[0.875rem] font-medium transition-all duration-200 hover:border-[rgba(79,172,254,0.35)] hover:bg-[rgba(79,172,254,0.05)] hover:-translate-y-[2px]"
              >
                {getIcon(link.type)}
                {link.type === 'phone' ? link.value : link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
