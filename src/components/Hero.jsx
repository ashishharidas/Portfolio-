import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import CursorGlow from './CursorGlow';
import { profile, skills } from '../data/portfolio';

const headlineWords = ['Building', 'systems', 'that', 'stay', 'up.'];

function useElapsed(sinceISO) {
  const [elapsed, setElapsed] = useState('');
  useEffect(() => {
    const since = new Date(sinceISO).getTime();
    const tick = () => {
      const diff = Date.now() - since;
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      const secs = Math.floor((diff % 60000) / 1000);
      setElapsed(`${days}d ${hours}h ${mins}m ${secs}s`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [sinceISO]);
  return elapsed;
}

export default function Hero() {
  // Symbolic "uptime" — time since this page last deployed / was rebuilt.
  const uptime = useElapsed('2026-09-20T00:00:00Z');

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 px-6"
    >
      <CursorGlow />

      {/* faint structural grid, ties to the "systems" subject matter */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-[1.3fr_1fr] gap-14 items-center">
        {/* Left: headline */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm mb-5"
            style={{ color: 'var(--accent)' }}
          >
            {profile.tagline} — {profile.location}
          </motion.p>

          <h1 className="font-display text-[13vw] md:text-6xl lg:text-7xl leading-[1.04] tracking-tight mb-7">
            {headlineWords.map((word, i) => (
              <motion.span
                key={word + i}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mr-[0.28em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="max-w-md text-base md:text-lg leading-relaxed mb-9"
            style={{ color: 'var(--text-muted)' }}
          >
            {profile.subline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center gap-3 flex-wrap"
          >
            <a
              href="#projects"
              className="group relative px-6 py-3 rounded-full text-sm font-medium overflow-hidden"
              style={{ background: 'var(--accent)', color: '#0d0e10' }}
            >
              See my work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full text-sm font-medium border transition-colors hover:bg-[var(--surface)]"
              style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
            >
              Get in touch
            </a>

            <div className="flex items-center gap-1 ml-1">
              {[
                { href: profile.github, Icon: GithubIcon, label: 'GitHub' },
                { href: profile.linkedin, Icon: LinkedinIcon, label: 'LinkedIn' },
                { href: `mailto:${profile.email}`, Icon: Mail, label: 'Email' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-full transition-colors hover:bg-[var(--surface)]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: system status panel */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border p-5"
          style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
              status
            </span>
            <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--accent)' }}>
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                  style={{ background: 'var(--accent)' }}
                />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'var(--accent)' }} />
              </span>
              available for work
            </span>
          </div>

          <div className="mb-5">
            <div className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>
              session uptime
            </div>
            <div className="font-display text-xl tabular-nums">{uptime}</div>
          </div>

          <div className="h-px w-full mb-5" style={{ background: 'var(--border)' }} />

          <div className="space-y-3">
            {skills.map((s, i) => (
              <div key={s.category}>
                <div className="flex justify-between text-xs mb-1.5">
                  <span style={{ color: 'var(--text)' }}>{s.category}</span>
                  <span style={{ color: 'var(--text-muted)' }}>{s.items.length} tools</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--surface-2)' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${70 + i * 6}%` }}
                    transition={{ duration: 1, delay: 1.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full"
                    style={{ background: 'var(--accent)' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2"
        style={{ color: 'var(--text-muted)' }}
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
