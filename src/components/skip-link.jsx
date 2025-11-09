'use client';

import { useState } from 'react';

// ----------------------------------------------------------------------

export function SkipLink() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <a
      href="#main-content"
      style={{
        position: 'absolute',
        left: isVisible ? '1rem' : '-9999px',
        top: isVisible ? '1rem' : 'auto',
        zIndex: 9999,
        padding: '1rem',
        backgroundColor: '#A97AFF',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '4px',
        fontWeight: 600,
        fontSize: '0.875rem',
      }}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      Zum Hauptinhalt springen
    </a>
  );
}
