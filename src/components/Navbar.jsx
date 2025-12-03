import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="w-full h-16 md:h-24 bg-black flex justify-between items-center px-4 md:px-6 border-b border-gray-900">
            {/* Left: Menu */}
            <div className="flex items-center gap-2 cursor-pointer group">
                <Menu className="text-white group-hover:text-accent transition-colors" size={20} strokeWidth={1.5} />
                <span className="text-white uppercase tracking-[0.15em] text-xs font-medium group-hover:text-accent transition-colors hidden md:inline">
                    Menu
                </span>
            </div>

            {/* Center: Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
                <img src="/images/social-logo.png" alt="SOCIAL" className="h-8 md:h-12" />
            </div>

            {/* Right: Reserve Button */}
            <button className="hidden md:block px-5 py-2 bg-transparent border border-gray-700 rounded-full text-white text-xs font-medium uppercase tracking-wider hover:border-accent hover:text-accent transition-all duration-300">
                Reserve a table
            </button>
        </nav>
    );
};

export default Navbar;
