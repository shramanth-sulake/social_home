import React from 'react';

const TaglineStrip = () => {
    return (
        <div className="w-full bg-[#1a1a1a] py-8 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">
                <span className="text-accent text-xs md:text-sm font-bold tracking-widest uppercase mb-1">
                    INDIA'S FAVOURITE PLACE TO CHILL
                </span>
                <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold tracking-wider uppercase" style={{ fontFamily: 'stencil, sans-serif' }}>
                    CAFÉ | COLLABORATIVE WORKSPACE | BAR
                </h2>
            </div>
        </div>
    );
};

export default TaglineStrip;
