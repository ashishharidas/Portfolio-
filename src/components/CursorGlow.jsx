import { useEffect, useRef } from 'react';

// A contained cursor-following glow, used only inside the hero section
// (not globally) so it reads as one deliberate moment, not a gimmick.
export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    const handleMove = (e) => {
      const rect = parent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.transform = `translate(${x - 200}px, ${y - 200}px)`;
    };

    parent.addEventListener('mousemove', handleMove);
    return () => parent.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute w-[400px] h-[400px] rounded-full will-change-transform"
      style={{
        background: 'radial-gradient(circle, var(--accent-dim) 0%, transparent 70%)',
        transition: 'transform 0.15s ease-out',
        top: 0,
        left: 0,
      }}
    />
  );
}
