import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass, Sparkles, Home, Bed, Coffee, Monitor, Coins, Heart,
  CheckCircle, AlertCircle, ArrowUpRight, Calendar, Sun, Droplets,
  Wind, Mountain, Zap, Leaf, Star, Eye, Shield, TriangleAlert,
  Lightbulb, Clock, TrendingUp
} from 'lucide-react';

/* ─────────── DATA ─────────── */

const directionsData = {
  N: {
    name: 'North (Uttar)',
    deity: 'Kuber — Lord of Wealth',
    element: 'Water (Jal)',
    elementIcon: <Droplets size={16} />,
    elementColor: 'var(--color-purple)',
    elementBg: 'rgba(59,130,246,0.12)',
    focus: 'Career, Wealth & New Opportunities',
    dos: [
      'Place mirrors on the North wall to amplify wealth energy.',
      'Keep this zone light, clean, and clutter-free.',
      'Decorate with blue, green, or a flowing water fountain.',
      'Store financial documents and valuables here.'
    ],
    donts: [
      'Avoid heavy furniture or storage in this zone.',
      'Never place a toilet or kitchen in the North.',
      'Do not use red or warm fire colors here.',
      'Avoid overhead water tank in the North (causes pressure on wealth).'
    ]
  },
  NE: {
    name: 'Northeast (Eeshan)',
    deity: 'Shiva / Supreme Divine',
    element: 'Water + Ether',
    elementIcon: <Droplets size={16} />,
    elementColor: 'var(--color-purple)',
    elementBg: 'rgba(59,130,246,0.12)',
    focus: 'Wisdom, Spirituality & Mental Peace',
    dos: [
      'Perfect zone for a meditation or Pooja (prayer) room.',
      'Keep a bowl of fresh water with floating flowers.',
      'Ensure maximum windows to let in morning sunlight.',
      'Place a small crystal pyramid or pyramid grid here.'
    ],
    donts: [
      'Never place a toilet, kitchen, or septic tank here — major Vastu Dosha.',
      'Avoid storing junk, shoes, or heavy items.',
      'Do not build a bedroom in this corner.',
      'Never cut or slope the NE corner of your plot.'
    ]
  },
  E: {
    name: 'East (Purva)',
    deity: 'Indra & Surya — Lord of Light',
    element: 'Air / Wood (Vayu)',
    elementIcon: <Wind size={16} />,
    elementColor: 'var(--color-indigo)',
    elementBg: 'rgba(16,185,129,0.12)',
    focus: 'Social Connections, Health & Recognition',
    dos: [
      'Ideal for main entrance or large, open windows.',
      'Place wooden decor items and lush green plants.',
      'Hang a brass emblem of the Sun on the East wall.',
      'Face East while eating breakfast for health benefits.'
    ],
    donts: [
      'Avoid high walls or blockages that block morning sunlight.',
      'Do not place heavy metal cabinets or storage tanks here.',
      'Never place toilets directly in the East.',
      'Avoid storing waste or garbage in this direction.'
    ]
  },
  SE: {
    name: 'Southeast (Agneya)',
    deity: 'Agni — Lord of Fire',
    element: 'Fire (Agni)',
    elementIcon: <Zap size={16} />,
    elementColor: 'var(--color-gold)',
    elementBg: 'rgba(255,51,51,0.12)',
    focus: 'Cash Flow, Energy, Passion & Health',
    dos: [
      'Best direction for the Kitchen; stove should face East.',
      'Place electrical appliances, boilers, and invertors here.',
      'Use warm colors — red, orange, pink, or terracotta.',
      'Keep candles or lamps lit in the SE to boost financial flow.'
    ],
    donts: [
      'Avoid water tanks, sinks, or fountains in this zone.',
      'Do not build a toilet or master bedroom here.',
      'Never use blue or black decor colors in the SE.',
      'Avoid placing a fish tank or swimming pool here.'
    ]
  },
  S: {
    name: 'South (Dakshin)',
    deity: 'Yama — Lord of Justice',
    element: 'Fire / Earth',
    elementIcon: <Sun size={16} />,
    elementColor: 'var(--color-yellow)',
    elementBg: 'rgba(251,191,36,0.12)',
    focus: 'Fame, Relaxation & Restful Sleep',
    dos: [
      'Build high, solid walls and heavy structures here.',
      'Ideal for bedrooms and offices to ground your energy.',
      'Use wooden furniture and deep earth tones.',
      'Place tall, heavy bookshelves or wardrobes in the South wall.'
    ],
    donts: [
      'Do not place borewells, water pumps, or underground tanks.',
      'Avoid placing main entrances facing South without correction.',
      'Do not leave this area empty or open.',
      'Avoid sleeping with feet pointing South (toward Yama).'
    ]
  },
  SW: {
    name: 'Southwest (Nairutya)',
    deity: 'Niruthi — Lord of Ancestors',
    element: 'Earth (Prithvi)',
    elementIcon: <Mountain size={16} />,
    elementColor: 'var(--color-yellow)',
    elementBg: 'rgba(251,191,36,0.12)',
    focus: 'Stability, Master Bedroom & Relationships',
    dos: [
      'Best zone for the Master Bedroom; headboard towards South or West.',
      'Place heavy safes, wardrobes, and structural columns here.',
      'Keep the area elevated, solid, and well-built.',
      'Use earth colors — beige, brown, clay, and cream.'
    ],
    donts: [
      'Never place a toilet or kitchen here; drains stability and wealth.',
      'Avoid water bodies, swimming pools, or underground tanks.',
      'Do not have large open windows or main doors in SW.',
      'Avoid cutting or removing the SW corner during renovation.'
    ]
  },
  W: {
    name: 'West (Paschim)',
    deity: 'Varuna — Lord of Water/Oceans',
    element: 'Space / Metal (Akash)',
    elementIcon: <Star size={16} />,
    elementColor: 'var(--color-indigo)',
    elementBg: 'rgba(16,185,129,0.12)',
    focus: 'Gains, Profits & Child Prosperity',
    dos: [
      'Ideal for study rooms, dining areas, or overhead water tanks.',
      'Use white, grey, silver, or golden colors.',
      'Decorate with metal artifacts and circular shapes.',
      'Place children\'s study table here for academic success.'
    ],
    donts: [
      'Never construct a kitchen or fireplace in the West.',
      'Do not store tangled extension cords or wires here.',
      'Avoid low walls or large unshaded glass walls facing West.',
      'Never store medicines or healthcare items only in this zone.'
    ]
  },
  NW: {
    name: 'Northwest (Vayavya)',
    deity: 'Vayu — Lord of Wind',
    element: 'Air (Vayu)',
    elementIcon: <Wind size={16} />,
    elementColor: 'var(--color-indigo)',
    elementBg: 'rgba(16,185,129,0.12)',
    focus: 'Support System, Legal Matters & Travel',
    dos: [
      'Great location for guest bedrooms, toilets, or storage rooms.',
      'Ideal for finished goods storage, garage, or parking.',
      'Hang wind chimes, white crystals, and silver decor.',
      'Use light grey, silver, and off-white shades here.'
    ],
    donts: [
      'Never place the master bedroom here; causes instability in relationships.',
      'Do not lock up permanent financial assets here.',
      'Avoid tall trees directly blocking wind from the NW.',
      'Never keep expired or broken items in this zone.'
    ]
  }
};

