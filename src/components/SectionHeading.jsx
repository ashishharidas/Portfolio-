import { motion } from 'framer-motion';

export default function SectionHeading({ kicker, title, id }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12"
    >
      {kicker && (
        <p className="text-sm mb-2" style={{ color: 'var(--accent)' }}>
          {kicker}
        </p>
      )}
      <h2 id={id} className="font-display text-3xl md:text-4xl tracking-tight">
        {title}
      </h2>
    </motion.div>
  );
}
