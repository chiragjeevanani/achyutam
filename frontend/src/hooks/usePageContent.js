import { useState, useEffect, useRef } from 'react';

/**
 * Hook to fetch CMS page content from backend.
 * Returns { content, loading } where:
 *  - loading=true  → fetch in-flight, render a skeleton instead of default content
 *  - loading=false → content is either the fetched data OR the default (if fetch failed)
 *
 * This prevents default content from ever flashing on screen while the real
 * data is loading.
 *
 * @param {string} endpoint  - API path, e.g. '/home', '/about'
 * @param {*}      defaults  - Fallback content object (only used when fetch fails)
 * @param {function} [validate] - Optional function to validate the fetched data.
 *                                Should return true if the data is usable.
 */
export function usePageContent(endpoint, defaults, validate) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const abortRef = useRef(null);

  useEffect(() => {
    // Cancel any previous in-flight request
    if (abortRef.current) {
      abortRef.current.abort();
    }
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);

    const apiBase = import.meta.env.VITE_API_URL || '/api/v1';
    const url = `${apiBase}${endpoint}`;

    fetch(url, {
      signal: controller.signal,
      // Opt-in to HTTP caching so the browser can serve stale-while-revalidate
      cache: 'default',
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (controller.signal.aborted) return;
        // Use custom validator or accept any truthy object
        const isValid = validate ? validate(data) : !!data;
        setContent(isValid ? data : defaults);
      })
      .catch((err) => {
        if (err.name === 'AbortError') return;
        console.error(`[usePageContent] Failed to fetch ${endpoint}:`, err);
        setContent(defaults);
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, [endpoint]); // eslint-disable-line react-hooks/exhaustive-deps

  return { content: content ?? defaults, loading };
}
