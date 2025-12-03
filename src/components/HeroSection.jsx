import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const slides = [
        {
            image: "/images/3.png",
            alt: "Social Offline Event 1"
        },
        {
            image: "/images/4.png",
            alt: "Social Offline Event 2"
        }
    ];

    const imageIndex = Math.abs(page % slides.length);

    // Auto-play functionality
    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, [page]);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    const variants = {
        enter: (direction) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0
            };
        }
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    return (
        <section className="w-full flex flex-col bg-black">
            {/* Carousel Container */}
            <div className="w-full px-4 py-8 md:px-12 md:py-20">
                <div className="w-full h-[300px] md:h-[600px] relative bg-black overflow-hidden group rounded-[1rem] md:rounded-[2rem]">
                    {/* Slides */}
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={page}
                            src={slides[imageIndex].image}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            className="absolute w-full h-full"
                        >
                            <img
                                src={slides[imageIndex].image}
                                alt={slides[imageIndex].alt}
                                className="w-full h-full object-contain md:object-cover pointer-events-none"
                            />
                            {/* Overlay gradient for better text visibility if needed */}
                            <div className="absolute inset-0 bg-black/10"></div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                        onClick={() => paginate(-1)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-accent text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 cursor-pointer z-10"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <button
                        onClick={() => paginate(1)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-accent text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 cursor-pointer z-10"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={32} />
                    </button>

                    {/* Dots Indicators */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    const direction = index > imageIndex ? 1 : -1;
                                    setPage([page + (index - imageIndex), direction]);
                                }}
                                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${imageIndex === index ? 'bg-accent' : 'bg-white/50 hover:bg-white'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Orange Banner Section */}
            <div className="w-full px-4 pb-8 md:px-12 md:pb-20">
                <div className="w-full bg-accent py-6 md:py-8 overflow-hidden relative rounded-[1rem] md:rounded-[2rem]">
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
