import React from 'react';

const SocialPagesSection = () => {
    const pages = [
        {
            title: '@SOCIALOFFLINE',
            description: 'The instagram page with every fun update about your cretive neighbourhood place.',
            buttonText: 'FOLLOW THE PAGE',
        },
        {
            title: '@LIVE.AT.SOCIAL',
            description: 'The instagram page to keep tabs on all upcoming events & gigs.',
            buttonText: 'FOLLOW THE PAGE',
        },
        {
            title: 'WHATSAPP COMMUNITIES',
            description: 'Our WhatsApp Community Channel will help you keep a closer eye on EVERYTHING SOCIAL!',
            buttonText: 'JOIN THE CHANNEL',
        },
    ];

    return (
        <section className="w-full bg-black py-32 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-accent text-base font-bold tracking-widest uppercase block mb-2">
                        FOLLOW US
                    </span>
                    <h2 className="text-white text-5xl md:text-6xl font-bold uppercase tracking-wider" style={{ fontFamily: 'stencil, sans-serif' }}>
                        SOCIAL PAGES
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pages.map((page, index) => (
                        <div key={index} className="bg-black border border-gray-700 rounded-xl p-8 flex flex-col items-center text-center h-full hover:border-accent transition-colors duration-300">
                            <h3 className="text-accent text-2xl md:text-3xl font-bold mb-6 tracking-wide" style={{ fontFamily: 'stencil, sans-serif' }}>
                                {page.title}
                            </h3>
                            <p className="text-white text-base leading-relaxed mb-8 flex-grow max-w-xs">
                                {page.description}
                            </p>
                            <button className="bg-[#2a2a2a] text-white text-sm font-bold py-3 px-8 rounded-full uppercase tracking-wider hover:bg-accent transition-colors">
                                {page.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialPagesSection;
