/**
 * Footer — Page Footer
 * =====================
 * Social links and copyright. Appears at the very bottom
 * of the page, above the floating Navbar.
 */
import React from 'react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../constants';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-200 py-8 mt-4">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left: Credit */}
          <p className="text-sm text-zinc-400 flex items-center gap-1.5">
            Built with React & <Heart size={14} className="text-red-400 fill-red-400" /> by{' '}
            {PERSONAL_INFO.name}
          </p>

          {/* Center: Social Icons */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.filter((link) => link.name !== 'Resume').map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-700 transition-colors"
                aria-label={link.name}
              >
                <link.icon size={16} />
              </a>
            ))}
          </div>

          {/* Right: Copyright */}
          <p className="text-xs text-zinc-400">© {new Date().getFullYear()} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
