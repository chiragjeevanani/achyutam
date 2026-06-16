import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import Service from '../models/Service.js';
import Blog from '../models/Blog.js';
import Testimonial from '../models/Testimonial.js';
import VastuDirection from '../models/VastuDirection.js';
import VastuRoom from '../models/VastuRoom.js';
import VastuMistake from '../models/VastuMistake.js';
import VastuRemedy from '../models/VastuRemedy.js';
import VastuSeason from '../models/VastuSeason.js';
import Admin from '../models/Admin.js';
import HomeContent from '../models/HomeContent.js';

// Load environmental variables
dotenv.config();

// Connect to database
connectDB();

// --- Static Data Definitions ---

const services = [
  {
    title: 'Vastu Discussion',
    category: 'Vastu Shastra',
    sub: 'Directions, Placements & Energy Corrections',
    desc: 'Vastu consultation balances the energy of your home or workplace environment. It provides guidance on directions, placements, and necessary corrections. These suggestions help create prosperity, peace, and overall well-being completely without demolition.',
    price: 5100,
    duration: 60,
    note: 'Vastu Consultation fees will decide after discussion',
    imgUrl: '/vastu_terracotta.png',
    list: [
      'Residential Vastu: Peaceful living & family well-being',
      'Office & Showroom Vastu: Enhanced sales & productivity',
      'Factory Vastu: Machinery alignment & operational safety',
      'School & College Vastu: Concentration & academic growth',
      'Hotel & Hospital Vastu: Fast healing & guest comfort'
    ],
    isActive: true,
    order: 0
  },
  {
    title: 'Numerology Consultation',
    category: 'Numerology',
    sub: 'Vibrational Frequency & Lo Shu Grid',
    desc: 'Numerology helps you understand how numbers influence your life path and personality. It provides guidance for career, relationships, and financial decisions with deeper clarity, utilizing classic birth grid alignments.',
    price: 3100,
    duration: 30,
    note: 'Lifetime Report + Remedies',
    imgUrl: '/numerology_terracotta.png',
    list: [
      'Name vibration tuning & correction',
      'Birth & Destiny numbers assessment',
      'Personal or corporate branding alignment',
      'Lucky dates, periods & cycle guides'
    ],
    isActive: true,
    order: 1
  },
  {
    title: 'Astrology Consultation',
    category: 'Astrology',
    sub: 'Kundli Readings & Planetary Cures',
    desc: 'Astrology consultation analyzes your birth chart to understand life challenges and opportunities. It gives clear answers related to career, marriage, health, and personal growth. Effective remedies are suggested to reduce obstacles and bring positivity.',
    price: 4100,
    duration: 45,
    note: '',
    imgUrl: '/astrology_terracotta.png',
    list: [
      'Birth chart (Kundli) assessment',
      'Major period (Dasha) analysis',
      'Practical gemstone & elemental remedies',
      'Negative star alignment corrections'
    ],
    isActive: true,
    order: 2
  },
  {
    title: 'Tarot Reading',
    category: 'Tarot Reading',
    sub: 'Intuitive Insight & Future Paths',
    desc: 'Tarot reading offers intuitive insights into your present situation and future possibilities. It helps you find answers about love, career, emotions, and important life choices. The session brings clarity, confidence, and peaceful direction to your mind.',
    price: 2100,
    duration: 45,
    note: '',
    imgUrl: '/tarot_terracotta.png',
    list: [
      'Love & relationship emotional insights',
      'Paragraph timing answers',
      'Decision-making clarity guidance',
      'Mindfulness & spiritual grounding'
    ],
    isActive: true,
    order: 3
  },
  {
    title: 'Relationship Counselling',
    category: 'Counselling',
    sub: 'Mutual Understanding & Connection',
    desc: 'Relationship counselling helps you improve understanding and emotional connection with your partner or family. It focuses on resolving conflicts, misunderstandings, and communication issues effectively.',
    price: 2400,
    duration: 60,
    note: '',
    imgUrl: '/relationship_terracotta.png',
    list: [
      'Couples communication mapping',
      'Resolving family grid conflicts',
      'Overcoming generational misunderstandings',
      'Deepening mutual trust & connection'
    ],
    isActive: true,
    order: 4
  },
  {
    title: 'Aura Scanner',
    category: 'Vastu Shastra',
    sub: 'Energy Vibrations & Environmental Scanning',
    desc: 'Aura scanning evaluates the energy fields around you or your physical properties. By checking the energy of land, homes, and factories, it helps identify blockages, geopathic stress, and positive vibrational hot spots.',
    price: 500,
    duration: 15,
    note: 'To check energy of land, homes, factories',
    imgUrl: '/vastu_terracotta.png',
    list: [
      'Detecting geopathic stress & energy leaks',
      'Checking energy frequency of lands & plots',
      'Home energy field alignment analysis',
      'Factory machinery & workspace vibe scan'
    ],
    isActive: true,
    order: 5
  }
];

