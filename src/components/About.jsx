import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const stats = [
  { value: '4+', label: 'Cloud & DevOps tools in daily use' },
  { value: '10', label: 'Certifications completed' },
  { value: '2', label: 'Projects shipped' },
];

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-28">
      <SectionHeading kicker="About" title="A little about how I work" />

      <div className="grid md:grid-cols-[1.2fr_1fr] gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-5 text-base md:text-lg leading-relaxed max-w-xl"
          style={{ color: 'var(--text-muted)' }}
        >
          <p>
            I'm drawn to the layer underneath the app — the pipelines, containers, and cloud
            infrastructure that decide whether software actually stays up. I like taking a
            manual, error-prone process and turning it into something automated and boring
            in the best way.
          </p>
          <p>
            Most of what I build lives at the intersection of cloud computing and DevOps:
            provisioning infrastructure, wiring up CI/CD, and writing the scripts that make
            deployments repeatable instead of stressful.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-1 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="rounded-xl border p-5"
              style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
            >
              <div className="font-display text-3xl mb-1" style={{ color: 'var(--accent)' }}>
                {s.value}
              </div>
              <div className="text-xs md:text-sm" style={{ color: 'var(--text-muted)' }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