const rooms = [
  {
    title: 'Main Entrance (Mahadwaar)',
    icon: <Home size={22} />,
    element: 'All Elements',
    color: 'var(--color-gold)',
    bg: 'rgba(255,51,51,0.08)',
    border: 'rgba(255,51,51,0.25)',
    tips: [
      { label: 'Direction', value: 'Ideally North, East, or Northeast facing.' },
      { label: 'Lighting', value: 'Keep it brightly lit at all times — it attracts positive energy.' },
      { label: 'Decoration', value: 'Hang auspicious symbols: Om, Swastika, or Ganesha idol at the entrance.' },
      { label: 'Cleanliness', value: 'Never place shoes, dustbins, or broken items directly facing the door.' },
      { label: 'Nameplate', value: 'A polished metal nameplate on the main door invites prosperity.' },
    ]
  },
  {
    title: 'Kitchen (Rasoi — Fire Element)',
    icon: <Zap size={22} />,
    element: 'Fire (Agni)',
    color: 'var(--color-yellow)',
    bg: 'rgba(251,191,36,0.08)',
    border: 'rgba(251,191,36,0.25)',
    tips: [
      { label: 'Location', value: 'Southeast corner of the house is ideal for the kitchen.' },
      { label: 'Cooking Direction', value: 'Face East while cooking to improve health and positivity.' },
      { label: 'Stove Placement', value: 'Position the cooking stove in the SE corner of the kitchen itself.' },
      { label: 'Water & Fire', value: 'Keep the sink (water) and stove (fire) apart — never adjacent or opposite.' },
      { label: 'Storage', value: 'Store grains and provisions in the South or West direction.' },
    ]
  },
  {
    title: 'Master Bedroom (Earth Element)',
    icon: <Bed size={22} />,
    element: 'Earth (Prithvi)',
    color: 'var(--color-indigo)',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.25)',
    tips: [
      { label: 'Location', value: 'Southwest zone of the home for stability and strong relationships.' },
      { label: 'Bed Position', value: 'Headboard against the South or West wall; never face North while sleeping.' },
      { label: 'Electronics', value: 'Avoid TVs, computers, or mirrors directly facing the sleeping bed.' },
      { label: 'Colors', value: 'Use soothing earth tones: beige, cream, light brown, or warm green.' },
      { label: 'Clutter', value: 'Keep under-bed storage to a minimum; heavy storage blocks energy flow.' },
    ]
  },
  {
    title: 'Living Room (Air Element)',
    icon: <Wind size={22} />,
    element: 'Air (Vayu)',
    color: 'var(--color-purple)',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.25)',
    tips: [
      { label: 'Heavy Furniture', value: 'Place sofas in the West or South; avoid the North and East walls.' },
      { label: 'TV Placement', value: 'Best on the Southeast wall; sit facing East or North to watch.' },
      { label: 'Decor', value: 'Use a beautiful painting of a mountain on the South wall for stability.' },
      { label: 'Plants', value: 'Fresh green plants in the East and North corners boost vitality.' },
      { label: 'Lighting', value: 'Keep the NE corner bright and clutter-free for mental clarity.' },
    ]
  },
  {
    title: 'Children\'s Room (Wood / Air)',
    icon: <Leaf size={22} />,
    element: 'Air / Wood',
    color: 'var(--color-indigo)',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.25)',
    tips: [
      { label: 'Location', value: 'West or Northwest bedroom is ideal for children.' },
      { label: 'Study Direction', value: 'Child should face East or North while studying for focus.' },
      { label: 'Bed Direction', value: 'Head towards East or South for restful sleep and good memory.' },
      { label: 'Colors', value: 'Light green, yellow, and sky blue stimulate creativity and learning.' },
      { label: 'Avoid', value: 'Never place children\'s room in the Southeast (Agni) — causes restlessness.' },
    ]
  },
  {
    title: 'Home Office / Study (Space Element)',
    icon: <Monitor size={22} />,
    element: 'Space (Akash)',
    color: 'var(--color-purple)',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.25)',
    tips: [
      { label: 'Ideal Location', value: 'North or East of the house for maximum career and income energy.' },
      { label: 'Sitting Direction', value: 'Sit facing North (wealth) or East (new opportunities).' },
      { label: 'Cash Locker', value: 'Place your safe/cash box in the North, door opening towards North.' },
      { label: 'Back Support', value: 'Your back should face a solid wall, not a window or door.' },
      { label: 'Plants', value: 'A Money Plant or Jade plant in the Southeast corner boosts income.' },
    ]
  },
  {
    title: 'Bathroom & Toilet',
    icon: <Droplets size={22} />,
    element: 'Water (Jal)',
    color: 'var(--color-purple)',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.25)',
    tips: [
      { label: 'Ideal Location', value: 'Northwest or West direction is best for toilets.' },
      { label: 'Door', value: 'Bathroom door should always remain closed; never face a bedroom or kitchen.' },
      { label: 'Leaks', value: 'Fix all plumbing leaks immediately — they drain financial energy.' },
      { label: 'Colors', value: 'Use white or light pastel shades; avoid red or dark colors.' },
      { label: 'Avoid', value: 'Never build bathrooms in the Northeast or directly above the prayer room.' },
    ]
  },
  {
    title: 'Pooja Room (Prayer Space)',
    icon: <Star size={22} />,
    element: 'Ether (Akash)',
    color: 'var(--color-gold)',
    bg: 'rgba(255,51,51,0.08)',
    border: 'rgba(255,51,51,0.25)',
    tips: [
      { label: 'Ideal Location', value: 'Northeast corner is the most sacred zone for a Pooja room.' },
      { label: 'Idol Facing', value: 'Idols should face West or South; worshipper faces East or North.' },
      { label: 'Height', value: 'Pooja shelf should be at eye level — not too high, not at floor level.' },
      { label: 'Cleanliness', value: 'Keep the space immaculately clean; light a lamp and incense daily.' },
      { label: 'Avoid', value: 'Never place the Pooja room under a staircase or attached to a toilet wall.' },
    ]
  }
];

