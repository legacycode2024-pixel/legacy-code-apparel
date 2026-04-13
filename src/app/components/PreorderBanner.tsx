'use client';
import { useEffect, useState } from 'react';

export default function PreorderBanner() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date('May 4, 2026 23:59:59');
    const interval = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      if (diff <= 0) { clearInterval(interval); return; }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: '#c9a84c', color: '#0a1931', padding: '10px 20px', textAlign: 'center', fontSize: '14px', fontFamily: 'Arial, sans-serif', fontWeight: '600' }}>
      🎉 LAUNCH PREORDER — $10 OFF + FREE SHIPPING! Closes May 4th &nbsp;|&nbsp;
      {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s remaining
    </div>
  );
}