const blogs = [
  {
    title: 'How Vastu Shastra Can Transform Your Home and Life',
    category: 'Vastu Shastra',
    date: 'November 18, 2025',
    author: 'Uppasna Keshwani',
    readTime: '4 Min Read',
    imgUrl: '/vastu_terracotta.png',
    summary: 'Vastu Shastra is an ancient Indian science that focuses on balancing the five elements—earth, water, fire, air, and space—within your living environment. Every home and workplace carries energy, and when this energy flows in the right direction, it brings peace, health, and prosperity.',
    content: [
      'Vastu Shastra is an ancient Indian science that focuses on balancing the five elements—earth, water, fire, air, and space—within your living environment. Every home and workplace carries energy, and when this energy flows in the right direction, it brings peace, health, and prosperity. Many people experience stress, financial blocks, or relationship problems simply because the energy structure of their space is disturbed. Vastu helps to identify these imbalances and correct them through simple yet powerful changes.',
      'The entrance of a house, placement of kitchen, bedroom direction, and even the position of mirrors play a major role in shaping your daily life. For example, sleeping in the wrong direction can cause anxiety and health issues, while an improper kitchen placement can affect finances and family harmony. Vastu does not demand expensive reconstruction; most corrections are done through rearranging furniture, colors, symbols, and energy remedies completely without demolition.',
      'Modern life has made people ignore the connection between space and mind. When your surroundings are aligned with natural laws, your thoughts become calmer and opportunities start flowing easily. Many clients have seen improvement in business growth, marriage harmony, and children’s education after following vastu guidance. Vastu is not superstition—it is practical energy management for better living.',
      'If you feel stuck despite hard work, your home energy might be the hidden reason. A professional vastu consultation analyzes your floor plan, directions, and personal problems to give customized solutions. Creating a vastu-balanced space is like opening a door for success to enter naturally.'
    ],
    isPublished: true
  },
  {
    title: 'Astrology – A Spiritual GPS for Your Life',
    category: 'Astrology',
    date: 'November 18, 2025',
    author: 'Uppasna Keshwani',
    readTime: '3 Min Read',
    imgUrl: '/astrology_terracotta.png',
    summary: 'Astrology is often misunderstood as predicting the future, but its true purpose is to serve as a spiritual GPS. By analyzing the planetary positions at the time of your birth, astrology reveals your strengths, life purpose, and potential hurdles.',
    content: [
      'Astrology is often misunderstood as predicting the future, but its true purpose is to serve as a spiritual GPS. By analyzing the planetary positions at the time of your birth, astrology reveals your strengths, life purpose, and potential hurdles. It helps you navigate career shifts, relationship dynamics, and spiritual growth with clarity.',
      'Your birth chart (Kundli) is a map of the heavens at the exact millisecond you drew your first breath. It contains planetary angles that represent karma, subconscious desires, and energy grids. When planetary periods (Dashas) align, specific events or opportunities emerge. Knowing this timing lets you prepare instead of struggling blindly against cosmic tides.',
      'Through practical, simple remedies—such as wearing selected crystals, performing sound chanting, or balancing cosmic elements with water or fire—you can pacify active planets and strengthen weak ones. Astrology doesn\'t restrict your free will; it empowers you with divine foresight to make choices that align with your ultimate cosmic design.'
    ],
    isPublished: true
  },
  {
    title: 'Tarot Reading – Listening to Your Inner Voice',
    category: 'Tarot Reading',
    date: 'November 18, 2025',
    author: 'Uppasna Keshwani',
    readTime: '3 Min Read',
    imgUrl: '/tarot_terracotta.png',
    summary: 'Tarot cards are powerful mirrors reflecting your subconscious mind. A tarot session doesn\'t just reveal what lies ahead; it unlocks your deep inner wisdom to help you solve present dilemmas, heal relationships, and restore mental peace.',
    content: [
      'Tarot cards are powerful mirrors reflecting your subconscious mind. A tarot session doesn\'t just reveal what lies ahead; it unlocks your deep inner wisdom to help you solve present dilemmas, heal relationships, and restore mental peace.',
      'Every tarot card holds archetype symbols, colors, and astrological frequencies. The cards chosen during a session represent energy grids in your life right now. By interpreting these symbols, a professional reader acts as a guide, revealing blocks or hidden paths that your active mind has missed.',
      'Whether you are at a crossroad in your career, feeling a distance in your relationships, or seeking spiritual clarity, Tarot reading brings a feeling of deep relief and absolute peace, allowing you to walk forward with strong purpose and renewed power.'
    ],
    isPublished: true
  },
  {
    title: 'Relationship Counselling – Healing Hearts, Not Just Problems',
    category: 'Counselling',
    date: 'November 18, 2025',
    author: 'Uppasna Keshwani',
    readTime: '4 Min Read',
    imgUrl: '/relationship_terracotta.png',
    summary: 'Relationships are built on delicate energetic and emotional connections. Relationship counselling focuses on looking beneath arguments to heal deep communication filters, resolve core planetary/emotional blocks, and restore mutual trust.',
    content: [
      'Relationships are built on delicate energetic and emotional connections. Relationship counselling focuses on looking beneath arguments to heal deep communication filters, resolve core planetary/emotional blocks, and restore mutual trust.',
      'When communication breaks down, partners start reacting from childhood patterns or planetary imbalances in their birth charts. Counselling creates a safe, neutral portal where both sides can speak and actually be heard without judgment or defensive walls.',
      'By combining emotional mapping, empathetic communication training, and spiritual space clearing (such as cleansing Vastu energy grids), relationships can undergo a massive transformation, converting daily tension into deep mutual respect and divine connection.'
    ],
    isPublished: true
  },
  {
    title: 'Numerology – The Secret Language of Numbers',
    category: 'Numerology',
    date: 'November 18, 2025',
    author: 'Uppasna Keshwani',
    readTime: '3 Min Read',
    imgUrl: '/numerology_terracotta.png',
    summary: 'Numbers are not just symbols for counting; they are active energetic vibrations. Numerology analyzes your name and birth date coordinates to map your personality traits, potential successes, and ideal cosmic frequencies.',
    content: [
      'Numbers are not just symbols for counting; they are active energetic vibrations. Numerology analyzes your name and birth date coordinates to map your personality traits, potential successes, and ideal cosmic frequencies.',
      'Using classic grids like the Lo Shu Grid, we analyze missing numbers and dominant frequencies. Your name vibration is incredibly powerful—a simple name correction or spelling shift can align your frequency with lucky numbers, unlocking career progression, luxury attraction, and deep harmony.',
      'Understanding your life path number and personal cycle numbers lets you sync with nature\'s seasons. Instead of pushing when the universe says "rest", or resting when opportunity gates are wide open, you learn to step forward in perfect numeric timing.'
    ],
    isPublished: true
  }
];

