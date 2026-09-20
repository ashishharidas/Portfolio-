import { profile } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-10 flex flex-wrap items-center justify-between gap-3 border-t" style={{ borderColor: 'var(--border)' }}>
      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
        © {new Date().getFullYear()} {profile.name}. Built with React &amp; Framer Motion.
      </p>
      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
        Deployed on GitHub Pages
      </p>
    </footer>
  );
}
