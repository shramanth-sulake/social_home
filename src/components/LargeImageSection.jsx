import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LargeImageSection = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const images = [
        "/images/1.jpg",
        "/images/VK-3.jpg",
        "/images/5.webp",
        "/images/6.webp",
        "/images/7.webp",
        "/images/8.webp",
        "/images/9.webp",
        "/images/10.webp",
        "/images/11.webp",
        "/images/12.webp"
    ];

    const imageIndex = Math.abs(page % images.length);

    // Auto-play functionality
    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 3000); // Change slide every 3 seconds

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
        <section className="w-full bg-black">
            {/* Carousel Container */}
            <div className="w-full h-[600px] md:h-[800px] relative overflow-hidden group">
                {/* Slides */}
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={page}
                        src={images[imageIndex]}
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
                            src={images[imageIndex]}
                            alt={`Social Slide ${imageIndex + 1}`}
                            className="w-full h-full object-contain md:object-cover pointer-events-none"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                    onClick={() => paginate(-1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-accent text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 cursor-pointer z-10"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={40} />
                </button>

                <button
                    onClick={() => paginate(1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-accent text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 cursor-pointer z-10"
                    aria-label="Next slide"
                >
                    <ChevronRight size={40} />
                </button>

                {/* Dots Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                    {images.map((_, index) => (
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