const testimonials = [
  {
    name: 'Abizer',
    text: 'It has been a year since I first consulted Upasana on matters related to health, relationships, financial planning, and career development.\n\nThe experience has been truly transformative. Prior to seeking her guidance, certain decisions made in the past had adversely affected my financial stability, health, and personal relationships. Upasana conducted a thorough review of these aspects and provided thoughtful remedies that have significantly improved my financial situation and career trajectory, while also helping to restore and strengthen my relationships.\n\nHer advice has been instrumental in rebuilding my confidence, which in turn has had a positive impact on my overall health and well‑being.\n\nI extend my best wishes to her and am confident that she will continue to make a meaningful difference in the lives of many. I am certain that both I, as well as my friends and family, will continue to seek her valuable guidance in the future.',
    rating: 5,
    role: 'Consultation Client',
    isVisible: true,
    order: 0
  },
  {
    name: 'Rahuul K Butti',
    text: 'I would like to express my heartfelt gratitude to Ms. Upasna Keswani for her incredibly accurate astrological guidance. My experience with her has been truly transformative. Her insights into my personal horoscope were precise, practical, and deeply relatable to my life situations. What truly sets her apart is that her remedies are simple, easy to follow, and not commercially driven—they can be comfortably practiced at home without unnecessary expense.\n\nIn addition, she is an excellent numerologist. She suggested a minor name correction with just a simple alphabet addition, and I have genuinely experienced a noticeable positive shift in my daily life since then.\n\nI have personally benefited tremendously from her guidance and have referred several friends to her, who have also shared positive experiences. I highly recommend Upasna Ji to anyone seeking genuine and practical astrological guidance.',
    rating: 5,
    role: 'Astrology & Numerology Client',
    isVisible: true,
    order: 1
  },
  {
    name: 'Pooja Kashyap',
    text: 'Namaste Uppasna Ji 🙏 It was very nice to receive your message. Before taking the consultation, I had a lot of confusion and uncertainty regarding my life, career, and family matters. Through your guidance in Vastu, Astrology, and Numerology, I gained confidence and mental peace. Your guidance is very simple, practical, and positive. I experienced absolute balance and clarity.',
    rating: 5,
    role: 'Career & Life Guidance Client',
    isVisible: true,
    order: 2
  },
  {
    name: 'Nikhil Jain',
    text: 'Uppasana is amazing with vastu and numerology. I took her course and implemented changes in my house which really helped me in my family relationships. Highly recommend her for your vastu and numerology consults!',
    rating: 5,
    role: 'Course Student & Homeowner',
    isVisible: true,
    order: 3
  },
  {
    name: 'Rajesh Garg',
    text: 'While talking to Upasana Ji, I got highly necessary information and clear guidance to improve my business area of operation. Highly logical and practical approaches.',
    rating: 5,
    role: 'Business Owner',
    isVisible: true,
    order: 4
  },
  {
    name: 'Sushree Sangita',
    text: 'I had a wonderful session with Upasana… Her predictions were very accurate, and she explains the planetary reasons clearly. Thanks a lot! 🙏',
    rating: 5,
    role: 'Astrology Assessment Client',
    isVisible: true,
    order: 5
  },
  {
    name: 'Ratnamanjari',
    text: 'Very deep knowledge of vastu, we are very happy and satisfied with her work. The remedies she gave were easy to apply.',
    rating: 5,
    role: 'Home Vastu Client',
    isVisible: true,
    order: 6
  },
  {
    name: 'Reina',
    text: 'We are very satisfied with the name alignment service. The business name corrections started working in our favor within weeks.',
    rating: 5,
    role: 'Business Name Correction Client',
    isVisible: true,
    order: 7
  }
];

