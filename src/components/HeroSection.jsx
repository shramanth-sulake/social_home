import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 3;

    // Auto-play functionality
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, [totalSlides]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <section className="w-full flex flex-col bg-black">
            {/* Carousel Container */}
            <div className="w-full px-12 py-20">
                <div className="w-full h-[500px] md:h-[600px] relative bg-black overflow-hidden group rounded-[2rem]">
                    {/* Slides */}
                    <div
                        className="w-full h-full flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {[...Array(totalSlides)].map((_, index) => (
                            <div key={index} className="w-full h-full flex-shrink-0 bg-gray-800 flex items-center justify-center border-r border-gray-900 last:border-r-0">
                                <span className="text-gray-600 text-2xl font-bold uppercase tracking-widest">
                                    Slide {index + 1} Placeholder
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-accent text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 cursor-pointer z-10"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-accent text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 cursor-pointer z-10"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={32} />
                    </button>

                    {/* Dots Indicators */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {[...Array(totalSlides)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${currentSlide === index ? 'bg-accent' : 'bg-white/50 hover:bg-white'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Orange Banner Section */}
            <div className="w-full px-12 pb-20">
                <div className="w-full bg-accent py-8 overflow-hidden relative rounded-[2rem]">
                    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                        {/* 10 Years Logo Placeholder */}
                        <div className="relative border-4 border-black/20 p-4 rotate-[-2deg]">
                            <div className="text-black/80 font-black text-5xl md:text-6xl leading-none text-center uppercase tracking-tighter" style={{ fontFamily: 'stencil, sans-serif' }}>
                                10<br />YEARS
                            </div>
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-black font-bold text-xl md:text-2xl" style={{ fontFamily: 'cursive' }}>
                                OF SOCIAL
                            </div>
                        </div>

                        {/* We Are The Hood Text */}
                        <div className="text-center md:text-left">
                            <h2 className="text-[#f0e68c] text-4xl md:text-6xl font-bold uppercase tracking-wide leading-none" style={{ fontFamily: 'stencil, sans-serif', textShadow: '2px 2px 0px rgba(0,0,0,0.1)' }}>
                                WE ARE<br />
                                THE HOOD
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
