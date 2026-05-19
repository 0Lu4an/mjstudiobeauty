import { useState, useCallback } from 'react';

export function useRipple() {
  const [ripples, setRipples] = useState([]);

  const createRipple = useCallback((event) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height);

    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple = {
      x,
      y,
      size,
      id: Date.now()
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) =>
        prev.filter((r) => r.id !== newRipple.id)
      );
    }, 600);
  }, []);

  return { ripples, createRipple };
}

export function RippleContainer({ ripples }) {
  return (
    <span className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            animation: 'ripple 600ms ease-out'
          }}
        />
      ))}
    </span>
  );
}