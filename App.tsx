import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Professionals from './components/Professionals';
import Hours from './components/Hours';
import Therapies from './components/Therapies';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Professionals />
        <Therapies />
        <Gallery />
        <Testimonials />
        <Hours />
        <BookingForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;