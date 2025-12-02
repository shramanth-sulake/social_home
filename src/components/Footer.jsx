import React from 'react';
import { Facebook, Instagram, Twitter, ArrowRight, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full bg-black pt-16 pb-8 px-4 border-t border-gray-900">
            <div className="max-w-7xl mx-auto">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-16">
                    {/* Left: Logo & Socials */}
                    <div className="flex flex-col gap-8">
                        {/* Logo */}
                        <h1 className="text-5xl font-bold tracking-tight">
                            <span className="text-accent">S</span>
                            <span className="text-accent">[</span>
                            <span className="text-accent">#</span>
                            <span className="text-accent">]</span>
                            <span className="text-accent">CIAL</span>
                        </h1>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-black hover:bg-white transition-colors">
                                <Facebook size={20} fill="currentColor" strokeWidth={0} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-black hover:bg-white transition-colors">
                                <Twitter size={20} fill="currentColor" strokeWidth={0} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-black hover:bg-white transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Right: Collaboration & Enquiry */}
                    <div className="flex flex-col gap-6 max-w-xl">
                        <p className="text-white text-lg font-medium leading-relaxed">
                            Looking for collaboration? Send an email to <a href="mailto:feedback@impresario.in" className="text-gray-400 hover:text-white transition-colors">feedback@impresario.in</a> for enquires.
                        </p>

                        <button className="w-fit px-8 py-3 border border-white rounded-full text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center gap-2 group">
                            SEND ENQUIRY
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-800 mb-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 text-[10px] text-gray-500 font-medium uppercase tracking-wide">
                    {/* Left: Address & Links */}
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <p>© Impresario Entertainment & Hospitality Private Limited</p>
                            <p>American Express Bakery House, 1st Floor, Mirza Galib Rd, Byculla West, Mumbai, Maharashtra 400008.</p>
                        </div>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white transition-colors">All Rights Reserved</a>
                            <span className="text-gray-700">|</span>
                            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                            <span className="text-gray-700">|</span>
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        </div>
                    </div>

                    {/* Right: Credits */}
                    <div className="flex items-center gap-1">
                        <Heart size={10} fill="currentColor" />
                        <span>ClickTap Tech</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
