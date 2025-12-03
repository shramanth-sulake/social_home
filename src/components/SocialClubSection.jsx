
import React from 'react';
import { Star } from 'lucide-react';

const SocialClubSection = () => {
    return (
        <section className="w-full bg-black">
            <div className="w-full flex flex-col lg:flex-row h-auto lg:h-[500px]">
                {/* Left Video Section */}
                <div className="w-full lg:w-1/2 h-64 lg:h-auto bg-gray-800 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-700 relative overflow-hidden">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/vkvegNh4jYg?si=ScZgQf8z8z8z8z8z"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                    ></iframe>
                </div>

                {/* Right Content Section */}
                <div className="w-full lg:w-1/2 bg-[#221f20] flex flex-col justify-center px-8 py-12 lg:px-16">
                    <div className="max-w-lg">
                        {/* Loyalty Program Label */}
                        <h3 className="text-[#ff6600] text-lg font-bold tracking-wider mb-2 uppercase">
                            Loyalty Program
                        </h3>

                        {/* Title with Star */}
                        {/* Title with Star */}
                        <div className="flex items-center mb-6 whitespace-nowrap">
                            <h2 className="text-white text-4xl lg:text-6xl font-black uppercase tracking-tight leading-none" style={{ fontFamily: 'stencil, sans-serif' }}>
                                The S[
                            </h2>
                            <div className="relative flex items-center justify-center mx-1">
                                <Star className="w-8 h-8 lg:w-10 lg:h-10 text-white fill-white" />
                                <span className="absolute text-black font-bold text-[10px] lg:text-xs">★</span>
                            </div>
                            <h2 className="text-white text-4xl lg:text-6xl font-black uppercase tracking-tight leading-none" style={{ fontFamily: 'stencil, sans-serif' }}>
                                ]cial Club
                            </h2>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-600 mb-6"></div>

                        {/* Description */}
                        <p className="text-white text-lg lg:text-xl mb-2">
                            The ultimate loyalty program that never disappoints.
                        </p>
                        <p className="text-white text-lg lg:text-xl mb-8">
                            Get exclusive rewards every time you visit your neighbourhood hangout place!
                        </p>

                        {/* Button */}
                        <button className="bg-[#1a1a1a] text-white px-8 py-4 rounded-full font-bold tracking-wider hover:bg-white hover:text-black transition-colors uppercase text-sm border border-gray-800">
                            Explore Program
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialClubSection;
