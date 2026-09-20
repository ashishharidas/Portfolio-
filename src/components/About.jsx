
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const stats = [
  { value: 'AI', label: 'Exploring intelligent systems & automation' },
  { value: 'Cloud', label: 'Building with modern cloud technologies' },
  { value: '∞', label: 'Learning, experimenting & building' },
];

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-28">
      <SectionHeading kicker="About" title="Beyond the interface" />

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
            I’m fascinated by the systems people don’t see — the cloud,
            infrastructure, automation, and intelligence that keep modern
            applications moving.
          </p>

          <p>
            I enjoy building, experimenting, breaking things, and rebuilding
            them better. Somewhere between <span style={{ color: 'var(--accent)' }}>
            AI, cloud computing, and DevOps
            </span>, I’m exploring how complex ideas can become simple,
            reliable systems.
          </p>

          <p>
            For me, every project is another excuse to learn something new,
            automate something tedious, and turn an idea into something real.
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
              whileHover={{ y: -4 }}
              className="rounded-xl border p-5 transition-colors"
              style={{
                borderColor: 'var(--border)',
                background: 'var(--surface)',
              }}
            >
              <div
                className="font-display text-3xl mb-1"
                style={{ color: 'var(--accent)' }}
              >
                {s.value}
              </div>

              <div
                className="text-xs md:text-sm"
                style={{ color: 'var(--text-muted)' }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

