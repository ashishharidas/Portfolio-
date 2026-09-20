import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile } from '../data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border p-10 md:p-16 text-center relative overflow-hidden"
        style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, var(--accent-dim), transparent 60%)',
          }}
          aria-hidden="true"
        />
        <div className="relative">
          <p className="text-sm mb-3" style={{ color: 'var(--accent)' }}>
            Get in touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-5 max-w-2xl mx-auto">
            Let's build something reliable.
          </h2>
          <p className="max-w-md mx-auto mb-9 text-base" style={{ color: 'var(--text-muted)' }}>
            Open to internships, collaborations, and conversations about cloud & DevOps work.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="inline-block px-7 py-3.5 rounded-full text-sm font-medium mb-8"
            style={{ background: 'var(--accent)', color: '#0d0e10' }}
          >
            {profile.email}
          </a>

          <div className="flex items-center justify-center gap-2">
            {[
              { href: profile.github, Icon: GithubIcon, label: 'GitHub' },
              { href: profile.linkedin, Icon: LinkedinIcon, label: 'LinkedIn' },
              { href: `tel:${profile.phone}`, Icon: Phone, label: 'Phone' },
              { href: `mailto:${profile.email}`, Icon: Mail, label: 'Email' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="p-3 rounded-full border transition-colors hover:border-[var(--accent)]"
                style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
