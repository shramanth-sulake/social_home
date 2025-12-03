import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LocationsSection = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const cities = [
        'All', 'Bengaluru', 'Chandigarh', 'Dehradun', 'Delhi', 'Hyderabad', 'Indore', 'Kolkata', 'Lucknow', 'Mumbai', 'Pune'
    ];

    const locations = [
        { name: 'Connaught Place SOCIAL', city: 'Delhi', logoText: 'CONNAUGHT PLACE' },
        { name: 'E-city SOCIAL', city: 'Bengaluru', logoText: 'E-CITY' },
        { name: 'Hazratganj SOCIAL', city: 'Lucknow', logoText: 'HAZRATGANJ' },
        { name: 'Rajouri Garden SOCIAL', city: 'Delhi', logoText: 'RAJOURI GARDEN' },
        { name: 'antiSOCIAL Mumbai', city: 'Mumbai', logoText: 'antiSOCIAL', isAnti: true },
        { name: 'Bellandur SOCIAL', city: 'Bengaluru', logoText: 'BELLANDUR' },
        { name: 'JP Nagar SOCIAL', city: 'Bengaluru', logoText: 'JP NAGAR' },
        { name: 'Koregaon Park SOCIAL', city: 'Pune', logoText: 'KOREGAON PARK' },
        { name: 'F.C. Road SOCIAL', city: 'Pune', logoText: 'F.C. ROAD' },
        { name: 'Viman Nagar SOCIAL', city: 'Pune', logoText: 'VIMAN NAGAR' },
        { name: 'Elante SOCIAL', city: 'Chandigarh', logoText: 'ELANTE' },
        { name: 'Sector 7 SOCIAL', city: 'Chandigarh', logoText: 'SECTOR-7' },
    ];

    const filteredLocations = activeFilter === 'All'
        ? locations
        : locations.filter(loc => loc.city === activeFilter);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="w-full bg-black py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <span className="text-accent text-sm font-bold tracking-widest uppercase block mb-2">
                        FIND US
                    </span>
                    <h2 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-wider mb-8" style={{ fontFamily: 'stencil, sans-serif' }}>
                        LOCATIONS
                    </h2>
                    <div className="border-b border-white w-full max-w-2xl mx-auto mb-12"></div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {cities.map((city) => (
                            <button
                                key={city}
                                onClick={() => setActiveFilter(city)}
                                className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${activeFilter === city
                                    ? 'bg-accent text-black'
                                    : 'bg-[#2a2a2a] text-gray-400 hover:bg-gray-700'
                                    }`}
                            >
                                {city}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Locations Grid */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {filteredLocations.map((loc, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col group cursor-pointer"
                            variants={itemVariants}
                        >
                            {/* White Logo Square */}
                            <div className="bg-white aspect-square rounded-xl flex items-center justify-center p-4 mb-4 transition-transform duration-300 group-hover:-translate-y-1">
                                <div className="text-center">
                                    {loc.isAnti ? (
                                        <div className="border-2 border-green-500 p-1">
                                            <span className="text-green-500 font-bold text-lg leading-none block">antiSOCIAL</span>
                                            <span className="text-green-500 text-[10px] font-bold tracking-widest block">MUMBAI</span>
                                        </div>
                                    ) : (
                                        <>
                                            <span className="text-accent font-bold text-sm md:text-base leading-tight block uppercase" style={{ fontFamily: 'stencil, sans-serif' }}>
                                                {loc.logoText}
                                            </span>
                                            <span className="text-accent font-bold text-xl md:text-2xl leading-none block uppercase" style={{ fontFamily: 'stencil, sans-serif' }}>
                                                S[#]CIAL
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Text Below */}
                            <div className="text-left">
                                <h3 className="text-white text-sm font-bold leading-tight mb-1">
                                    {loc.name}
                                </h3>
                                <p className="text-[#a0522d] text-xs font-bold uppercase">
                                    {loc.city}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default LocationsSection;
