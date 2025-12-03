import React from 'react';
import Navbar from './components/Navbar';
import TaglineStrip from './components/TaglineStrip';
import HeroSection from './components/HeroSection';
import SocialClubSection from './components/SocialClubSection';
import SocialPagesSection from './components/SocialPagesSection';
import LargeImageSection from './components/LargeImageSection';
import LocationsSection from './components/LocationsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative z-10 bg-black">
        <Navbar />
        <TaglineStrip />
        <HeroSection />
        <SocialClubSection />
        <SocialPagesSection />
        <LargeImageSection />
        <LocationsSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
