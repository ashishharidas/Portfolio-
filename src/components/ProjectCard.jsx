import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, borderColor: 'var(--border)', background: 'var(--surface)' }}
        className="rounded-2xl border p-7 h-full flex flex-col"
      >
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-display text-2xl">{project.name}</h3>
          {project.isPlaceholder && (
            <span
              className="text-[11px] px-2 py-1 rounded-full border shrink-0"
              style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
            >
              details coming soon
            </span>
          )}
        </div>

        <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: 'var(--text-muted)' }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full"
              style={{ background: 'var(--surface-2)', color: 'var(--text-muted)' }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm" style={{ color: 'var(--text)' }}>
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:opacity-70">
              <GithubIcon size={16} /> Code
            </a>
          ) : (
            <span className="flex items-center gap-1.5 opacity-40 cursor-default">
              <GithubIcon size={16} /> Code
            </span>
          )}
          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:opacity-70">
              <ExternalLink size={16} /> Live demo
            </a>
          ) : (
            <span className="flex items-center gap-1.5 opacity-40 cursor-default">
              <ExternalLink size={16} /> Live demo
            </span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
