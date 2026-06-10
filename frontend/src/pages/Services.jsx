import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Sun, Star, Compass, Heart, Eye, ArrowRight } from 'lucide-react';

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);

  const fullServices = [
    {
      title: 'Vastu Consultation',
      sub: 'Directions, Placements & Energy Corrections',
      desc: 'Vastu consultation balances the energy of your home or workplace environment. It provides guidance on directions, placements, and necessary corrections. These suggestions help create prosperity, peace, and overall well-being completely without demolition.',
      img: '/vastu_emerald.png',
      icon: <Sun size={22} />,
      list: [
        'Residential Vastu: Peaceful living & family well-being',
        'Office & Showroom Vastu: Enhanced sales & productivity',
        'Factory Vastu: Machinery alignment & operational safety',
        'School & College Vastu: Concentration & academic growth',
        'Hotel & Hospital Vastu: Fast healing & guest comfort'
      ]
    },
    {
      title: 'Numerology Consultation',
      sub: 'Vibrational Frequency & Lo Shu Grid',
      desc: 'Numerology helps you understand how numbers influence your life path and personality. It provides guidance for career, relationships, and financial decisions with deeper clarity, utilizing classic birth grid alignments.',
      img: '/numerology_emerald.png',
      icon: <Sparkles size={22} />,
      list: [
        'Name vibration tuning & correction',
        'Birth & Destiny numbers assessment',
        'Personal or corporate branding alignment',
        'Lucky dates, periods & cycle guides'
      ]
    },
    {
      title: 'Astrology Consultation',
      sub: 'Kundli Readings & Planetary Cures',
      desc: 'Astrology consultation analyzes your birth chart to understand life challenges and opportunities. It gives clear answers related to career, marriage, health, and personal growth. Effective remedies are suggested to reduce obstacles and bring positivity.',
      img: '/astrology_emerald.png',
      icon: <Compass size={22} />,
      list: [
        'Birth chart (Kundli) assessment',
        'Major period (Dasha) analysis',
        'Practical gemstone & elemental remedies',
        'Negative star alignment corrections'
      ]
    },
    {
      title: 'Tarot Reading',
      sub: 'Intuitive Insight & Future Paths',
      desc: 'Tarot reading offers intuitive insights into your present situation and future possibilities. It helps you find answers about love, career, emotions, and important life choices. The session brings clarity, confidence, and peaceful direction to your mind.',
      img: '/tarot_emerald.png',
      icon: <Eye size={22} />,
      list: [
        'Love & relationship emotional insights',
        'Career progression & timing answers',
        'Decision-making clarity guidance',
        'Mindfulness & spiritual grounding'
      ]
    },
    {
      title: 'Relationship Counselling',
      sub: 'Mutual Understanding & Connection',
      desc: 'Relationship counselling helps you improve understanding and emotional connection with your partner or family. It focuses on resolving conflicts, misunderstandings, and communication issues effectively.',
      img: '/relationship_emerald.png',
      icon: <Heart size={22} />,
      list: [
        'Couples communication mapping',
        'Resolving family grid conflicts',
        'Overcoming generational misunderstandings',
        'Deepening mutual trust & connection'
      ]
    }
  ];

  const activeService = fullServices[activeIdx];

  return (
    <div style={{ padding: '45px 20px 60px', maxWidth: '1280px', margin: '0 auto' }}>
      
      {/* Mystical Cosmic Header */}
      <section style={{ textAlign: 'center', marginBottom: '35px' }} className="reveal">
        <span style={{ color: 'var(--color-gold)', letterSpacing: '0.3em', fontSize: '0.8rem', fontWeight: 'bold' }}>THE DIVINE PATH</span>
        <h1 style={{ fontSize: '2.3rem', marginTop: '8px', marginBottom: '10px' }} className="gold-gradient-text">Our Divine Offerings</h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto', lineHeight: '1.7', fontSize: '0.95rem' }}>
          Explore professional, non-demolition consultations structured to align spaces, cosmic planets, numbers, and energies to invite success, peace, and abundance.
        </p>
      </section>

      {/* Main Interactive Showcase Board */}
      <div className="celestial-services-grid reveal">
        
        {/* Left Side: Elegant Selector Menu */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '12px' 
        }}>
          {fullServices.map((service, index) => {
            const isActive = activeIdx === index;
            return (
              <button
                key={index}
                onClick={() => setActiveIdx(index)}
                style={{
                  background: isActive ? 'linear-gradient(90deg, rgba(16, 185, 129, 0.08) 0%, var(--bg-dark) 100%)' : 'var(--bg-dark)',
                  border: isActive ? '1px solid var(--color-gold)' : '1px solid var(--border-glass)',
                  padding: '12px 16px',
                  boxShadow: isActive ? '0 4px 15px rgba(16, 185, 129, 0.08)' : 'none',
                }}
                className="selector-tab"
              >
                {/* Active side indicator */}
                {isActive && (
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '3px',
                    backgroundColor: 'var(--color-gold)'
                  }} />
                )}

                {/* Icon Wrapper */}
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: isActive ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                  border: isActive ? '1px solid var(--color-gold)' : '1px solid var(--border-glass)',
                  color: isActive ? 'var(--color-gold)' : 'var(--text-muted)',
                  transition: 'all 0.3s'
                }}>
                  {service.icon}
                </div>

                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    fontSize: '0.95rem', 
                    margin: 0, 
                    color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: isActive ? '600' : '400',
                    transition: 'all 0.3s'
                  }}>
                    {service.title}
                  </h3>
                  <span style={{ 
                    fontSize: '0.7rem', 
                    color: isActive ? 'var(--color-gold)' : 'rgba(148, 163, 184, 0.6)',
                    marginTop: '3px',
                    display: 'block'
                  }}>
                    {service.sub.split(' & ')[0]}
                  </span>
                </div>

                <ArrowRight 
                  size={14} 
                  style={{ 
                    color: isActive ? 'var(--color-gold)' : 'rgba(255, 255, 255, 0.1)',
                    transform: isActive ? 'translateX(0)' : 'translateX(-5px)',
                    transition: 'all 0.3s'
                  }} 
                />
              </button>
            );
          })}
        </div>

        {/* Right Side: The Sanctuary Active Feature Board */}
        <div 
          key={activeIdx} /* Re-render dynamically to trigger intro CSS animations */
          className="celestial-board"
        >
          {/* Active Detail Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', height: '100%', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.15em', fontWeight: 'bold' }}>
                  {activeService.sub.toUpperCase()}
                </span>
              </div>
              <h2 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', marginTop: '6px', color: 'var(--text-primary)' }}>
                {activeService.title}
              </h2>
              <div style={{ width: '50px', height: '2px', backgroundColor: 'var(--color-gold)', margin: '10px 0' }}></div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.7' }}>
                {activeService.desc}
              </p>
            </div>

            {/* Scope / Deliverables list */}
            <div>
              <h4 style={{ color: 'var(--color-gold)', fontSize: '0.85rem', marginBottom: '8px', letterSpacing: '0.05em' }}>
                Scope & Specialized Offerings
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {activeService.list.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                    <Star size={8} style={{ color: 'var(--color-gold)', marginTop: '4px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA action */}
            <div style={{ marginTop: '10px' }}>
              <Link to="/booking" className="cosmic-button" style={{ width: '100%', justifyContent: 'center', padding: '10px 20px', fontSize: '0.85rem' }}>
                Book Your {activeService.title}
              </Link>
            </div>
          </div>

          {/* Active Artwork Column (Sized properly to display the artwork in full glory) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', height: '100%', justifyContent: 'center' }}>
            <div style={{ 
              borderRadius: '16px', 
              overflow: 'hidden', 
              border: '2px solid rgba(16, 185, 129, 0.3)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(16, 185, 129, 0.1)',
              background: 'var(--bg-dark)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              aspectRatio: '1/1',
              width: '100%'
            }}>
              <img 
                src={activeService.img} 
                alt={activeService.title} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain', /* Preserves full image without any crop */
                  transition: 'all 0.5s ease',
                  padding: '8px'
                }} 
              />
            </div>
            <span style={{ 
              textAlign: 'center', 
              color: 'var(--text-muted)', 
              fontSize: '0.75rem', 
              fontStyle: 'italic',
              letterSpacing: '0.05em'
            }}>
              Official Celestial Artwork for {activeService.title}
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}

