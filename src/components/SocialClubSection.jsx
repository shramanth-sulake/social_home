import React from 'react';

const SocialClubSection = () => {
    return (
        <section className="w-full bg-black">
            <div className="w-full flex flex-col lg:flex-row h-auto lg:h-96">
                {/* Left Placeholder */}
                <div className="w-full lg:w-1/2 h-64 lg:h-auto bg-gray-800 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-700">
                    <span className="text-white text-2xl font-bold uppercase tracking-widest">
                        this is left
                    </span>
                </div>

                {/* Right Placeholder */}
                <div className="w-full lg:w-1/2 h-64 lg:h-auto bg-gray-800 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold uppercase tracking-widest">
                        this is right
                    </span>
                </div>
            </div>
        </section>
    );
};

export default SocialClubSection;
