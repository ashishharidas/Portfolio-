import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { skills } from '../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-28">
      <SectionHeading kicker="Toolbox" title="What I work with" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="group rounded-2xl border p-6 transition-colors"
            style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
          >
            <h3 className="font-display text-xl mb-2">{group.category}</h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>
              {group.blurb}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2.5 py-1 rounded-full border transition-colors group-hover:border-[var(--accent)]"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
