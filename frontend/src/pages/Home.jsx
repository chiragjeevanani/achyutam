import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Sun, Star, Award, Compass, ChevronRight, Check, AlertCircle, Quote } from 'lucide-react';

export default function Home() {
  const [compassAngle, setCompassAngle] = useState(0);
  const [calibrated, setCalibrated] = useState(false);

  const rotateCompass = () => {
    const nextAngle = compassAngle + 90;
    setCompassAngle(nextAngle);
    if (nextAngle >= 360) {
      setCalibrated(true);
    }
  };

  const steps = [
    {
      num: '01',
      title: 'Energy Mapping',
      desc: 'We map the precise directional layout of your premises against the cosmic horoscope coordinates of the primary resident.'
    },
    {
      num: '02',
      title: 'No-Demolition Balancing',
      desc: 'Imbalances are rectified using natural colors, specific metal rods, or celestial crystals. 0% structural changes required.'
    },
    {
      num: '03',
      title: 'Progressive Remedies',
      desc: 'We introduce subtle remedies and personal name corrections to align the environment’s frequency with supportive forces.'
    }
  ];

  const benefits = [
    '100% Scientific directional mapping',
    'Custom-tailored Lo Shu grid numerology analysis',
    'Practical, modern Vastu guidelines (0% demolition)',
    'Experienced consulting with direct remote guidance'
  ];

  return (
    <div style={{ padding: '45px 20px 40px', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* 1. Hero Section */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center', minHeight: '80vh', padding: '0 0 40px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }} className="reveal-left">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '20px', background: 'rgba(223, 169, 90, 0.1)', border: '1px solid rgba(223, 169, 90, 0.2)', width: 'fit-content' }}>
            <Sparkles size={14} style={{ color: 'var(--color-gold)' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.1em', color: 'var(--color-gold)' }}>CELESTIAL HARMONY</span>
          </div>
          
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', lineHeight: '1.1', fontWeight: '800' }}>
            <span className="gold-gradient-text">Achyutam Maestro</span><br />
            Transforming Spaces & Destiny
          </h1>
          
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '500px' }}>
            Unlock peace, wealth, and abundance through logical, scientific Vastu alignments and supportive numerological frequency corrections.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '10px' }}>
            <Link to="/contact" className="cosmic-button">
              Book a Consultation <ChevronRight size={18} />
            </Link>
            <a href="#compass" className="gold-button">
              Align Your Compass
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }} className="reveal-right">
          <div className="glass-panel" style={{ width: '100%', maxWidth: '440px', overflow: 'hidden', padding: '12px', border: '1px solid var(--border-active)' }}>
            <img 
              src="https://achyutammaestro.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-28-at-11.29.57-AM-2.jpeg" 
              alt="Achyutam Maestro Hero" 
              style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', height: '480px' }}
            />
          </div>
        </div>
      </section>

      {/* 2. Interactive Compass Tool Section */}
      <section id="compass" style={{ padding: '80px 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }} className="reveal-left">
          <div 
            className="compass-container" 
            onClick={rotateCompass}
            style={{ transform: `scale(${window.innerWidth < 480 ? 0.8 : 1})` }}
          >
            <div className="compass-wheel" style={{ transform: `rotate(${compassAngle}deg)` }}>
              <div className="compass-arrow"></div>
              <span className="direction-label" style={{ top: '12px', fontWeight: 'bold' }}>N</span>
              <span className="direction-label" style={{ bottom: '12px', fontWeight: 'bold' }}>S</span>
              <span className="direction-label label-east">E</span>
              <span className="direction-label label-west">W</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }} className="reveal-right">
          <span style={{ color: 'var(--color-gold)', letterSpacing: '0.15em', fontSize: '0.8rem', fontWeight: 'bold' }}>INTERACTIVE STABILITY</span>
          <h2 style={{ fontSize: '2.2rem' }} className="gold-gradient-text">Test Your Energy Direction</h2>
          
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7' }}>
            Our universe works through direct currents. Click the compass on the left to rotate and align the spatial flow. In ancient sciences, even a deviation of 5° can trigger negative blockages.
          </p>

          <div style={{ padding: '20px', borderRadius: '12px', background: 'rgba(223, 169, 90, 0.05)', border: '1px dashed var(--color-gold)' }}>
            {calibrated ? (
              <p style={{ color: 'var(--color-gold)', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600' }}>
                <Check size={20} /> Vastu Energy Flow Fully Calibrated!
              </p>
            ) : (
              <p style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <AlertCircle size={20} style={{ color: 'var(--color-gold)' }} /> Tap the compass to calibrate space flow (rotate 360°).
              </p>
            )}
          </div>
        </div>
      </section>

      {/* 3. Detailed 3-Step Methodology */}
      <section style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }} className="reveal">
          <span style={{ color: 'var(--color-gold)', letterSpacing: '0.2em', fontSize: '0.8rem', fontWeight: 'bold' }}>METHODOLOGY</span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '10px' }} className="gold-gradient-text">Our Three-Step Scientific Flow</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {steps.map((st, index) => (
            <div key={index} className={`glass-panel reveal delay-${(index + 1) * 100}`} style={{ padding: '40px 30px', display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-10px', right: '10px', fontSize: '5rem', fontWeight: '900', color: 'rgba(255,255,255,0.02)', fontFamily: 'var(--font-serif)' }}>
                {st.num}
              </div>
              <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', zIndex: 1 }}>{st.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', zIndex: 1 }}>{st.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Why Us & Beautiful Stats */}
      <section style={{ padding: '80px 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }} className="reveal-left">
          <span style={{ color: 'var(--color-gold)', letterSpacing: '0.2em', fontSize: '0.8rem', fontWeight: 'bold' }}>TRUST PRINCIPLES</span>
          <h2 style={{ fontSize: '2.2rem' }} className="gold-gradient-text">Why Align With Us?</h2>
          
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7' }}>
            We provide clear, practical guides that adapt Vastu and Numerology principles to contemporary living standards.
          </p>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {benefits.map((ben, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-primary)' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(223, 169, 90, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--color-gold)' }}>
                  <Check size={10} style={{ color: 'var(--color-gold)' }} />
                </div>
                <span>{ben}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="reveal-right">
          <div className="glass-panel" style={{ padding: '30px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2.5rem', color: 'var(--color-gold)', fontFamily: 'var(--font-serif)' }}>98%</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '8px' }}>Harmony Success Rate</p>
          </div>
          <div className="glass-panel" style={{ padding: '30px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2.5rem', color: 'var(--color-gold)', fontFamily: 'var(--font-serif)' }}>0%</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '8px' }}>Construction Demolitions</p>
          </div>
          <div className="glass-panel" style={{ padding: '30px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2.5rem', color: 'var(--color-gold)', fontFamily: 'var(--font-serif)' }}>12+</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '8px' }}>Directions Balanced</p>
          </div>
          <div className="glass-panel" style={{ padding: '30px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2.5rem', color: 'var(--color-gold)', fontFamily: 'var(--font-serif)' }}>1500+</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '8px' }}>Homes & Offices Cured</p>
          </div>
        </div>
      </section>

      {/* 5. Highlight Testimonial Spotlight */}
      <section style={{ padding: '80px 0' }} className="reveal-scale">
        <div className="glass-panel" style={{ padding: '50px 40px', position: 'relative', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center', textAlign: 'center' }}>
          <Quote size={40} style={{ color: 'rgba(223, 169, 90, 0.2)' }} />
          <p style={{ fontSize: '1.25rem', lineHeight: '1.7', fontStyle: 'italic', maxWidth: '800px', color: 'var(--text-primary)' }}>
            "Through your guidance in Vastu, Astrology, and Numerology, I not only received the right direction but also gained confidence and mental peace. Your suggestions led to absolute clarity, balance, and positive changes in my life."
          </p>
          <div>
            <h4 style={{ fontSize: '1.15rem', color: 'var(--color-gold)', fontFamily: 'var(--font-serif)' }}>POOJA KASHYAP</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>Client & Testimony</p>
          </div>
          <Link to="/testimonials" className="gold-button">
            Read More Reviews
          </Link>
        </div>
      </section>

      {/* 6. High-Converting CTA */}
      <section style={{ padding: '60px 0', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }} className="reveal">
        <h2 style={{ fontSize: '2.5rem' }} className="gold-gradient-text">Ready to Align Your Life?</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '500px', lineHeight: '1.6' }}>
          Take the first step towards a balanced environment. Request your directional mapping consult today.
        </p>
        <Link to="/contact" className="cosmic-button" style={{ fontSize: '1.1rem', padding: '14px 36px' }}>
          Schedule Consultation Now <ChevronRight size={20} />
        </Link>
      </section>

    </div>
  );
}
