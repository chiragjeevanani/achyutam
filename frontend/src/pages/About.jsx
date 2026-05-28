import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, ShieldAlert, Award, Compass, Sparkles, Star, Check } from 'lucide-react';

export default function About() {
  return (
    <div style={{ padding: '45px 20px 60px', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* 1. Header Section */}
      <section style={{ textAlign: 'center', padding: '0 0 20px' }} className="reveal">
        <span style={{ color: 'var(--color-gold)', letterSpacing: '0.2em', fontSize: '0.8rem', fontWeight: 'bold' }}>COSMIC JOURNEY</span>
        <h1 style={{ fontSize: '2.3rem', marginTop: '10px', marginBottom: '15px' }} className="gold-gradient-text">About Uppasna Keshwani</h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto', lineHeight: '1.7', fontSize: '0.95rem' }}>
          Meet the founder of Achyutam Maestro—a professional Vastu, Numerology, and Astrology consultant transforming lives across residences, commercial offices, and industrial hubs.
        </p>
      </section>

      {/* 2. Main Profile Spotlight */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center', padding: '30px 0' }}>
        
        <div className="reveal-left">
          <div className="glass-panel" style={{ padding: '10px', border: '1px solid var(--border-active)' }}>
            <img 
              src="https://achyutammaestro.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-28-at-11.10.03-AM-1.jpeg" 
              alt="Uppasna Keshwani Profile" 
              style={{ width: '100%', borderRadius: '12px', height: '420px', objectFit: 'cover' }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }} className="reveal-right">
          <span style={{ color: 'var(--color-gold)', letterSpacing: '0.1em', fontSize: '0.8rem', fontWeight: 'bold' }}>FOUNDER PROFILE</span>
          <h2 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)' }}>Uppasna Keshwani</h2>
          <span style={{ fontSize: '0.8rem', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '-10px' }}>
            Professional Vastu, Numerology & Astrology Consultant
          </span>
          
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.7' }}>
            I truly believe in the miraculous powers of the nature. The entire universe is there to take care of all our needs and help us to live a healthy and prosperous life. I am a firm believer in the fact that there is something more that meets the eye. Some more powers of the nature, that lie hidden and come forth when no scientific theories can prove their existence.
          </p>
          
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.7' }}>
            With over <strong>20 years of diversified experience</strong> in Aviation, Hospitality, and Information Technology industries with global leaders like <strong>Kingfisher Airlines, Cyient Limited, and Alexandria Equities Management Company</strong>, I bridge ancient cosmic structures with logical scientific metrics.
          </p>
        </div>

      </section>

      {/* 3. Deep Dive: What I Do vs. What I Don't Do */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginTop: '40px' }}>
        
        {/* What I Do */}
        <div className="glass-panel reveal-left" style={{ padding: '24px 30px' }}>
          <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-gold)', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Sparkles size={18} /> What I Do
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ display: 'flex', gap: '10px' }}>
              <div style={{ color: 'var(--color-gold)', marginTop: '3px' }}><Check size={14} /></div>
              <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: 'var(--text-primary)' }}>
                <strong>Vastu & Earth Energy:</strong> Balance houses, offices, and factories by studying earth energy networks completely without demolition.
              </p>
            </li>
            <li style={{ display: 'flex', gap: '10px' }}>
              <div style={{ color: 'var(--color-gold)', marginTop: '3px' }}><Check size={14} /></div>
              <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: 'var(--text-primary)' }}>
                <strong>Numerology Alignment:</strong> Map birth dates and corrections for name tuning, corporate titles, or branding flow using classic Lo Shu Grids.
              </p>
            </li>
            <li style={{ display: 'flex', gap: '10px' }}>
              <div style={{ color: 'var(--color-gold)', marginTop: '3px' }}><Check size={14} /></div>
              <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: 'var(--text-primary)' }}>
                <strong>Astrology Guidance:</strong> Conduct detailed horoscope and Kundli readings focusing on planetary periods and remedies.
              </p>
            </li>
          </ul>
        </div>

        {/* What I Don't Do */}
        <div className="glass-panel reveal-right" style={{ padding: '24px 30px' }}>
          <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: '#ef4444', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldAlert size={18} style={{ color: '#ef4444' }} /> What I Don't Do
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ display: 'flex', gap: '10px' }}>
              <div style={{ color: '#ef4444', marginTop: '3px' }}><Check size={14} /></div>
              <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: 'var(--text-primary)' }}>
                <strong>No Major Demolitions:</strong> We avoid recommending structural breakdowns or architectural rebuilds in 98% of Vastu cases.
              </p>
            </li>
            <li style={{ display: 'flex', gap: '10px' }}>
              <div style={{ color: '#ef4444', marginTop: '3px' }}><Check size={14} /></div>
              <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: 'var(--text-primary)' }}>
                <strong>No Forced Remedies:</strong> We do not advocate for expensive planetary symbols or forced prescriptions. All solutions are logical.
              </p>
            </li>
            <li style={{ display: 'flex', gap: '10px' }}>
              <div style={{ color: '#ef4444', marginTop: '3px' }}><Check size={14} /></div>
              <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: 'var(--text-primary)' }}>
                <strong>No Superstitions:</strong> Our processes are scientific energy alignments backed by structural geometry.
              </p>
            </li>
          </ul>
        </div>

      </section>

      {/* 4. My Journey Section */}
      <section className="glass-panel reveal-scale" style={{ padding: '30px', marginTop: '40px' }}>
        <span style={{ color: 'var(--color-gold)', letterSpacing: '0.15em', fontSize: '0.75rem', fontWeight: 'bold', display: 'block', textAlign: 'center', marginBottom: '8px' }}>THE PATH OF ALIGNMENT</span>
        <h2 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', textAlign: 'center', marginBottom: '30px' }}>My Journey</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'center' }}>
          {/* Journey Image Column */}
          <div style={{ 
            borderRadius: '16px', 
            overflow: 'hidden', 
            border: '2px solid rgba(223, 169, 90, 0.3)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), 0 0 15px rgba(223, 169, 90, 0.05)',
            background: '#070913',
            width: '100%',
            aspectRatio: '4/3'
          }}>
            <img 
              src="https://achyutammaestro.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-28-at-11.10.04-AM.jpeg" 
              alt="Uppasna Keshwani - My Journey" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Journey Text Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'left' }}>
            <h4 style={{ color: 'var(--color-gold)', fontSize: '0.95rem', margin: 0, fontFamily: 'var(--font-sans)', fontWeight: '600' }}>
              Professional Vastu, Numerology & Astrology Consultant
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7', margin: 0 }}>
              With over 20 years of diversified experience in Aviation, Hospitality, and Information Technology industries with global leaders like Kingfisher Airlines, Cyient Limited, and Alexandria Equities Management Company, Uppasna is a successful figure during the course of her journey performing her duties very effectively.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7', margin: 0 }}>
              Uppasna has a great sense of judgment and patience that comes from her initial start of career as an Cabin Crew, followed by a progressive career in the Real Estate Industry where she managed people and business with singular responsibilities. She is an excellent networker and possesses the quality of simplicity with brains.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7', margin: 0 }}>
              Uppasna is MBA by qualification and thoroughly enjoys her working for social and professional reasons, bridging corporate strategy with elemental cosmic geometry.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.7', margin: 0 }}>
              Her years of learning practice, mentoring, and guiding hundreds of clients through Vastu shifts, balanced numbers, and Astrology remedies make her calculations unparalleled. Her attention to detail has built a legacy of reliance and success.
            </p>
            <div style={{ marginTop: '10px' }}>
              <Link to="/booking" className="cosmic-button" style={{ fontSize: '0.8rem', padding: '10px 20px' }}>Book Call with Uppasna Ji</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
