import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Yogadhan from './pages/Yogadhan';
import Booking from './pages/Booking';
import Blog from './pages/Blog';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export default function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("idle"); // idle, entering, exiting

  const lenisRef = useRef(null);

  // Initialize Lenis Smooth Scroll globally
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.1,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Scroll to top on route change via Lenis
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage("entering");
      
      const timer1 = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("exiting");
      }, 600);

      const timer2 = setTimeout(() => {
        setTransitionStage("idle");
      }, 1200);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [location, displayLocation]);

  // Global Intersection Observer for Scroll Reveals
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.08
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Timeout to ensure DOM is fully painted after route transitions
    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      revealElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [displayLocation]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Dynamic Celestial Curtain Loader */}
      <div 
        className={`cosmic-curtain ${transitionStage === "entering" ? "active" : ""} ${transitionStage === "exiting" ? "exit" : ""}`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
          <div className="portal-ring"></div>
          <span style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', letterSpacing: '0.3em', fontSize: '1.1rem', animation: 'pulse 1.5s infinite alternate' }}>
            ACHYUTAM PORTAL
          </span>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <div style={{ flex: 1 }} className="page-transition-wrapper" key={displayLocation.pathname}>
        <Routes location={displayLocation}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/yogadhan" element={<Yogadhan />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />

      <style>{`
        @keyframes pulse {
          from { opacity: 0.4; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1.02); }
        }
      `}</style>
    </div>
  );
}
