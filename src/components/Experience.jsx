import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-28">
      <SectionHeading kicker="Along the way" title="Experience & activities" />

      <div className="relative max-w-2xl">
        <div
          className="absolute left-[7px] top-2 bottom-2 w-px"
          style={{ background: 'var(--border)' }}
          aria-hidden="true"
        />

        <div className="space-y-10">
          {experience.map((e, i) => (
            <motion.div
              key={e.org + i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-10"
            >
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2"
                style={{ borderColor: 'var(--accent)', background: 'var(--bg)' }}
              />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1.5">
                <h3 className="font-display text-xl">{e.role}</h3>
                {e.isPlaceholder && (
                  <span className="text-[11px] px-2 py-0.5 rounded-full border" style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}>
                    add details
                  </span>
                )}
              </div>
              <div className="text-sm mb-2" style={{ color: 'var(--accent)' }}>
                {e.org} · {e.period}
              </div>
              <p className="text-sm leading-relaxed max-w-lg" style={{ color: 'var(--text-muted)' }}>
                {e.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
