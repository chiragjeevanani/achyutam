import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, MapPin, Calendar, Clock, Check } from 'lucide-react';

const defaultContactInfo = {
  header: {
    badge: 'CONNECT',
    title: 'Book Consultation',
    description: 'Schedule a custom directional or numerological assessment session with Upasana Ji. Feel free to reach out to our Mumbai headquarters.'
  },
  location: {
    title: 'Our Headquarters',
    label: 'Office Location',
    addressLines: [
      'TS Police Academy, INDIS PBEL CITY,',
      'Nehru Outer Ring Rd, Exit - 18,',
      'Hyderabad, Telangana 500091'
    ]
  },
  whatsapp: {
    label: 'WhatsApp Number',
    number: '+91 95590 96656',
    link: 'https://wa.me/919559096656'
  },
  slots: ['10:00 AM', '11:30 AM', '02:00 PM', '03:30 PM', '05:00 PM']
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', countryCode: '+91', phone: '', service: 'vastu', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [contactInfo, setContactInfo] = useState(null);
  const [errors, setErrors] = useState({});
  const [errorMsg, setErrorMsg] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL || '/api/v1'}/contact-info`)
      .then(res => res.json())
      .then(data => setContactInfo(data))
      .catch(err => console.error('Failed to fetch contact info:', err));
  }, []);

  const activeInfo = contactInfo || defaultContactInfo;
  const times = activeInfo.slots || defaultContactInfo.slots;

  const validateForm = () => {
    const newErrors = {};

    // Name check
    if (!form.name || form.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long.';
    }

    // Email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email || !emailRegex.test(form.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Phone check
    const phoneRegex = /^[0-9]{10}$/;
    if (!form.phone || !phoneRegex.test(form.phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits.';
    }

    // Message check
    if (!form.message || form.message.trim().length < 15) {
      newErrors.message = 'Message details must be at least 15 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setErrorMsg('');

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || '/api/v1'}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim().toLowerCase(),
          phone: `${form.countryCode} ${form.phone.trim()}`,
          service: form.service,
          message: form.message.trim(),
          preferredTime: selectedTime || ''
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const errorData = await res.json();
        setErrorMsg(errorData.message || 'Failed to submit booking request.');
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Network error. Failed to submit.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ padding: '45px 20px 40px', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* Title */}
      <section style={{ textAlign: 'center', padding: '0 0 20px' }} className="reveal-zoom-out">
        <span style={{ color: 'var(--color-purple)', letterSpacing: '0.2em', fontSize: '0.8rem', fontWeight: 'bold' }}>{activeInfo.header.badge}</span>
        <h1 style={{ fontSize: '2.3rem', marginTop: '10px', marginBottom: '15px' }} className="gold-gradient-text">{activeInfo.header.title}</h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.7' }}>
          {activeInfo.header.description}
        </p>
      </section>

      {/* Grid */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px', marginTop: '40px' }} className="contact-grid">
        
        {/* Contact details */}
        <div className="reveal-stagger" data-stagger-step="100" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          
          {(activeInfo.location?.addressLines?.some(line => line && line.trim()) || activeInfo.whatsapp?.number?.trim()) && (
            <div className="glass-panel reveal-left magnetic-hover" style={{ padding: '30px' }}>
              <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', marginBottom: '20px', color: 'var(--color-gold)' }}>{activeInfo.location?.title || 'Our Headquarters'}</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', listStyle: 'none' }}>
                {activeInfo.location?.addressLines?.some(line => line && line.trim()) && (
                  <li style={{ display: 'flex', gap: '16px', color: 'var(--text-primary)', lineHeight: '1.6' }}>
                    <MapPin size={24} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                    <div>
                      {activeInfo.location.label && <strong>{activeInfo.location.label}</strong>}
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>
                        {activeInfo.location.addressLines.filter(line => line && line.trim()).map((line, idx, filtered) => (
                          <React.Fragment key={idx}>
                            {line}
                            {idx < filtered.length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                  </li>
                )}
                {activeInfo.whatsapp?.number?.trim() && (
                  <li style={{ display: 'flex', gap: '16px', alignItems: 'center', color: 'var(--text-primary)' }}>
                    <MessageCircle size={20} style={{ color: 'var(--color-indigo)' }} />
                    <div>
                      {activeInfo.whatsapp.label && <strong>{activeInfo.whatsapp.label}</strong>}
                      <p style={{ marginTop: '2px' }}>
                        <a 
                          href={activeInfo.whatsapp.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                          onMouseEnter={(e) => e.target.style.color = 'var(--color-gold)'}
                          onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                        >
                          {activeInfo.whatsapp.number}
                        </a>
                      </p>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* Time mock */}
          {times && times.length > 0 && times.some(time => time && time.trim()) && (
            <div className="glass-panel reveal-left magnetic-hover" style={{ padding: '30px' }}>
              <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Clock size={20} style={{ color: 'var(--color-purple)' }} /> Today's Time Slots
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {times.filter(time => time && time.trim()).map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '20px',
                      border: '1px solid',
                      borderColor: selectedTime === time ? 'var(--color-purple)' : 'var(--border-glass)',
                      background: selectedTime === time ? 'rgba(59, 130, 246, 0.15)' : 'var(--bg-dark)',
                      color: selectedTime === time ? 'var(--color-purple)' : 'var(--text-primary)',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      transition: 'all 0.2s'
                    }}
                  >
                    {time}
                  </button>
                ))}
              </div>
              {selectedTime && (
                <p style={{ fontSize: '0.85rem', color: 'var(--color-purple)', marginTop: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Check size={14} /> Selected {selectedTime} Slot
                </p>
              )}
            </div>
          )}

        </div>


        {/* Contact Form */}
        <div className="glass-panel reveal-right" style={{ padding: '40px 30px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '16px', padding: '40px 0' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(229, 62, 62, 0.1)', border: '1px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                <Check size={28} style={{ color: 'var(--color-gold)' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)' }}>Booking Requested</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Thank you, <strong>{form.name}</strong>. Your consultation request has been lodged successfully. Our cosmic scheduler will reach out to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="reveal-stagger" data-stagger-step="60" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', marginBottom: '10px' }} className="reveal">Send Consultation Request</h3>
              
              {errorMsg && (
                <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(255, 77, 77, 0.08)', border: '1px solid rgba(255, 77, 77, 0.2)', color: '#ff4d4d', fontSize: '0.85rem' }}>
                  {errorMsg}
                </div>
              )}

              <div className="reveal">
                <label style={{ display: 'block', fontSize: '0.8rem', color: errors.name ? '#ff4d4d' : 'var(--color-indigo)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'bold' }}>Full Name</label>
                <input 
                  type="text" 
                  required 
                  value={form.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    borderRadius: '8px', 
                    background: 'var(--bg-dark)', 
                    border: errors.name ? '1px solid #ff4d4d' : '1px solid var(--border-glass)', 
                    color: 'var(--text-primary)', 
                    fontSize: '0.95rem',
                    outline: 'none'
                  }} 
                  placeholder="e.g. Rahul Sharma"
                />
                {errors.name && (
                  <span style={{ color: '#ff4d4d', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.name}</span>
                )}
              </div>

              <div className="reveal">
                <label style={{ display: 'block', fontSize: '0.8rem', color: errors.phone ? '#ff4d4d' : 'var(--color-indigo)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'bold' }}>Phone Number</label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <select
                    value={form.countryCode}
                    onChange={(e) => setForm({ ...form, countryCode: e.target.value })}
                    style={{ 
                      width: '90px', 
                      padding: '12px', 
                      borderRadius: '8px', 
                      background: 'var(--bg-dark)', 
                      border: errors.phone ? '1px solid #ff4d4d' : '1px solid var(--border-glass)', 
                      color: 'var(--text-primary)', 
                      fontSize: '0.95rem',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="+91">+91 (IN)</option>
                    <option value="+1">+1 (US/CA)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+61">+61 (AU)</option>
                    <option value="+971">+971 (AE)</option>
                    <option value="+65">+65 (SG)</option>
                    <option value="+966">+966 (SA)</option>
                    <option value="+974">+974 (QA)</option>
                    <option value="+977">+977 (NP)</option>
                    <option value="+880">+880 (BD)</option>
                    <option value="+94">+94 (LK)</option>
                  </select>
                  <input 
                    type="tel" 
                    required 
                    value={form.phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, ''); // restrict to only digits
                      if (val.length <= 10) {
                        setForm({ ...form, phone: val });
                      }
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    maxLength={10}
                    style={{ 
                      flex: 1, 
                      padding: '12px', 
                      borderRadius: '8px', 
                      background: 'var(--bg-dark)', 
                      border: errors.phone ? '1px solid #ff4d4d' : '1px solid var(--border-glass)', 
                      color: 'var(--text-primary)', 
                      fontSize: '0.95rem',
                      outline: 'none'
                    }} 
                    placeholder="99000 00000"
                  />
                </div>
                {errors.phone && (
                  <span style={{ color: '#ff4d4d', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.phone}</span>
                )}
              </div>

              <div className="reveal">
                <label style={{ display: 'block', fontSize: '0.8rem', color: errors.email ? '#ff4d4d' : 'var(--color-indigo)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'bold' }}>Email Address</label>
                <input 
                  type="email" 
                  required 
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    borderRadius: '8px', 
                    background: 'var(--bg-dark)', 
                    border: errors.email ? '1px solid #ff4d4d' : '1px solid var(--border-glass)', 
                    color: 'var(--text-primary)', 
                    fontSize: '0.95rem',
                    outline: 'none'
                  }} 
                  placeholder="name@email.com"
                />
                {errors.email && (
                  <span style={{ color: '#ff4d4d', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.email}</span>
                )}
              </div>

              <div className="reveal">
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-indigo)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'bold' }}>Consultation Type</label>
                <select 
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', background: 'var(--bg-dark)', border: '1px solid var(--border-glass)', color: 'var(--text-primary)', fontSize: '0.95rem', outline: 'none' }}
                >
                  <option value="vastu">Maha Vastu Consulting</option>
                  <option value="numerology">Numerology & Name Correction</option>
                  <option value="courses">Vastu/Numerology Courses</option>
                  <option value="astrology">Remedies & Horoscope reading</option>
                </select>
              </div>

              <div className="reveal">
                <label style={{ display: 'block', fontSize: '0.8rem', color: errors.message ? '#ff4d4d' : 'var(--color-indigo)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'bold' }}>Message / Details</label>
                <textarea 
                  rows="4" 
                  required
                  value={form.message}
                  onChange={(e) => {
                    setForm({ ...form, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    borderRadius: '8px', 
                    background: 'var(--bg-dark)', 
                    border: errors.message ? '1px solid #ff4d4d' : '1px solid var(--border-glass)', 
                    color: 'var(--text-primary)', 
                    fontSize: '0.95rem', 
                    resize: 'vertical',
                    outline: 'none'
                  }} 
                  placeholder="Mention your birth details or Vastu site type..."
                />
                {errors.message && (
                  <span style={{ color: '#ff4d4d', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.message}</span>
                )}
              </div>

              <button 
                type="submit" 
                disabled={submitting}
                className="cosmic-button reveal" 
                style={{ width: '100%', justifyContent: 'center', marginTop: '10px', opacity: submitting ? 0.7 : 1, cursor: submitting ? 'not-allowed' : 'pointer' }}
              >
                {submitting ? 'Submitting...' : (
                  <>
                    <Calendar size={18} /> Request Appointment
                  </>
                )}
              </button>

            </form>
          )}
        </div>

      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

    </div>
  );
}