const commonMistakes = [
  {
    mistake: 'Toilet in the Northeast',
    impact: 'Most severe Vastu Dosha — causes mental illness, financial collapse, and spiritual blockages.',
    remedy: 'Seal and discontinue use. Place a copper Swastika or pyramid on the toilet wall.',
    severity: 'critical',
    color: 'var(--color-gold)'
  },
  {
    mistake: 'Main Entrance Facing South',
    impact: 'Attracts obstacles, legal problems, conflicts, and sudden losses.',
    remedy: 'Place a lead metal strip at the threshold and hang a Vastu pyramid above the door.',
    severity: 'high',
    color: 'var(--color-gold)'
  },
  {
    mistake: 'Mirror Facing the Bed',
    impact: 'Disturbs sleep, drains vital energy (prana), causes relationship stress and health issues.',
    remedy: 'Cover the mirror at night with a cloth or permanently relocate the mirror.',
    severity: 'medium',
    color: 'var(--color-yellow)'
  },
  {
    mistake: 'Kitchen in the Northeast',
    impact: 'Fire in the water zone creates severe health issues, financial instability, and marital discord.',
    remedy: 'Apply a Vastu yantra on the kitchen wall. Place a copper tortoise in the NE area.',
    severity: 'critical',
    color: 'var(--color-gold)'
  },
  {
    mistake: 'Clutter in the North & Northeast',
    impact: 'Blocks wealth energy (Kuber\'s path), stagnates career growth, and causes anxiety.',
    remedy: 'Declutter immediately. Place a crystal cluster or blue gemstone bowl in the North.',
    severity: 'medium',
    color: 'var(--color-yellow)'
  },
  {
    mistake: 'Sleeping with Head pointing North',
    impact: 'Earth\'s magnetic field creates sleep disturbances, headaches, and energy drainage over time.',
    remedy: 'Rotate the bed so the headboard is on the South or East wall.',
    severity: 'medium',
    color: 'var(--color-yellow)'
  },
  {
    mistake: 'Broken or Non-Functional Items',
    impact: 'Broken clocks, dead plants, and leaking taps create stagnant, negative energy in the space.',
    remedy: 'Remove or repair immediately. Replace dead plants with fresh, thriving ones.',
    severity: 'low',
    color: 'var(--color-indigo)'
  },
  {
    mistake: 'Water Feature in Southeast',
    impact: 'Fire (SE) and Water conflict causes financial instability, accidents, and poor health.',
    remedy: 'Move the water feature to North or NE. Place a red or orange object in SE instead.',
    severity: 'high',
    color: 'var(--color-gold)'
  }
];

