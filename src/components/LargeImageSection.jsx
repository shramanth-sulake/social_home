import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const LargeImageSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 3;

    // Auto-play functionality
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(timer);
    }, [totalSlides]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <section className="w-full bg-black">
            {/* Carousel Container */}
            <div className="w-full h-[400px] md:h-[600px] relative overflow-hidden group">
                {/* Slides */}
                <div
                    className="w-full h-full flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {[...Array(totalSlides)].map((_, index) => (
                        <div key={index} className="w-full h-full flex-shrink-0 bg-gray-800 flex items-center justify-center border-r border-gray-900 last:border-r-0">
                            <span className="text-gray-600 text-3xl font-bold uppercase tracking-widest">
                                Large Image Slide {index + 1}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-accent text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 cursor-pointer z-10"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={40} />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-accent text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 cursor-pointer z-10"
                    aria-label="Next slide"
                >
                    <ChevronRight size={40} />
                </button>

                {/* Dots Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
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

            {/* Description Text */}
            <div className="w-full bg-black py-12 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed tracking-wide" style={{ fontFamily: 'stencil, sans-serif' }}>
                        SOCIAL is where work meets play, where mundane blends with the extraordinary and where conversations are free flowing. It’s a reflection of the passion, vibrance and energy that connects neighbourhoods across India.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LargeImageSection;
