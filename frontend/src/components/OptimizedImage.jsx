import React, { useState, useRef, useEffect } from 'react';

/**
 * OptimizedImage — Drop-in replacement for <img> with:
 * - Lazy loading (IntersectionObserver) for below-the-fold images
 * - Blur-up placeholder while the real image loads
 * - Smooth fade-in on load
 * - Priority mode for LCP / above-the-fold images
 *
 * Usage:
 *   <OptimizedImage src={url} alt="..." style={{ width: '100%' }} />
 *   <OptimizedImage src={url} alt="..." priority />   ← hero / above-fold
 */
export default function OptimizedImage({
  src,
  alt,
  priority = false,
  style = {},
  className = '',
  ...rest
}) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(priority); // priority images load immediately
  const imgRef = useRef(null);

  // IntersectionObserver — only observe non-priority images
  useEffect(() => {
    if (priority || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // start loading 200px before entering viewport
    );

    const el = imgRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [priority, inView]);

  return (
    <div
      ref={imgRef}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'rgba(30, 27, 36, 0.6)',
        ...style,
      }}
      className={className}
    >
      {/* Blur placeholder shown while loading */}
      {!loaded && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(245,158,11,0.08))',
            backdropFilter: 'blur(4px)',
            animation: 'optimized-img-shimmer 1.5s infinite ease-in-out',
          }}
        />
      )}

      {inView && src && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
          {...rest}
        />
      )}

      <style>{`
        @keyframes optimized-img-shimmer {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