const quickRemedies = [
  {
    title: 'Rock Salt Bowl',
    icon: <Shield size={20} />,
    color: 'var(--color-purple)',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.22)',
    desc: 'Place a bowl of sea rock salt in corners of each room. Replace every 2 months. Absorbs negative energies instantly.'
  },
  {
    title: 'Camphor Purification',
    icon: <Sparkles size={20} />,
    color: 'var(--color-indigo)',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.22)',
    desc: 'Burn camphor (kapur) in a clay pot and carry it through every room on Fridays. Clears stagnant prana.'
  },
  {
    title: 'Copper Vastu Spiral',
    icon: <TrendingUp size={20} />,
    color: 'var(--color-yellow)',
    bg: 'rgba(251,191,36,0.08)',
    border: 'rgba(251,191,36,0.22)',
    desc: 'Bury a copper spiral in the center of the home (Brahmasthana). Activates the energetic core of the building.'
  },
  {
    title: 'Fresh Tulsi Plant',
    icon: <Leaf size={20} />,
    color: 'var(--color-indigo)',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.22)',
    desc: 'A Tulsi plant in the North or East purifies air and repels negative energies. Water it daily except Sundays.'
  },
  {
    title: 'Wind Chimes',
    icon: <Wind size={20} />,
    color: 'var(--color-purple)',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.22)',
    desc: 'Hang 6 or 8-rod metal wind chimes in the West or Northwest. They activate stagnant Vayu (Air) energy.'
  },
  {
    title: 'Crystal Pyramid',
    icon: <Mountain size={20} />,
    color: 'var(--color-yellow)',
    bg: 'rgba(251,191,36,0.08)',
    border: 'rgba(251,191,36,0.22)',
    desc: 'A clear quartz pyramid placed in the NE amplifies spiritual energy and protects the home from doshas.'
  }
];

const seasons = [
  {
    season: 'Spring (Vasant)',
    months: 'March — May',
    icon: <Leaf size={20} />,
    color: 'var(--color-indigo)',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.25)',
    tips: [
      'Deep-clean all corners — especially the North and NE zones.',
      'Introduce fresh green plants throughout the home.',
      'Open all windows daily for 2+ hours to renew air energy.',
      'Plant seeds or herbs in the East garden for prosperity rituals.'
    ]
  },
  {
    season: 'Summer (Grishma)',
    months: 'June — August',
    icon: <Sun size={20} />,
    color: 'var(--color-gold)',
    bg: 'rgba(255,51,51,0.08)',
    border: 'rgba(255,51,51,0.25)',
    tips: [
      'Place blue and indigo crystals in the North to cool water energy.',
      'Add a small indoor water fountain in the North to balance heat.',
      'Avoid red decor in the Southeast during peak summer.',
      'Use vetiver (khus) mats on doors to cool incoming air.'
    ]
  },
  {
    season: 'Monsoon (Varsha)',
    months: 'July — September',
    icon: <Droplets size={20} />,
    color: 'var(--color-purple)',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.25)',
    tips: [
      'Fix all leaking taps and pipes immediately — financial drain.',
      'Keep the Northeast and North zones extra dry and clean.',
      'Burn camphor every Friday to counter monsoon dampness.',
      'Place a salt lamp in damp corners to absorb moisture energy.'
    ]
  },
  {
    season: 'Autumn (Sharad)',
    months: 'October — November',
    icon: <Clock size={20} />,
    color: 'var(--color-yellow)',
    bg: 'rgba(251,191,36,0.08)',
    border: 'rgba(251,191,36,0.25)',
    tips: [
      'Ideal time for home renovation and structural repairs.',
      'Paint walls or refresh decor in preparation for Diwali.',
      'Perform a thorough declutter — donate or discard unused items.',
      'Light diyas (lamps) in the South and Southeast for divine fire blessings.'
    ]
  },
  {
    season: 'Winter (Shishir)',
    months: 'December — February',
    icon: <Mountain size={20} />,
    color: 'var(--color-purple)',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.25)',
    tips: [
      'Maximize sunlight entry from the East and Southeast.',
      'Use warm earth colors in decor to balance cold Vayu energy.',
      'Keep a lit lamp or diffuser in the NE for spiritual warmth.',
      'Earth-tone rugs in the Southwest bedroom enhance winter sleep.'
    ]
  }
];

