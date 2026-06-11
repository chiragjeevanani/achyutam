import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, Sparkles, Home, Bed, Coffee, Monitor, Coins, Heart, 
  CheckCircle, AlertCircle, ArrowUpRight, Calendar
} from 'lucide-react';

export default function VastuTips() {
  const [selectedDirection, setSelectedDirection] = useState('NE');

  const directionsData = {
    N: {
      name: 'North (Uttar)',
      deity: 'Kuber (Lord of Wealth)',
      element: 'Water (Jal)',
      focus: 'Career, Wealth, New Opportunities',
      dos: [
        'Place mirrors on the North wall to attract wealth.',
        'Keep this zone light, clean, and open.',
        'Decorate with blue, green, or water fountains.'
      ],
      donts: [
        'Avoid heavy furniture or storage in this zone.',
        'Never place a toilet or kitchen here.',
        'Do not use red or warm colors here.'
      ]
    },
    NE: {
      name: 'Northeast (Eeshan)',
      deity: 'Shiva / Supreme Divine',
      element: 'Water (Jal) / Ether',
      focus: 'Wisdom, Spirituality, Mental Peace',
      dos: [
        'Perfect place for a meditation or prayer (Pooja) room.',
        'Keep a bowl of fresh water with flowers.',
        'Ensure maximum windows to let in morning sunlight.'
      ],
      donts: [
        'Never place a toilet, kitchen, or septic tank here (major Vastu Dosha).',
        'Avoid storing heavy items or junk here.',
        'Do not build a bedroom in this corner.'
      ]
    },
    E: {
      name: 'East (Purva)',
      deity: 'Indra & Surya (Lord of Light)',
      element: 'Air / Wood (Vayu)',
      focus: 'Social Connections, Health, Recognition',
      dos: [
        'Ideal for main entrance or large windows.',
        'Place wooden decor items and green plants.',
        'Hang a brass emblem of the Sun on the East wall.'
      ],
      donts: [
        'Avoid blockages or high boundary walls that block morning sun.',
        'Do not place heavy metal cabinets or storage tanks here.',
        'Never place toilets in the direct East.'
      ]
    },
    SE: {
      name: 'Southeast (Agneya)',
      deity: 'Agni (Lord of Fire)',
      element: 'Fire (Agni)',
      focus: 'Cash Flow, Energy, Passion, Health',
      dos: [
        'The absolute best direction for the Kitchen (stove facing East).',
        'Place electrical appliances, boilers, and invertors here.',
        'Use colors like red, orange, pink, or warm shades.'
      ],
      donts: [
        'Avoid water tanks, sinks, or fountains in this zone.',
        'Do not build a toilet or a master bedroom here.',
        'Never use blue or black colors in this area.'
      ]
    },
    S: {
      name: 'South (Dakshin)',
      deity: 'Yama (Lord of Justice)',
      element: 'Fire / Earth',
      focus: 'Fame, Relaxation, Rest',
      dos: [
        'Build high walls and heavy structures in this zone.',
        'Ideal place for bedrooms or offices to ground your energy.',
        'Use wooden furniture and deep earth colors.'
      ],
      donts: [
        'Do not place borewells, water pumps, or underground tanks.',
        'Avoid placing main entrances facing South unless rectified.',
        'Do not leave this area empty or hollow.'
      ]
    },
    SW: {
      name: 'Southwest (Nairutya)',
      deity: 'Niruthi (Lord of Ancestors)',
      element: 'Earth (Prithvi)',
      focus: 'Stability, Master Bedroom, Relationships',
      dos: [
        'Best zone for the Master Bedroom (bed headboard towards South/West).',
        'Place heavy safes, wardrobes, and structural columns here.',
        'Keep the area elevated and solid.'
      ],
      donts: [
        'Never place a toilet or kitchen here; causes severe drain on stability.',
        'Avoid any water bodies, swimming pools, or underground tanks.',
        'Do not have large open windows or main doors here.'
      ]
    },
    W: {
      name: 'West (Paschim)',
      deity: 'Varuna (Lord of Water/Oceans)',
      element: 'Space / Metal (Akash)',
      focus: 'Gains, Profits, Child Prosperity',
      dos: [
        'Ideal for study rooms, dining areas, or overhead water tanks.',
        'Use white, grey, silver, or golden colors.',
        'Decorate with metal artifacts and circular shapes.'
      ],
      donts: [
        'Never construct a kitchen or fireplace in this direction.',
        'Do not keep extension cords or wires tangled here.',
        'Avoid low walls or large glass walls facing West without shading.'
      ]
    },
    NW: {
      name: 'Northwest (Vayavya)',
      deity: 'Vayu (Lord of Wind)',
      element: 'Air (Vayu)',
      focus: 'Support System, Legal Matters, Travel',
      dos: [
        'Great location for guest bedrooms, toilets, or storage.',
        'Ideal for finished goods storage or garage.',
        'Decorate with wind chimes, white crystals, and silver.'
      ],
      donts: [
        'Never place a master bedroom here (causes instability).',
        'Do not lock up valuable money assets here permanently.',
        'Avoid tall trees directly blocking the wind in this zone.'
      ]
    }
  };

  const categories = [
    {
      title: 'Entrance (Mahadwaar)',
      icon: <Home size={20} />,
      desc: 'The mouth of energy. The main door should ideally face North, East, or Northeast. Ensure it is well-lit, clean, and decorated with auspicious symbols like Swastika or Om.'
    },
    {
      title: 'Master Bedroom',
      icon: <Bed size={20} />,
      desc: 'Positioned in the Southwest for stability and good relationships. Sleep with your head pointing South or East. Avoid mirrors reflecting the sleeping bed.'
    },
    {
      title: 'The Kitchen (Rasoi)',
      icon: <Coffee size={20} />,
      desc: 'Represents the fire element. Ideally located in the Southeast. Cook facing East. Keep the sink (water) and stove (fire) as far apart as possible.'
    },
    {
      title: 'Wealth & Workspace',
      icon: <Monitor size={20} />,
      desc: 'Set up your cash locker or study table in the North or Southwest. Sit facing North or East while working to boost focus and manifest new financial opportunities.'
    }
  ];

  return (
    <div style={{ padding: '45px 20px 40px', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* 1. Hero Section */}
      <section style={{ textAlign: 'center', padding: '0 0 40px' }} className="reveal">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '20px', background: 'rgba(217, 125, 100, 0.1)', border: '1px solid rgba(217, 125, 100, 0.2)', width: 'fit-content', margin: '0 auto 20px' }}>
          <Sparkles size={14} style={{ color: 'var(--color-gold)' }} />
          <span style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.1em', color: 'var(--color-gold)' }}>HARMONIZE YOUR ENVIRONMENT</span>
        </div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }} className="gold-gradient-text">Ancient Vastu Tips</h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.7', fontSize: '0.95rem' }}>
          Explore practical, simple, and non-destructive Vastu Shastra principles to align your home and workplace with the five natural elements (Panchtattva) for health, wealth, and peace.
        </p>
      </section>

      {/* 2. Interactive Compass Section */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center', padding: '20px 0' }}>
        
        {/* Left column: Compass Wheel */}
        <div className="reveal-left" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '25px' }}>
          <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', textAlign: 'center' }}>
            Interactive Vastu Compass
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textAlign: 'center', maxWidth: '300px', marginTop: '-15px' }}>
            Click or tap a direction to view its cosmic influences, deities, and spatial recommendations.
          </p>

          <div style={{ position: 'relative', width: '300px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            
            {/* The outer circle */}
            <div style={{ 
              width: '280px', 
              height: '280px', 
              borderRadius: '50%', 
              border: '2px solid var(--color-gold)', 
              position: 'relative',
              background: 'var(--bg-card)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
            }}>
              
              {/* Dial ring lines */}
              <div style={{ 
                position: 'absolute', 
                width: '90%', 
                height: '90%', 
                borderRadius: '50%', 
                border: '1px dashed rgba(217, 125, 100, 0.25)',
                transform: `rotate(${
                  selectedDirection === 'N' ? 0 :
                  selectedDirection === 'NE' ? 45 :
                  selectedDirection === 'E' ? 90 :
                  selectedDirection === 'SE' ? 135 :
                  selectedDirection === 'S' ? 180 :
                  selectedDirection === 'SW' ? 225 :
                  selectedDirection === 'W' ? 270 : 315
                }deg)`,
                transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)'
              }}>
                {/* Pointer Arrow */}
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '0',
                  height: '0',
                  borderLeft: '8px solid transparent',
                  borderRight: '8px solid transparent',
                  borderBottom: '16px solid var(--color-gold)'
                }} />
              </div>

              {/* Inner details / Logo */}
              <div style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                background: 'var(--bg-dark)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid var(--border-glass)',
                zIndex: 2
              }}>
                <Compass size={24} style={{ color: 'var(--color-gold)', animation: 'portalSpin 20s linear infinite' }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--color-gold)', marginTop: '4px' }}>
                  {selectedDirection}
                </span>
              </div>

              {/* Direction buttons layout around the circle */}
              {Object.keys(directionsData).map((dir, idx) => {
                const angle = (idx * 45) - 90; // Align starting from North (top)
                const radius = 105; // Distance from center
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                const isSelected = selectedDirection === dir;

                return (
                  <button
                    key={dir}
                    onClick={() => setSelectedDirection(dir)}
                    style={{
                      position: 'absolute',
                      left: `calc(50% + ${x}px - 22px)`,
                      top: `calc(50% + ${y}px - 22px)`,
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: isSelected ? 'var(--color-gold)' : 'var(--bg-dark)',
                      border: `1px solid ${isSelected ? 'var(--color-gold)' : 'var(--border-glass)'}`,
                      color: isSelected ? '#fff' : 'var(--text-primary)',
                      fontWeight: 'bold',
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: isSelected ? '0 0 15px rgba(217, 125, 100, 0.4)' : 'none',
                      transition: 'all 0.3s ease',
                      zIndex: 3
                    }}
                    className="compass-btn"
                  >
                    {dir}
                  </button>
                );
              })}

            </div>
          </div>
        </div>

        {/* Right column: Selected Direction Vastu recommendations */}
        <div className="reveal-right">
          <div className="glass-panel" style={{ padding: '35px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-glass)', paddingBottom: '15px' }}>
              <div>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--color-gold)', letterSpacing: '0.1em' }}>Direction Analysis</span>
                <h2 style={{ fontSize: '1.6rem', color: 'var(--text-heading)', marginTop: '4px' }}>
                  {directionsData[selectedDirection].name}
                </h2>
              </div>
              <div style={{ padding: '8px 12px', background: 'rgba(217, 125, 100, 0.08)', borderRadius: '8px', border: '1px solid var(--border-glass)', fontSize: '0.85rem' }}>
                <strong>Element:</strong> {directionsData[selectedDirection].element}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', fontSize: '0.9rem' }}>
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>Governing Deity</span>
                <span style={{ fontWeight: '600' }}>{directionsData[selectedDirection].deity}</span>
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>Life Aspects</span>
                <span style={{ fontWeight: '600' }}>{directionsData[selectedDirection].focus}</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '10px' }}>
              <div>
                <h4 style={{ fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', marginBottom: '8px' }}>
                  <CheckCircle size={16} /> Recommended (Do's)
                </h4>
                <ul style={{ listStyleType: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {directionsData[selectedDirection].dos.map((item, idx) => (
                    <li key={idx} style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5', paddingLeft: '14px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#10b981' }}>•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '6px', color: '#ef4444', marginBottom: '8px' }}>
                  <AlertCircle size={16} /> Avoid (Don'ts)
                </h4>
                <ul style={{ listStyleType: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {directionsData[selectedDirection].donts.map((item, idx) => (
                    <li key={idx} style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5', paddingLeft: '14px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#ef4444' }}>•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* 3. Vastu by Room Categories */}
      <section style={{ padding: '60px 0' }}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '10px' }} className="gold-gradient-text">Room-by-Room Guidelines</h2>
        <p style={{ color: 'var(--text-muted)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px', fontSize: '0.9rem', lineHeight: '1.6' }}>
          Discover structural recommendations for primary locations inside your home to manifest a harmonious energetic flow.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {categories.map((cat, idx) => (
            <div key={idx} className="glass-panel reveal" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '15px', height: '100%' }}>
              <div style={{ 
                width: '42px', 
                height: '42px', 
                borderRadius: '10px', 
                background: 'rgba(217, 125, 100, 0.06)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                border: '1px solid var(--border-glass)',
                color: 'var(--color-gold)'
              }}>
                {cat.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)' }}>{cat.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Panchtattva Elements Section */}
      <section className="glass-panel reveal" style={{ padding: '40px 30px', display: 'flex', flexDirection: 'column', gap: '25px', marginBottom: '60px' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem' }} className="gold-gradient-text">Balancing The Panchtattva</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '650px', margin: '8px auto 0' }}>
            Vastu revolves around the alignment of five elements. Blockages in any element cause corresponding physical or emotional imbalances.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '15px', marginTop: '10px' }}>
          {[
            { name: 'Water (Jal)', zone: 'North & Northeast', color: 'Blue/Cyan', benefit: 'New opportunities, spiritual flow' },
            { name: 'Fire (Agni)', zone: 'Southeast & South', color: 'Red/Orange/Pink', benefit: 'Cash flow, vital force, digestion' },
            { name: 'Earth (Prithvi)', zone: 'Southwest', color: 'Yellow/Clay/Beige', benefit: 'Stability, safety, longevity' },
            { name: 'Air (Vayu)', zone: 'East & Northwest', color: 'Green/Brown', benefit: 'Networking, social trust, support' },
            { name: 'Space (Akash)', zone: 'West & Center', color: 'White/Grey/Silver', benefit: 'Mental clarity, expansiveness' }
          ].map((el, i) => (
            <div key={i} style={{ 
              background: 'rgba(255, 255, 255, 0.02)', 
              border: '1px solid var(--border-glass)', 
              borderRadius: '12px', 
              padding: '20px 15px', 
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}>
              <span style={{ fontWeight: 'bold', color: 'var(--text-heading)', fontFamily: 'var(--font-serif)', fontSize: '1.05rem' }}>{el.name}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-gold)' }}>{el.zone}</span>
              <div style={{ height: '1px', background: 'var(--border-glass)', margin: '8px 0' }} />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}><strong>Color:</strong> {el.color}</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '2px' }}>{el.benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA Block */}
      <section className="glass-panel reveal-scale" style={{ padding: '50px 30px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <h2 style={{ fontSize: '1.8rem' }} className="gold-gradient-text">Need a Personalized Vastu Plan?</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '580px', lineHeight: '1.6', fontSize: '0.9rem' }}>
          Every layout carries unique energetic constraints depending on its occupant's planetary constellations. Let us design a non-demolition corrective Vastu map for your space.
        </p>
        <Link to="/contact" className="cosmic-button" style={{ marginTop: '10px' }}>
          <Calendar size={18} /> Schedule Detailed Audit
        </Link>
      </section>

    </div>
  );
}
