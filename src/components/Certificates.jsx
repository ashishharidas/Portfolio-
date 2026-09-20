import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { certificates } from '../data/portfolio';

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certificates" className="max-w-6xl mx-auto px-6 py-28">
      <SectionHeading kicker="Proof of work" title="Certificates" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certificates.map((c, i) => (
          <motion.button
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            onClick={() => setSelected(c)}
            className="text-left rounded-2xl border overflow-hidden group"
            style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}${c.image}`}
                alt={c.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-medium mb-0.5">{c.title}</h3>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                {c.subtitle}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center p-6"
            style={{ background: 'rgba(13,14,16,0.9)' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display text-lg">{selected.title}</h3>
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className="p-1.5 rounded-full"
                  style={{ background: 'var(--surface)' }}
                >
                  <X size={18} />
                </button>
              </div>
              <img
                src={`${import.meta.env.BASE_URL}${selected.image}`}
                alt={selected.title}
                className="w-full rounded-xl border"
                style={{ borderColor: 'var(--border)' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