const elements = [
  { name: 'Water (Jal)', zone: 'North & Northeast', color: '#60A5FA', bg: 'rgba(59,130,246,0.12)', icon: <Droplets size={22} />, benefit: 'Wealth, career flow, new opportunities, mental calm', colors: 'Blue, Cyan, Indigo, Silver' },
  { name: 'Fire (Agni)', zone: 'Southeast & South', color: '#FF3333', bg: 'rgba(255,51,51,0.12)', icon: <Zap size={22} />, benefit: 'Cash flow, vital force, passion, digestion, recognition', colors: 'Red, Orange, Pink, Coral' },
  { name: 'Earth (Prithvi)', zone: 'Southwest & Center', color: '#F59E0B', bg: 'rgba(251,191,36,0.12)', icon: <Mountain size={22} />, benefit: 'Stability, longevity, relationships, physical strength', colors: 'Yellow, Beige, Clay, Brown' },
  { name: 'Air (Vayu)', zone: 'East & Northwest', color: '#34D399', bg: 'rgba(16,185,129,0.12)', icon: <Wind size={22} />, benefit: 'Networking, social trust, growth, mental clarity, travel', colors: 'Green, Light Brown, White' },
  { name: 'Space (Akash)', zone: 'West & Center', color: '#A78BFA', bg: 'rgba(167,139,250,0.12)', icon: <Star size={22} />, benefit: 'Mental expansiveness, intuition, spiritual clarity', colors: 'White, Grey, Silver, Violet' }
];

/* ─────────── COMPONENT ─────────── */

