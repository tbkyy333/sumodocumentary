'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { staggerContainer, fadeUp } from '@/lib/variants';
import TimelineItem from '@/components/ui/TimelineItem';
import { history } from '@/data/history';

export default function HistorySection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="history" className="bg-[#050505] py-24 md:py-40 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <p className="label-cinematic mb-4">A Legacy on Screen</p>
          <div className="gold-divider w-16 mx-auto mb-6" />
          <h2
            className="text-3xl md:text-5xl text-white font-bold"
            style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
          >
            高砂部屋の歴史
          </h2>
          <p className="text-gray-500 text-sm mt-4">
            1878 — {new Date().getFullYear()}
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          {/* Center line (desktop) */}
          <div className="relative">
            <div
              className="absolute hidden md:block top-0 bottom-0"
              style={{
                left: 'calc(50% - 0.5px)',
                width: '1px',
                background: 'linear-gradient(180deg, transparent, rgba(201,169,110,0.3) 10%, rgba(201,169,110,0.3) 90%, transparent)',
              }}
            />
            {history.map((event, i) => (
              <TimelineItem key={event.id} event={event} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
