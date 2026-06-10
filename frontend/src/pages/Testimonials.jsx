import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Pooja Kashyap',
      text: 'Namaste Uppasna Ji 🙏 It was very nice to receive your message. Before taking the consultation, I had a lot of confusion and uncertainty regarding my life, career, and family matters. Through your guidance in Vastu, Astrology, and Numerology, I gained confidence and mental peace. Your guidance is very simple, practical, and positive. I experienced absolute balance and clarity.',
      rating: 5,
      role: 'Career & Life Guidance Client'
    },
    {
      name: 'Nikhil Jain',
      text: 'Uppasana is amazing with vastu and numerology. I took her course and implemented changes in my house which really helped me in my family relationships. Highly recommend her for your vastu and numerology consults!',
      rating: 5,
      role: 'Course Student & Homeowner'
    },
    {
      name: 'Rajesh Garg',
      text: 'While talking to Upasana Ji, I got highly necessary information and clear guidance to improve my business area of operation. Highly logical and practical approaches.',
      rating: 5,
      role: 'Business Owner'
    },
    {
      name: 'Sushree Sangita',
      text: 'I had a wonderful session with Upasana… Her predictions were very accurate, and she explains the planetary reasons clearly. Thanks a lot! 🙏',
      rating: 5,
      role: 'Astrology Assessment Client'
    },
    {
      name: 'Ratnamanjari',
      text: 'Very deep knowledge of vastu, we are very happy and satisfied with her work. The remedies she gave were easy to apply.',
      rating: 5,
      role: 'Home Vastu Client'
    },
    {
      name: 'Reina',
      text: 'We are very satisfied with the name alignment service. The business name corrections started working in our favor within weeks.',
      rating: 5,
      role: 'Business Name Correction Client'
    }
  ];

  return (
    <div style={{ padding: '45px 20px 40px', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* Title */}
      <section style={{ textAlign: 'center', padding: '0 0 20px' }}>
        <span style={{ color: 'var(--color-gold)', letterSpacing: '0.2em', fontSize: '0.8rem', fontWeight: 'bold' }}>TESTIMONIALS</span>
        <h1 style={{ fontSize: '2.3rem', marginTop: '10px', marginBottom: '15px' }} className="gold-gradient-text">Words of Trust</h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.7' }}>
          Real feedback from individuals and business owners who have experienced growth, stability, and peace through Upasana Ji's alignments.
        </p>
      </section>

      {/* Grid */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px', marginTop: '40px' }}>
        {reviews.map((rev, index) => (
          <div key={index} className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative' }}>
            
            {/* Stars */}
            <div style={{ display: 'flex', gap: '4px', color: 'var(--color-gold)' }}>
              {[...Array(rev.rating)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>

            <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: '1.7', fontStyle: 'italic' }}>
              "{rev.text}"
            </p>

            <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border-glass)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)' }}>{rev.name}</h4>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{rev.role}</span>
              </div>
              <MessageSquare size={20} style={{ color: 'rgba(16, 185, 129, 0.2)' }} />
            </div>

          </div>
        ))}
      </section>

    </div>
  );
}
