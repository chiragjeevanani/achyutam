/**
 * Resolves local image URLs to load from the backend server dynamically.
 * Handles development (localhost:5000) and production base URLs.
 */
export const getImageUrl = (url) => {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  
  // Find server base URL from VITE_API_URL (e.g. "http://localhost:5000/api/v1")
  const apiUrl = import.meta.env.VITE_API_URL || '';
  let serverBase = 'http://localhost:5000'; // Default fallback
  
  if (apiUrl.startsWith('http')) {
    // Extract base URL (everything before /api)
    const apiIndex = apiUrl.indexOf('/api');
    if (apiIndex !== -1) {
      serverBase = apiUrl.substring(0, apiIndex);
    } else {
      serverBase = apiUrl;
    }
  } else if (typeof window !== 'undefined') {
    // If relative API URL, use current window host
    serverBase = `${window.location.protocol}//${window.location.host}`;
  }

  const cleanUrl = url.startsWith('/') ? url : `/${url}`;
  return `${serverBase}${cleanUrl}`;
};
