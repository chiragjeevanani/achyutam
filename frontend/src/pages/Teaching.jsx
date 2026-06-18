import React, { useState } from 'react';
import { BookOpen, GraduationCap, Check, HelpCircle, Send, Star, Compass, Shield } from 'lucide-react';

export default function Teaching() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    experience: 'None',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || '/api/v1'}/teaching/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit teaching application.');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '45px 20px 60px', maxWidth: '1240px', margin: '0 auto' }}>
      
      {/* ── HERO HEADER ── */}
      <section style={{ textAlign: 'center', padding: '0 0 40px' }} className="reveal">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', borderRadius: '20px', background: 'rgba(197,168,128,0.1)', border: '1px solid rgba(197,168,128,0.25)', margin: '0 auto 20px' }}>
          <GraduationCap size={15} style={{ color: 'var(--color-gold)' }} />
          <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.12em', color: 'var(--color-gold)' }}>COSMIC TEACHING INITIATIVE</span>
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', marginBottom: '18px' }} className="gold-gradient-text">
          Learn the Art & Teach the Wisdom
        </h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '720px', margin: '0 auto 10px', lineHeight: '1.8', fontSize: '1rem' }}>
          Become a certified carrier of ancient Vedic knowledge. Learn directly from Uppasna Ji, master the intricacies of Vastu & Numerology, and build the foundation to teach and guide others in your own community.
        </p>
      </section>

      {/* ── MAIN CONTENT GRID ── */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', marginTop: '30px' }} className="teaching-grid">
        
        {/* Left Column: Program Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Program Overview */}
          <div className="glass-panel" style={{ padding: '30px' }}>
            <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', marginBottom: '20px', color: 'var(--color-gold)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Star size={20} /> Mentorship & Teacher Training
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.7', marginBottom: '20px' }}>
              Our train-the-trainer cosmic course is crafted for individuals who possess a strong sense of purpose to share wisdom. This is more than a standard certification; it is a spiritual mentorship path.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: <Compass size={18} style={{ color: 'var(--color-indigo)' }} />, title: 'Advanced Vastu Shastra', desc: 'Go deep into directional alignments, planetary layouts, and remedial corrections without demolition.' },
                { icon: <BookOpen size={18} style={{ color: 'var(--color-purple)' }} />, title: 'Pyra-Numerology & Sounds', desc: 'Understand the power of grids, phonetic frequencies, and name correction methods.' },
                { icon: <Shield size={18} style={{ color: 'var(--color-gold)' }} />, title: 'Pedagogical Training', desc: 'Acquire the tools, curriculum, and structure to confidently host your own workshops and courses.' }
              ].map((pill, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ marginTop: '3px' }}>{pill.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '0.92rem', fontWeight: 'bold', color: 'var(--text-heading)' }}>{pill.title}</h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '2px', lineHeight: '1.5' }}>{pill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Requirements */}
          <div className="glass-panel" style={{ padding: '30px' }}>
            <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <HelpCircle size={18} style={{ color: 'var(--color-purple)' }} /> Who is this for?
            </h3>
            <ul style={{ listStyleType: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Aspiring coaches, educators, or consultants wanting a certified niche.',
                'Practitioners seeking to deepen their understanding under individual review.',
                'Passionate individuals with a clean, selfless intent to heal and guide societies.',
                'Willingness to dedicate 6+ hours weekly for training and practicum sessions.'
              ].map((req, idx) => (
                <li key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <Check size={16} style={{ color: 'var(--color-gold)', marginTop: '2px', flexShrink: 0 }} />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Right Column: Application Form */}
        <div className="glass-panel" style={{ padding: '40px 30px', display: 'flex', flexDirection: 'column' }}>
          
          {submitted ? (
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '16px', padding: '50px 0', margin: 'auto' }}>
              <div style={{ width: '68px', height: '68px', borderRadius: '50%', background: 'rgba(197, 168, 128, 0.1)', border: '1.5px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                <Check size={32} style={{ color: 'var(--color-gold)' }} />
              </div>
              <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-serif)', color: 'var(--text-heading)' }}>Application Received</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', maxWidth: '400px', margin: '0 auto' }}>
                Thank you for your interest, <strong>{form.name}</strong>. Your application to join our teaching initiative has been submitted. Uppasna Ji and our academic team will review your profile and reach out within 3 to 5 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: 'var(--text-heading)', margin: '0 0 6px' }}>Apply to Learn & Teach</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Please fill in this application form to request review for the upcoming cohort.</p>
              </div>

              {error && (
                <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(255, 77, 77, 0.08)', border: '1px solid rgba(255, 77, 77, 0.2)', color: '#ff4d4d', fontSize: '0.85rem' }}>
                  {error}
                </div>
              )}

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--color-indigo)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'bold' }}>Full Name</label>
                <input 
                  type="text" 
                  required 
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', background: 'var(--bg-dark)', border: '1px solid var(--border-glass)', color: 'var(--text-primary)', fontSize: '0.95rem' }} 
                  placeholder="Rahul Sharma"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--color-indigo)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'bold' }}>Email Address</label>
                <input 
                  type="email" 
                  required 
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', background: 'var(--bg-dark)', border: '1px solid var(--border-glass)', color: 'var(--text-primary)', fontSize: '0.95rem' }} 
                  placeholder="name@email.com"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--color-indigo)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'bold' }}>Phone Number</label>
                <input 
                  type="tel" 
                  required 
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', background: 'var(--bg-dark)', border: '1px solid var(--border-glass)', color: 'var(--text-primary)', fontSize: '0.95rem' }} 
                  placeholder="+91 99000 00000"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--color-indigo)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'bold' }}>Current Occult Experience</label>
                <select 
                  value={form.experience}
                  onChange={(e) => setForm({ ...form, experience: e.target.value })}
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', background: 'var(--bg-dark)', border: '1px solid var(--border-glass)', color: 'var(--text-primary)', fontSize: '0.95rem' }}
                >
                  <option value="None">None (Absolute Beginner)</option>
                  <option value="Beginner">Beginner (Read books / online material)</option>
                  <option value="Intermediate">Intermediate (Practicing basic adjustments)</option>
                  <option value="Professional">Professional (Working Vastu Consultant / Astrologer)</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--color-indigo)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'bold' }}>Statement of Purpose</label>
                <textarea 
                  rows="5" 
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', background: 'var(--bg-dark)', border: '1px solid var(--border-glass)', color: 'var(--text-primary)', fontSize: '0.95rem', resize: 'vertical', lineHeight: '1.5' }} 
                  placeholder="Explain why you wish to learn these skills and how you plan to teach/guide others in the future..."
                />
              </div>

              <button 
                type="submit" 
                className="cosmic-button" 
                disabled={loading}
                style={{ width: '100%', justifyContent: 'center', marginTop: '10px', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
              >
                {loading ? 'Submitting Application...' : (
                  <>
                    <Send size={16} /> Submit Application
                  </>
                )}
              </button>

            </form>
          )}
        </div>

      </section>

      <style>{`
        @media (max-width: 768px) {
          .teaching-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

    </div>
  );
}
