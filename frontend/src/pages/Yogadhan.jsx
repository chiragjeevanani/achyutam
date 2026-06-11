import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Sparkles, Sun, Star, Award, ShieldAlert, Heart, Calendar } from 'lucide-react';

export default function Yogadhan() {
  const pillars = [
    {
      title: 'Earth Energy Grid',
      desc: 'Mapping subtle electromagnetic and telluric currents of the plot. By balancing natural planetary lines (invisible energy grids), we clean the spatial template.',
      icon: <Compass size={24} style={{ color: 'var(--color-gold)' }} />
    },
    {
      title: 'Vibrational Numerology',
      desc: 'Matching personal or business name frequencies to the DOB destiny grid. Alignment blocks natural energy bottlenecks, accelerating smooth financial cycles.',
      icon: <Sparkles size={24} style={{ color: 'var(--color-gold)' }} />
    },
    {
      title: 'Planetary Horoscope',
      desc: 'Looking into major/minor period star positions of the main resident. We place customized metal/color cures at high-frequency spatial hotspots.',
      icon: <Sun size={24} style={{ color: 'var(--color-gold)' }} />
    }
  ];

  return (
    <div style={{ padding: '45px 20px 40px', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* 1. Hero Section */}
      <section style={{ textAlign: 'center', padding: '0 0 20px' }} className="reveal">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '20px', background: 'rgba(129, 140, 248, 0.1)', border: '1px solid rgba(129, 140, 248, 0.2)', width: 'fit-content', margin: '0 auto 20px' }}>
          <Sparkles size={14} style={{ color: 'var(--color-purple)' }} />
          <span style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.1em', color: 'var(--color-purple)' }}>THE DIVINE SCIENCE</span>
        </div>
        <h1 style={{ fontSize: '2.3rem', marginBottom: '15px' }} className="gold-gradient-text">Yogadhan System</h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.7', fontSize: '0.95rem' }}>
          Yogadhan is an integrated, scientific method developed by Uppasna Keshwani. It unites ancient Vastu-Shastra, vibrational Numerology, and Horoscope Astrology into a single cohesive framework.
        </p>
      </section>
 
      {/* 2. Visual Split */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center', padding: '20px 0' }}>
        
        <div className="reveal-left">
          <div className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-gold)' }}>Why Yogadhan?</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>
              Standard Vastu often treats spaces in isolation. Yogadhan recognizes that a house is connected to the birth chart (Kundli) of its residents. If a resident's destiny numbers mismatch the home's primary direction, blockages occur.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>
              Our methodology rectifies this mismatch through logical, non-demolition energy balancing. By matching name numbers and planetary coordinates, Yogadhan creates an abundant ecosystem.
            </p>
          </div>
        </div>

        <div className="reveal-right" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="glass-panel" style={{ padding: '12px', border: '1px solid var(--border-active)' }}>
            <img 
              src="https://achyutammaestro.com/wp-content/uploads/2026/01/achyutham-logo.jpeg" 
              alt="Yogadhan Emblem" 
              style={{ width: '100%', maxWidth: '340px', borderRadius: '12px', height: 'auto' }}
            />
          </div>
        </div>

      </section>

      {/* 3. The Three Pillars of Yogadhan */}
      <section style={{ padding: '60px 0' }}>
        <h2 style={{ fontSize: '2.2rem', textAlign: 'center', marginBottom: '40px' }} className="gold-gradient-text">The Three Pillars</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {pillars.map((p, idx) => (
            <div key={idx} className="glass-panel reveal" style={{ padding: '45px 30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(217, 125, 100, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-glass)' }}>
                {p.icon}
              </div>
              <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)' }}>{p.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Contact Block */}
      <section className="glass-panel reveal-scale" style={{ padding: '60px 40px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <h2 style={{ fontSize: '2rem' }} className="gold-gradient-text">Calibrate Your Spatial Energies</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '550px', lineHeight: '1.6' }}>
          Unlock the powerful abundant frequency inside your personal workspace or home. Get a remote Yogadhan assessment directly.
        </p>
        <Link to="/contact" className="cosmic-button" style={{ marginTop: '10px' }}>
          <Calendar size={18} /> Book Yogadhan Consult
        </Link>
      </section>

    </div>
  );
}
