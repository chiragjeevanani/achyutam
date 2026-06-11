import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="glass-panel" style={{ marginTop: '80px', borderBottom: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: '40px 40px 0 0', padding: '60px 40px 30px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
        
        {/* Brand */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img 
              src="https://achyutammaestro.com/wp-content/uploads/2026/01/achyutham-logo.jpeg" 
              alt="Logo" 
              style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid var(--color-gold)' }} 
            />
            <div>
              <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)' }}>ACHYUTAM MAESTRO</h3>
              <p style={{ fontSize: '0.7rem', color: 'var(--color-gold)', letterSpacing: '0.15em' }}>VASTU & NUMEROLOGY</p>
            </div>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            Transforming lives, healing spaces, and guiding destiny through deep, practical applications of Vastu, Astrology, and Numerology.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-gold)', marginBottom: '24px', letterSpacing: '0.05em' }}>Useful Links</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none' }}>
            <li><Link to="/" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }} className="footer-link">Home</Link></li>
            <li><Link to="/about" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }} className="footer-link">About Us</Link></li>
            <li><Link to="/services" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }} className="footer-link">Services</Link></li>
            <li><Link to="/yogadhan" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }} className="footer-link">Yogadhan</Link></li>
            <li><Link to="/testimonials" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }} className="footer-link">Testimonials</Link></li>
            <li><Link to="/contact" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }} className="footer-link">Book Consultation</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-gold)', marginBottom: '24px', letterSpacing: '0.05em' }}>Contact Info</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', listStyle: 'none' }}>
            <li style={{ display: 'flex', gap: '12px', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
              <MapPin size={24} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
              <div>
                <strong>Office Location</strong>
                <p>TS Police Academy, INDIS PBEL CITY, Nehru Outer Ring Rd, Exit - 18, Hyderabad, Telangana 500091</p>
              </div>
            </li>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <Phone size={18} style={{ color: 'var(--color-gold)' }} />
              <span>+91 95590 96656</span>
            </li>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <Mail size={18} style={{ color: 'var(--color-gold)' }} />
              <span>connect@achyutammaestro.com</span>
            </li>
          </ul>
        </div>

      </div>

      <div style={{ borderTop: '1px solid var(--border-glass)', marginTop: '50px', paddingTop: '24px', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} Achyutam Maestro. All Rights Reserved. Designed for Cosmic Alignment.
        </p>
      </div>

      <style>{`
        .footer-link:hover {
          color: var(--color-gold) !important;
          padding-left: 4px;
        }
      `}</style>
    </footer>
  );
}