export default function VastuTips() {
  const [selectedDirection, setSelectedDirection] = useState('NE');
  const [activeRoom, setActiveRoom] = useState(0);
  const [activeSeason, setActiveSeason] = useState(0);
  const [expandedMistake, setExpandedMistake] = useState(null);

  const selDir = directionsData[selectedDirection];

  return (
    <div style={{ padding: '45px 20px 60px', maxWidth: '1240px', margin: '0 auto' }}>

      {/* ── HERO ── */}
      <section style={{ textAlign: 'center', padding: '0 0 50px' }} className="reveal">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', borderRadius: '20px', background: 'rgba(255,51,51,0.1)', border: '1px solid rgba(255,51,51,0.22)', margin: '0 auto 20px' }}>
          <Sparkles size={14} style={{ color: 'var(--color-gold)' }} />
          <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.12em', color: 'var(--color-gold)' }}>HARMONIZE YOUR ENVIRONMENT</span>
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', marginBottom: '18px' }} className="gold-gradient-text">
          Ancient Vastu Shastra Tips
        </h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '720px', margin: '0 auto 30px', lineHeight: '1.8', fontSize: '1rem' }}>
          Align your home and workplace with the five natural elements — <em>Panchtattva</em> — for lasting health, wealth, and peace. Explore room-by-room guidance, an interactive compass, common Vastu doshas, and simple non-demolition remedies.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {['Room Guide', 'Compass', 'Panchtattva', 'Mistakes & Fixes', 'Seasonal Tips'].map((label, i) => (
            <a key={i} href={`#section-${i}`} style={{ padding: '8px 18px', borderRadius: '20px', background: i === 0 ? 'var(--color-gold)' : 'transparent', border: `1px solid ${i === 0 ? 'var(--color-gold)' : 'var(--border-glass)'}`, color: i === 0 ? '#fff' : 'var(--text-muted)', fontSize: '0.8rem', fontWeight: '600', transition: 'all 0.2s', cursor: 'pointer' }}>
              {label}
            </a>
          ))}
        </div>
      </section>

      {/* ── 1. ROOM-BY-ROOM GUIDE ── */}
      <section id="section-0" style={{ marginBottom: '80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }} className="reveal">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px', borderRadius: '20px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', marginBottom: '16px' }}>
            <Home size={13} style={{ color: 'var(--color-indigo)' }} />
            <span style={{ fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.1em', color: 'var(--color-indigo)' }}>ROOM-BY-ROOM GUIDE</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', marginBottom: '12px' }} className="gold-gradient-text">
            Every Space, Every Element
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.7', fontSize: '0.92rem' }}>
            Each room in your home corresponds to a Vastu zone and a natural element. Align them correctly for transformative results.
          </p>
        </div>

        {/* Room tabs */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '28px', justifyContent: 'center' }} className="reveal-scale reveal-stagger" data-stagger-step="50">
          {rooms.map((room, idx) => (
            <button key={idx} className="reveal" onClick={() => setActiveRoom(idx)} style={{ padding: '9px 16px', borderRadius: '10px', background: activeRoom === idx ? room.bg : 'transparent', border: `1px solid ${activeRoom === idx ? room.border : 'var(--border-glass)'}`, color: activeRoom === idx ? room.color : 'var(--text-muted)', fontSize: '0.8rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.25s', display: 'flex', alignItems: 'center', gap: '7px' }}>
              <span style={{ color: activeRoom === idx ? room.color : 'var(--text-muted)' }}>{room.icon}</span>
              <span style={{ display: 'none' }} className="room-label">{room.title}</span>
              {room.title.split(' (')[0]}
            </button>
          ))}
        </div>

        {/* Room detail panel */}
        <div className="glass-panel reveal-right" style={{ padding: '35px 40px', borderLeft: `3px solid ${rooms[activeRoom].color}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: rooms[activeRoom].bg, border: `1px solid ${rooms[activeRoom].border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: rooms[activeRoom].color }}>
              {rooms[activeRoom].icon}
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-heading)', marginBottom: '4px' }}>{rooms[activeRoom].title}</h3>
              <span style={{ fontSize: '0.78rem', color: rooms[activeRoom].color, fontWeight: '600', letterSpacing: '0.08em', background: rooms[activeRoom].bg, padding: '3px 10px', borderRadius: '10px', border: `1px solid ${rooms[activeRoom].border}` }}>
                Element: {rooms[activeRoom].element}
              </span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
            {rooms[activeRoom].tips.map((tip, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '14px 16px', background: 'rgba(255,255,255,0.02)', borderRadius: '10px', border: '1px solid var(--border-glass)' }}>
                <div style={{ minWidth: '28px', height: '28px', borderRadius: '50%', background: rooms[activeRoom].bg, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${rooms[activeRoom].border}` }}>
                  <CheckCircle size={14} style={{ color: rooms[activeRoom].color }} />
                </div>
                <div>
                  <span style={{ fontWeight: '700', fontSize: '0.82rem', color: rooms[activeRoom].color, display: 'block', marginBottom: '3px' }}>{tip.label}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.55' }}>{tip.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. INTERACTIVE COMPASS ── */}
      <section id="section-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center', marginBottom: '80px' }}>

        <div className="reveal-left" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px', borderRadius: '20px', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)', marginBottom: '4px' }}>
            <Compass size={13} style={{ color: 'var(--color-purple)' }} />
            <span style={{ fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.1em', color: 'var(--color-purple)' }}>INTERACTIVE COMPASS</span>
          </div>
          <h2 style={{ fontSize: '1.8rem', textAlign: 'center' }} className="gold-gradient-text">Vastu Directional Map</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textAlign: 'center', maxWidth: '300px', marginTop: '-10px', lineHeight: '1.6' }}>
            Tap any direction to reveal its governing deity, element, and spatial Vastu recommendations.
          </p>

          <div style={{ position: 'relative', width: '300px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '280px', height: '280px', borderRadius: '50%', border: `2px solid ${selDir.elementColor}`, position: 'relative', background: 'var(--bg-card)', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: `0 8px 40px ${selDir.elementBg}` }}>

              <div style={{ position: 'absolute', width: '90%', height: '90%', borderRadius: '50%', border: '1px dashed rgba(255,255,255,0.1)', transform: `rotate(${['N','NE','E','SE','S','SW','W','NW'].indexOf(selectedDirection) * 45}deg)`, transition: 'transform 0.7s cubic-bezier(0.25,1,0.5,1)' }}>
                <div style={{ position: 'absolute', top: '8px', left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderBottom: `16px solid ${selDir.elementColor}` }} />
              </div>

              <div style={{ width: '88px', height: '88px', borderRadius: '50%', background: 'var(--bg-dark)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: `1px solid ${selDir.elementColor}`, zIndex: 2, gap: '4px' }}>
                <Compass size={22} style={{ color: selDir.elementColor, animation: 'portalSpin 20s linear infinite' }} />
                <span style={{ fontSize: '0.85rem', fontWeight: '800', color: selDir.elementColor }}>{selectedDirection}</span>
              </div>

              {Object.keys(directionsData).map((dir, idx) => {
                const angle = (idx * 45) - 90;
                const r = 105;
                const x = Math.cos((angle * Math.PI) / 180) * r;
                const y = Math.sin((angle * Math.PI) / 180) * r;
                const isSel = selectedDirection === dir;
                return (
                  <button key={dir} onClick={() => setSelectedDirection(dir)} style={{ position: 'absolute', left: `calc(50% + ${x}px - 22px)`, top: `calc(50% + ${y}px - 22px)`, width: '44px', height: '44px', borderRadius: '50%', background: isSel ? directionsData[dir].elementColor : 'var(--bg-dark)', border: `1.5px solid ${isSel ? directionsData[dir].elementColor : 'var(--border-glass)'}`, color: isSel ? '#fff' : 'var(--text-primary)', fontWeight: '800', fontSize: '0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: isSel ? `0 0 16px ${directionsData[dir].elementBg}` : 'none', transition: 'all 0.25s', zIndex: 3 }}>
                    {dir}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Compass info panel */}
        <div className="reveal-flip">
          <div className="glass-panel" style={{ padding: '35px', display: 'flex', flexDirection: 'column', gap: '20px', borderLeft: `3px solid ${selDir.elementColor}` }}>
            <div style={{ borderBottom: '1px solid var(--border-glass)', paddingBottom: '16px' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.1em', color: selDir.elementColor, textTransform: 'uppercase' }}>Direction Analysis</span>
              <h2 style={{ fontSize: '1.7rem', color: 'var(--text-heading)', marginTop: '6px' }}>{selDir.name}</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              {[
                { label: 'Governing Deity', value: selDir.deity },
                { label: 'Life Focus', value: selDir.focus },
                { label: 'Element', value: selDir.element },
              ].map((info, i) => (
                <div key={i} style={{ background: selDir.elementBg, borderRadius: '10px', padding: '12px 14px', border: `1px solid ${selDir.elementColor}22` }}>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>{info.label}</span>
                  <span style={{ fontWeight: '600', fontSize: '0.88rem', color: 'var(--text-heading)' }}>{info.value}</span>
                </div>
              ))}
            </div>

            <div>
              <h4 style={{ fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '7px', color: 'var(--color-indigo)', marginBottom: '10px' }}>
                <CheckCircle size={15} /> Recommended (Do's)
              </h4>
              <ul style={{ listStyleType: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {selDir.dos.map((item, i) => (
                  <li key={i} style={{ color: 'var(--text-muted)', fontSize: '0.84rem', lineHeight: '1.5', paddingLeft: '16px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--color-indigo)' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '7px', color: 'var(--color-gold)', marginBottom: '10px' }}>
                <AlertCircle size={15} /> Avoid (Don'ts)
              </h4>
              <ul style={{ listStyleType: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {selDir.donts.map((item, i) => (
                  <li key={i} style={{ color: 'var(--text-muted)', fontSize: '0.84rem', lineHeight: '1.5', paddingLeft: '16px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--color-gold)' }}>✗</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PANCHTATTVA ELEMENTS ── */}
      <section id="section-2" style={{ marginBottom: '80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }} className="reveal">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px', borderRadius: '20px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', marginBottom: '16px' }}>
            <Star size={13} style={{ color: 'var(--color-indigo)' }} />
            <span style={{ fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.1em', color: 'var(--color-indigo)' }}>PANCHTATTVA</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', marginBottom: '12px' }} className="gold-gradient-text">
            Balancing the Five Elements
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto', lineHeight: '1.7', fontSize: '0.92rem' }}>
            Vastu revolves around the precise alignment of five cosmic elements. A blockage or imbalance in any element creates corresponding physical, emotional, or financial disruptions.
          </p>
        </div>

        <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '18px' }}>
          {elements.map((el, i) => (
            <div key={i} className="reveal-zoom-out glass-panel magnetic-hover" style={{ padding: '28px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center', borderTop: `3px solid ${el.color}` }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: el.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: el.color, border: `1px solid ${el.color}33` }}>
                {el.icon}
              </div>
              <div>
                <span style={{ fontWeight: '700', color: el.color, fontFamily: 'var(--font-serif)', fontSize: '1.05rem', display: 'block' }}>{el.name}</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginTop: '3px' }}>Zone: {el.zone}</span>
              </div>
              <div style={{ height: '1px', background: 'var(--border-glass)', width: '100%' }} />
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}><strong style={{ color: el.color }}>Colors:</strong> {el.colors}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: '1.5' }}>{el.benefit}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. COMMON MISTAKES & FIXES ── */}
      <section id="section-3" style={{ marginBottom: '80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }} className="reveal">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px', borderRadius: '20px', background: 'rgba(255,51,51,0.1)', border: '1px solid rgba(255,51,51,0.22)', marginBottom: '16px' }}>
            <AlertCircle size={13} style={{ color: 'var(--color-gold)' }} />
            <span style={{ fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.1em', color: 'var(--color-gold)' }}>VASTU DOSHAS</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', marginBottom: '12px' }} className="gold-gradient-text">
            Common Vastu Mistakes & Remedies
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto', lineHeight: '1.7', fontSize: '0.92rem' }}>
            Most Vastu Doshas are unintentional. Click each card to reveal its impact and the non-demolition remedy to fix it.
          </p>
        </div>

        <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          {commonMistakes.map((item, i) => (
            <div key={i} className="glass-panel reveal-flip" style={{ padding: '0', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.3s' }} onClick={() => setExpandedMistake(expandedMistake === i ? null : i)}>
              <div style={{ padding: '20px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ minWidth: '8px', height: '8px', borderRadius: '50%', background: item.color }} />
                  <span style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--text-heading)' }}>{item.mistake}</span>
                </div>
                <span style={{ fontSize: '0.7rem', fontWeight: '600', padding: '3px 9px', borderRadius: '8px', background: `${item.color}18`, color: item.color, border: `1px solid ${item.color}33`, whiteSpace: 'nowrap' }}>
                  {item.severity}
                </span>
              </div>
              <div className={`sleek-expandable ${expandedMistake === i ? 'active' : ''}`}>
                <div style={{ padding: '10px 22px 20px', display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid var(--border-glass)' }}>
                  <div style={{ paddingTop: '14px' }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <AlertCircle size={15} style={{ color: 'var(--color-gold)', marginTop: '1px', flexShrink: 0 }} />
                      <div>
                        <span style={{ fontSize: '0.72rem', fontWeight: '700', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Impact</span>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.83rem', lineHeight: '1.55', marginTop: '3px' }}>{item.impact}</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', padding: '12px', background: 'rgba(16,185,129,0.06)', borderRadius: '8px', border: '1px solid rgba(16,185,129,0.2)' }}>
                      <Lightbulb size={15} style={{ color: 'var(--color-indigo)', marginTop: '1px', flexShrink: 0 }} />
                      <div>
                        <span style={{ fontSize: '0.72rem', fontWeight: '700', color: 'var(--color-indigo)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Remedy</span>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.83rem', lineHeight: '1.55', marginTop: '3px' }}>{item.remedy}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Remedies */}
        <div style={{ marginTop: '50px' }}>
          <h3 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '10px' }} className="gold-gradient-text">Quick Vastu Remedies</h3>
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', fontSize: '0.88rem', marginBottom: '30px', lineHeight: '1.6' }}>
            Simple, affordable, and effective remedies that anyone can implement without any renovation.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {quickRemedies.map((r, i) => (
              <div key={i} className="glass-panel reveal" style={{ padding: '24px', borderTop: `2px solid ${r.color}`, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: r.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: r.color, border: `1px solid ${r.border}` }}>
                  {r.icon}
                </div>
                <h4 style={{ fontSize: '1rem', color: r.color }}>{r.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.83rem', lineHeight: '1.6' }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. SEASONAL VASTU TIPS ── */}
      <section id="section-4" style={{ marginBottom: '80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }} className="reveal">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px', borderRadius: '20px', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)', marginBottom: '16px' }}>
            <Calendar size={13} style={{ color: 'var(--color-purple)' }} />
            <span style={{ fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.1em', color: 'var(--color-purple)' }}>SEASONAL CALENDAR</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', marginBottom: '12px' }} className="gold-gradient-text">
            Vastu Tips by Season
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '580px', margin: '0 auto', lineHeight: '1.7', fontSize: '0.92rem' }}>
            Your home's energy shifts with the seasons. Vastu recommends specific adjustments at each transition to maintain harmonic alignment.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '28px' }} className="reveal">
          {seasons.map((s, i) => (
            <button key={i} onClick={() => setActiveSeason(i)} style={{ padding: '9px 18px', borderRadius: '20px', background: activeSeason === i ? s.bg : 'transparent', border: `1px solid ${activeSeason === i ? s.border : 'var(--border-glass)'}`, color: activeSeason === i ? s.color : 'var(--text-muted)', fontSize: '0.82rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.25s', display: 'flex', alignItems: 'center', gap: '7px' }}>
              <span style={{ color: activeSeason === i ? s.color : 'var(--text-muted)' }}>{s.icon}</span>
              {s.season}
            </button>
          ))}
        </div>

        <div className="glass-panel reveal" style={{ padding: '35px 40px', borderLeft: `3px solid ${seasons[activeSeason].color}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: seasons[activeSeason].bg, border: `1px solid ${seasons[activeSeason].border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: seasons[activeSeason].color }}>
              {seasons[activeSeason].icon}
            </div>
            <div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-heading)' }}>{seasons[activeSeason].season}</h3>
              <span style={{ fontSize: '0.78rem', color: seasons[activeSeason].color, fontWeight: '600' }}>{seasons[activeSeason].months}</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
            {seasons[activeSeason].tips.map((tip, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '14px 16px', background: 'rgba(255,255,255,0.02)', borderRadius: '10px', border: '1px solid var(--border-glass)' }}>
                <CheckCircle size={15} style={{ color: seasons[activeSeason].color, marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.55' }}>{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="glass-panel reveal-scale" style={{ padding: '60px 40px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', background: 'linear-gradient(135deg, rgba(255,51,51,0.06), rgba(59,130,246,0.06), rgba(16,185,129,0.06))' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px', borderRadius: '20px', background: 'rgba(255,51,51,0.1)', border: '1px solid rgba(255,51,51,0.22)' }}>
          <Eye size={13} style={{ color: 'var(--color-gold)' }} />
          <span style={{ fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.1em', color: 'var(--color-gold)' }}>PERSONALIZED VASTU CONSULTATION</span>
        </div>
        <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }} className="gold-gradient-text">
          Need a Custom Vastu Plan for Your Space?
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '620px', lineHeight: '1.75', fontSize: '0.95rem' }}>
          Every building carries a unique energetic blueprint shaped by its occupants' planetary positions. Generic tips only go so far — our expert Vastu consultants analyze your floor plan, birth chart, and elemental balance to deliver a precise, <strong>non-demolition corrective Vastu map</strong> tailored entirely to you.
        </p>
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '10px' }}>
          <Link to="/contact" className="cosmic-button" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calendar size={17} /> Schedule a Vastu Audit
          </Link>
          <Link to="/services" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 22px', borderRadius: '8px', border: '1px solid var(--border-glass)', color: 'var(--text-muted)', fontSize: '0.88rem', fontWeight: '600', transition: 'all 0.2s' }}>
            View All Services <ArrowUpRight size={15} />
          </Link>
        </div>
        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '10px' }}>
          {[
            { icon: <Shield size={16} />, label: '100% Non-Demolition', color: 'var(--color-indigo)' },
            { icon: <Star size={16} />, label: '500+ Homes Transformed', color: 'var(--color-yellow)' },
            { icon: <Heart size={16} />, label: 'Ancient Vedic Principles', color: 'var(--color-gold)' },
          ].map((badge, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '7px', color: badge.color, fontSize: '0.82rem', fontWeight: '600' }}>
              {badge.icon} {badge.label}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
