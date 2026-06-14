import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const SUBTITLES = [
  { start: 0.1, end: 3.2, text: "Welcome to Achyutam Maestro" },
  { start: 3.2, end: 6.2, text: "Vastu & Numerology: Aligning your space and destiny" },
  { start: 6.2, end: 9.5, text: "Ancient wisdom tailored for modern, prosperous living" },
  { start: 9.5, end: 12.8, text: "Yogadhan: Sacred offering brings abundance and harmony" },
  { start: 12.8, end: 15.9, text: "Align your life with cosmic energy today" },
  { start: 15.9, end: 9999, text: "" },
];

// ─── Star generation ──────────────────────────────────────────────────────────
function generateStars(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.7 + 0.3,
    delay: Math.random() * 3,
    duration: Math.random() * 3 + 2,
  }));
}

const STARS = generateStars(220);

export default function Experience() {
  const navigate = useNavigate();

  // Phases: 'entry' → 'stars' → 'playing' → 'end'
  const [phase, setPhase] = useState('entry');
  const [starsVisible, setStarsVisible] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [endVisible, setEndVisible] = useState(false);
  const [btnHover, setBtnHover] = useState(false);
  const [homeBtnHover, setHomeBtnHover] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  const videoRef = useRef(null);
  const animFrameRef = useRef(null);

  // Listen for theme changes
  useEffect(() => {
    const handler = (e) => setTheme(e.detail);
    window.addEventListener('themeChanged', handler);
    return () => window.removeEventListener('themeChanged', handler);
  }, []);

  // ── Active subtitle ──────────────────────────────────────────────────────────
  const activeSubtitle = SUBTITLES.find(
    (s) => currentTime >= s.start && currentTime < s.end
  );

  // ── Video time tracking ──────────────────────────────────────────────────────
  const trackTime = useCallback(() => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
    animFrameRef.current = requestAnimationFrame(trackTime);
  }, []);

  // ── Handle "Enter Experience" click ─────────────────────────────────────────
  const handleEnter = () => {
    setPhase('stars');
    setStarsVisible(true);

    // After stars appear, start video after 2.5s
    setTimeout(() => {
      setPhase('playing');
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
        animFrameRef.current = requestAnimationFrame(trackTime);
      }
    }, 2500);
  };

  // ── Video ended ───────────────────────────────────────────────────────────────
  const handleVideoEnd = () => {
    cancelAnimationFrame(animFrameRef.current);
    setPhase('end');
    setTimeout(() => setEndVisible(true), 300);
  };

  // Cleanup
  useEffect(() => {
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  // ── Logo src ──────────────────────────────────────────────────────────────────
  const logoSrc = theme === 'dark' ? '/achyutamlogodark.png' : '/achyutamlogo.png';

  // ── Inline styles ─────────────────────────────────────────────────────────────
  const containerStyle = {
    position: 'fixed',
    inset: 0,
    background: '#05080F',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  };

  return (
    <div style={containerStyle}>
      {/* ── Starfield ─────────────────────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: starsVisible ? 1 : 0,
          transition: 'opacity 1.5s ease',
          pointerEvents: 'none',
        }}
      >
        {STARS.map((star) => (
          <div
            key={star.id}
            style={{
              position: 'absolute',
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              borderRadius: '50%',
              background: star.size > 3 ? '#FFD700' : '#ffffff',
              boxShadow: star.size > 3
                ? `0 0 ${star.size * 3}px #FFD700`
                : `0 0 ${star.size * 2}px rgba(255,255,255,0.8)`,
              animation: `starTwinkle ${star.duration}s ${star.delay}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* ── VIDEO (hidden during stars phase) ─────────────────────────────── */}
      <video
        ref={videoRef}
        src="/upscaled-video.mp4"
        playsInline
        onCanPlayThrough={() => setVideoReady(true)}
        onEnded={handleVideoEnd}
        onTimeUpdate={() => {}}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 65%',
          opacity: phase === 'playing' || phase === 'end' ? 1 : 0,
          transition: 'opacity 1.5s ease',
          zIndex: 1,
        }}
      />

      {/* ── Video dark overlay ─────────────────────────────────────────────── */}
      {(phase === 'playing' || phase === 'end') && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.7) 100%)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
      )}

      {/* ── PHASE: entry — Animated Enter Button ──────────────────────────── */}
      {phase === 'entry' && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
            zIndex: 10,
            animation: 'fadeInUp 0.8s ease both',
          }}
        >
          {/* Glowing title */}
          <div style={{ textAlign: 'center' }}>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(0.75rem, 1.5vw, 0.95rem)',
                letterSpacing: '0.4em',
                color: '#FFD700',
                marginBottom: '12px',
                opacity: 0.8,
                textTransform: 'uppercase',
              }}
            >
              Achyutam Maestro Presents
            </p>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                background: 'linear-gradient(135deg, #FFD700, #FF3333, #FFD700)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'gradientShift 3s linear infinite',
                letterSpacing: '0.08em',
              }}
            >
              THE EXPERIENCE
            </h1>
          </div>

          {/* Cosmic Enter Button */}
          <button
            onClick={handleEnter}
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            style={{
              position: 'relative',
              padding: '18px 52px',
              background: btnHover
                ? 'linear-gradient(135deg, #FFD700, #FF3333)'
                : 'transparent',
              border: '2px solid #FFD700',
              borderRadius: '50px',
              color: btnHover ? '#05080F' : '#FFD700',
              fontFamily: 'var(--font-serif)',
              fontSize: '1rem',
              letterSpacing: '0.3em',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              textTransform: 'uppercase',
              boxShadow: btnHover
                ? '0 0 40px rgba(255, 215, 0, 0.6), 0 0 80px rgba(255, 51, 51, 0.3)'
                : '0 0 20px rgba(255, 215, 0, 0.2)',
              fontWeight: '600',
              outline: 'none',
              transform: btnHover ? 'scale(1.05)' : 'scale(1)',
            }}
          >
            {/* Orbiting ring */}
            <span
              style={{
                position: 'absolute',
                inset: '-8px',
                borderRadius: '50px',
                border: '1px solid rgba(255, 215, 0, 0.3)',
                animation: 'orbitPulse 2s ease-in-out infinite',
                pointerEvents: 'none',
              }}
            />
            ✦ Enter Experience
          </button>

          {/* Subtle hint */}
          <p
            style={{
              color: 'rgba(255,255,255,0.3)',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Click to begin the journey
          </p>
        </div>
      )}

      {/* ── PHASE: stars — Stars appear, then video fades in ──────────────── */}
      {phase === 'stars' && (
        <div
          style={{
            zIndex: 10,
            textAlign: 'center',
            animation: 'fadeInUp 0.5s ease both',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
              color: '#FFD700',
              letterSpacing: '0.3em',
              textShadow: '0 0 30px #FFD700',
              animation: 'pulse 1.5s ease-in-out infinite alternate',
            }}
          >
            ✦ The cosmos awakens… ✦
          </p>
        </div>
      )}

      {/* ── PHASE: playing — Subtitle overlay ────────────────────────────── */}
      {phase === 'playing' && (
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            textAlign: 'center',
            width: '85%',
            maxWidth: '900px',
            minHeight: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {activeSubtitle?.text && (
            <p
              key={activeSubtitle.start}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.1rem, 2.8vw, 1.9rem)',
                color: '#FFFFFF',
                textShadow: '0 2px 20px rgba(0,0,0,0.9), 0 0 40px rgba(255,215,0,0.3)',
                letterSpacing: '0.05em',
                lineHeight: '1.5',
                animation: 'subtitleFade 0.6s ease both',
                fontWeight: '500',
                padding: '16px 32px',
                background: 'rgba(0,0,0,0.35)',
                borderRadius: '12px',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,215,0,0.15)',
              }}
            >
              {activeSubtitle.text}
            </p>
          )}
        </div>
      )}

      {/* ── PHASE: end — Logo + Go to Home ────────────────────────────────── */}
      {(phase === 'end') && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '36px',
            background: 'rgba(5,8,15,0.75)',
            backdropFilter: 'blur(12px)',
            opacity: endVisible ? 1 : 0,
            transition: 'opacity 1s ease',
          }}
        >
          {/* Logo */}
          <div
            style={{
              animation: 'fadeInScale 1s 0.3s ease both',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <div
              style={{
                padding: '24px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,215,0,0.12) 0%, transparent 70%)',
                boxShadow: '0 0 60px rgba(255,215,0,0.25)',
                animation: 'logoPulse 3s ease-in-out infinite',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '188px',
                height: '188px',
              }}
            >
              <img
                src={logoSrc}
                alt="Achyutam Maestro"
                style={{
                  width: '140px',
                  height: '140px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 30px rgba(255,215,0,0.5))',
                  position: 'relative',
                  top: '12px',
                  
                }}
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                  background: 'linear-gradient(135deg, #FFD700, #FF3333)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '0.1em',
                  marginBottom: '8px',
                }}
              >
                ACHYUTAM MAESTRO
              </h2>
              <p
                style={{
                  color: 'rgba(255,215,0,0.7)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.35em',
                  fontFamily: 'var(--font-sans)',
                  textTransform: 'uppercase',
                }}
              >
                Vastu · Numerology · Harmony
              </p>
            </div>
          </div>

          {/* Go to Home button */}
          <button
            onClick={() => navigate('/')}
            onMouseEnter={() => setHomeBtnHover(true)}
            onMouseLeave={() => setHomeBtnHover(false)}
            style={{
              animation: 'fadeInScale 1s 0.8s ease both',
              padding: '16px 48px',
              background: homeBtnHover
                ? 'linear-gradient(135deg, #FFD700, #FF3333)'
                : 'transparent',
              border: '2px solid #FFD700',
              borderRadius: '50px',
              color: homeBtnHover ? '#05080F' : '#FFD700',
              fontFamily: 'var(--font-serif)',
              fontSize: '0.95rem',
              letterSpacing: '0.25em',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              textTransform: 'uppercase',
              boxShadow: homeBtnHover
                ? '0 0 40px rgba(255,215,0,0.5)'
                : '0 0 15px rgba(255,215,0,0.15)',
              fontWeight: '600',
              outline: 'none',
              transform: homeBtnHover ? 'scale(1.05)' : 'scale(1)',
            }}
          >
            ↩ Go to Home
          </button>
        </div>
      )}

      {/* ── Global keyframes ───────────────────────────────────────────────── */}
      <style>{`
        @keyframes starTwinkle {
          from { opacity: 0.2; transform: scale(0.8); }
          to   { opacity: 1;   transform: scale(1.2); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes gradientShift {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes orbitPulse {
          0%, 100% { transform: scale(1);    opacity: 0.4; }
          50%       { transform: scale(1.08); opacity: 0.9; }
        }
        @keyframes logoPulse {
          0%, 100% { box-shadow: 0 0 60px rgba(255,215,0,0.25); }
          50%       { box-shadow: 0 0 90px rgba(255,215,0,0.45); }
        }
        @keyframes subtitleFade {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          from { opacity: 0.5; }
          to   { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