const directions = [
  {
    code: 'N',
    name: 'North (Uttar)',
    deity: 'Kuber — Lord of Wealth',
    element: 'Water (Jal)',
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
  {
    code: 'NE',
    name: 'Northeast (Eeshan)',
    deity: 'Shiva / Supreme Divine',
    element: 'Water + Ether',
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
  {
    code: 'E',
    name: 'East (Purva)',
    deity: 'Indra & Surya — Lord of Light',
    element: 'Air / Wood (Vayu)',
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
  {
    code: 'SE',
    name: 'Southeast (Agneya)',
    deity: 'Agni — Lord of Fire',
    element: 'Fire (Agni)',
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
  {
    code: 'S',
    name: 'South (Dakshin)',
    deity: 'Yama — Lord of Justice',
    element: 'Fire / Earth',
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
  {
    code: 'SW',
    name: 'Southwest (Nairutya)',
    deity: 'Niruthi — Lord of Ancestors',
    element: 'Earth (Prithvi)',
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
  {
    code: 'W',
    name: 'West (Paschim)',
    deity: 'Varuna — Lord of Water/Oceans',
    element: 'Space / Metal (Akash)',
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
  {
    code: 'NW',
    name: 'Northwest (Vayavya)',
    deity: 'Vayu — Lord of Wind',
    element: 'Air (Vayu)',
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
];

const rooms = [
  {
    title: 'Main Entrance (Mahadwaar)',
    element: 'All Elements',
    color: 'var(--color-gold)',
    bg: 'rgba(255,51,51,0.08)',
    border: 'rgba(255,51,51,0.25)',
    tips: [
      { label: 'Direction', value: 'Ideally North, East, or Northeast facing.' },
      { label: 'Lighting', value: 'Keep it brightly lit at all times — it attracts positive energy.' },
      { label: 'Decoration', value: 'Hang auspicious symbols: Om, Swastika, or Ganesha idol at the entrance.' },
      { label: 'Cleanliness', value: 'Never place shoes, dustbins, or broken items directly facing the door.' },
      { label: 'Nameplate', value: 'A polished metal nameplate on the main door invites prosperity.' }
    ],
    order: 0
  },
  {
    title: 'Kitchen (Rasoi — Fire Element)',
    element: 'Fire (Agni)',
    color: 'var(--color-yellow)',
    bg: 'rgba(251,191,36,0.08)',
    border: 'rgba(251,191,36,0.25)',
    tips: [
      { label: 'Location', value: 'Southeast corner of the house is ideal for the kitchen.' },
      { label: 'Cooking Direction', value: 'Face East while cooking to improve health and positivity.' },
      { label: 'Stove Placement', value: 'Position the cooking stove in the SE corner of the kitchen itself.' },
      { label: 'Water & Fire', value: 'Keep the sink (water) and stove (fire) apart — never adjacent or opposite.' },
      { label: 'Storage', value: 'Store grains and provisions in the South or West direction.' }
    ],
    order: 1
  },
  {
    title: 'Master Bedroom (Earth Element)',
    element: 'Earth (Prithvi)',
    color: 'var(--color-indigo)',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.25)',
    tips: [
      { label: 'Location', value: 'Southwest zone of the home for stability and strong relationships.' },
      { label: 'Bed Position', value: 'Headboard against the South or West wall; never face North while sleeping.' },
      { label: 'Electronics', value: 'Avoid TVs, computers, or mirrors directly facing the sleeping bed.' },
      { label: 'Colors', value: 'Use soothing earth tones: beige, cream, light brown, or warm green.' },
      { label: 'Clutter', value: 'Keep under-bed storage to a minimum; heavy storage blocks energy flow.' }
    ],
    order: 2
  },
  {
    title: 'Living Room (Air Element)',
    element: 'Air (Vayu)',
    color: 'var(--color-purple)',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.25)',
    tips: [
      { label: 'Heavy Furniture', value: 'Place sofas in the West or South; avoid the North and East walls.' },
      { label: 'TV Placement', value: 'Best on the Southeast wall; sit facing East or North to watch.' },
      { label: 'Decor', value: 'Use a beautiful painting of a mountain on the South wall for stability.' },
      { label: 'Plants', value: 'Fresh green plants in the East and North corners boost vitality.' },
      { label: 'Lighting', value: 'Keep the NE corner bright and clutter-free for mental clarity.' }
    ],
    order: 3
  },
  {
    title: 'Children\'s Room (Wood / Air)',
    element: 'Air / Wood',
    color: 'var(--color-indigo)',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.25)',
    tips: [
      { label: 'Location', value: 'West or Northwest bedroom is ideal for children.' },
      { label: 'Study Direction', value: 'Child should face East or North while studying for focus.' },
      { label: 'Bed Direction', value: 'Head towards East or South for restful sleep and good memory.' },
      { label: 'Colors', value: 'Light green, yellow, and sky blue stimulate creativity and learning.' },
      { label: 'Avoid', value: 'Never place children\'s room in the Southeast (Agni) — causes restlessness.' }
    ],
    order: 4
  },
  {
    title: 'Home Office / Study (Space Element)',
    element: 'Space (Akash)',
    color: 'var(--color-purple)',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.25)',
    tips: [
      { label: 'Ideal Location', value: 'North or East of the house for maximum career and income energy.' },
      { label: 'Sitting Direction', value: 'Sit facing North (wealth) or East (new opportunities).' },
      { label: 'Cash Locker', value: 'Place your safe/cash box in the North, door opening towards North.' },
      { label: 'Back Support', value: 'Your back should face a solid wall, not a window or door.' },
      { label: 'Plants', value: 'A Money Plant or Jade plant in the Southeast corner boosts income.' }
    ],
    order: 5
  },
  {
    title: 'Bathroom & Toilet',
    element: 'Water (Jal)',
    color: 'var(--color-purple)',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.25)',
    tips: [
      { label: 'Ideal Location', value: 'Northwest or West direction is best for toilets.' },
      { label: 'Door', value: 'Bathroom door should always remain closed; never face a bedroom or kitchen.' },
      { label: 'Leaks', value: 'Fix all plumbing leaks immediately — they drain financial energy.' },
      { label: 'Colors', value: 'Use white or light pastel shades; avoid red or dark colors.' },
      { label: 'Avoid', value: 'Never build bathrooms in the Northeast or directly above the prayer room.' }
    ],
    order: 6
  },
  {
    title: 'Pooja Room (Prayer Space)',
    element: 'Ether (Akash)',
    color: 'var(--color-gold)',
    bg: 'rgba(255,51,51,0.08)',
    border: 'rgba(255,51,51,0.25)',
    tips: [
      { label: 'Ideal Location', value: 'Northeast corner is the most sacred zone for a Pooja room.' },
      { label: 'Idol Facing', value: 'Idols should face West or South; worshipper faces East or North.' },
      { label: 'Height', value: 'Pooja shelf should be at eye level — not too high, not at floor level.' },
      { label: 'Cleanliness', value: 'Keep the space immaculately clean; light a lamp and incense daily.' },
      { label: 'Avoid', value: 'Never place the Pooja room under a staircase or attached to a toilet wall.' }
    ],
    order: 7
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
    icon: 'Shield',
    color: 'var(--color-purple)',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.22)',
    desc: 'Place a bowl of sea rock salt in corners of each room. Replace every 2 months. Absorbs negative energies instantly.'
  },
  {
    title: 'Camphor Purification',
    icon: 'Sparkles',
    color: 'var(--color-indigo)',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.22)',
    desc: 'Burn camphor (kapur) in a clay pot and carry it through every room on Fridays. Clears stagnant prana.'
  },
  {
    title: 'Copper Vastu Spiral',
    icon: 'TrendingUp',
    color: 'var(--color-yellow)',
    bg: 'rgba(251,191,36,0.08)',
    border: 'rgba(251,191,36,0.22)',
    desc: 'Bury a copper spiral in the center of the home (Brahmasthana). Activates the energetic core of the building.'
  },
  {
    title: 'Fresh Tulsi Plant',
    icon: 'Leaf',
    color: 'var(--color-indigo)',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.22)',
    desc: 'A Tulsi plant in the North or East purifies air and repels negative energies. Water it daily except Sundays.'
  },
  {
    title: 'Wind Chimes',
    icon: 'Wind',
    color: 'var(--color-purple)',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.22)',
    desc: 'Hang 6 or 8-rod metal wind chimes in the West or Northwest. They activate stagnant Vayu (Air) energy.'
  },
  {
    title: 'Crystal Pyramid',
    icon: 'Mountain',
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
    icon: 'Leaf',
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
    icon: 'Sun',
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
    icon: 'Droplets',
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
    icon: 'Clock',
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
    icon: 'Mountain',
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

const defaultHomeContent = {
  hero: {
    badge: 'CELESTIAL HARMONY',
    titleLine1: 'Achyutam Maestro',
    titleLine2: 'Transforming Spaces & Destiny',
    description: 'Unlock peace, wealth, and abundance through logical, scientific Vastu alignments and supportive numerological frequency corrections.',
    imageUrl: 'https://achyutammaestro.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-28-at-11.29.57-AM-2.jpeg',
    ctaText: 'Book a Consultation',
    compassCtaText: 'Align Your Compass'
  },
  compass: {
    badge: 'INTERACTIVE STABILITY',
    title: 'Test Your Energy Direction',
    description: 'Our universe works through direct currents. Tap the Vastu Chakra on the left to rotate and align the spatial flow. In ancient Vastu, each of the 16 sectors governs a key area of life.',
    successText: 'Vastu Energy Flow Fully Calibrated!',
    instructionText: 'Tap the Vastu Chakra to calibrate space flow.'
  },
  methodology: {
    title: 'Our Three-Step Scientific Flow',
    steps: [
      {
        num: '01',
        title: 'Energy Mapping',
        desc: 'We map the precise directional layout of your premises against the cosmic horoscope coordinates of the primary resident.',
        icon: 'Compass'
      },
      {
        num: '02',
        title: 'No-Demolition Balancing',
        desc: 'Imbalances are rectified using natural colors, specific metal rods, or celestial crystals. 0% structural changes required.',
        icon: 'Sparkles'
      },
      {
        num: '03',
        title: 'Progressive Remedies',
        desc: 'We introduce subtle remedies and personal name corrections to align the environment’s frequency with supportive forces.',
        icon: 'Sun'
      }
    ]
  },
  whyUs: {
    badge: 'TRUST PRINCIPLES',
    title: 'Why Align With Us?',
    description: 'We provide clear, practical guides that adapt Vastu and Numerology principles to contemporary living standards.',
    benefits: [
      { text: '100% Scientific directional mapping', color: 'var(--color-purple)' },
      { text: 'Custom-tailored Lo Shu grid numerology analysis', color: 'var(--color-yellow)' },
      { text: 'Practical, modern Vastu guidelines (0% demolition)', color: 'var(--color-indigo)' },
      { text: 'Experienced consulting with direct remote guidance', color: 'var(--color-gold)' }
    ],
    stats: [
      { target: 98, suffix: '%', text: 'Harmony Success Rate', border: 'var(--color-purple)', shadow: 'rgba(59, 130, 246, 0.12)' },
      { target: 0, suffix: '%', text: 'Construction Demolitions', border: 'var(--color-indigo)', shadow: 'rgba(16, 185, 129, 0.12)' },
      { target: 16, suffix: '', text: 'Directions Balanced', border: 'var(--color-yellow)', shadow: 'rgba(251, 191, 36, 0.12)' },
      { target: 1500, suffix: '+', text: 'Homes & Offices Cured', border: 'var(--color-gold)', shadow: 'rgba(255, 51, 51, 0.12)' }
    ]
  },
  testimonialSpotlight: {
    quote: '"Through your guidance in Vastu, Astrology, and Numerology, I not only received the right direction but also gained confidence and mental peace. Your suggestions led to absolute clarity, balance, and positive changes in my life."',
    author: 'POOJA KASHYAP',
    role: 'Client & Testimony',
    ctaText: 'Read More Reviews'
  },
  ctaSection: {
    title: 'Ready to Align Your Life?',
    description: 'Take the first step towards a balanced environment. Request your directional mapping consult today.',
    ctaText: 'Schedule Consultation Now'
  }
};

const seedDB = async () => {
  try {
    // 1. Wipe current collections
    await Service.deleteMany({});
    await Blog.deleteMany({});
    await Testimonial.deleteMany({});
    await VastuDirection.deleteMany({});
    await VastuRoom.deleteMany({});
    await VastuMistake.deleteMany({});
    await VastuRemedy.deleteMany({});
    await VastuSeason.deleteMany({});
    await HomeContent.deleteMany({});

    console.log('Database wiped successfully.');

    // 2. Insert static assets
    const servicesWithAvailability = services.map(s => {
      if (s.title.toLowerCase().includes('yogadhan')) {
        return {
          ...s,
          availability: {
            activeDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            slots: [
              { label: 'Morning slots', times: ['10:30 AM', '11:00 AM', '11:30 AM'] },
              { label: 'Afternoon slots', times: ['12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM'] }
            ]
          }
        };
      }
      return {
        ...s,
        availability: {
          activeDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          slots: [
            { label: 'Morning slots', times: ['10:00 AM', '11:15 AM', '11:30 AM'] },
            { label: 'Afternoon slots', times: ['02:00 PM', '03:15 PM', '04:30 PM'] },
            { label: 'Evening slots', times: ['05:45 PM', '06:00 PM', '07:15 PM'] }
          ]
        }
      };
    });
    await Service.insertMany(servicesWithAvailability);
    console.log('Seeded Services.');

    await Blog.insertMany(blogs);
    console.log('Seeded Blogs.');

    await Testimonial.insertMany(testimonials);
    console.log('Seeded Testimonials.');

    await VastuDirection.insertMany(directions);
    console.log('Seeded Vastu Directions.');

    await VastuRoom.insertMany(rooms);
    console.log('Seeded Vastu Rooms.');

    await VastuMistake.insertMany(commonMistakes);
    console.log('Seeded Vastu Mistakes.');

    await VastuRemedy.insertMany(quickRemedies);
    console.log('Seeded Vastu Remedies.');

    await VastuSeason.insertMany(seasons);
    console.log('Seeded Vastu Seasons.');

    await HomeContent.create(defaultHomeContent);
    console.log('Seeded Home Content.');

    console.log('Database seeding complete!');
    process.exit(0);
  } catch (error) {
    console.error(`Database seeding failed: ${error.message}`);
    process.exit(1);
  }
};

// Start seeding
seedDB();
