'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeUp, staggerContainerSlow } from '@/lib/variants';
import { staffCredits, filmingCooperation, sponsors } from '@/data/credits';

function CreditBlock({
  title,
  titleEn,
  children,
  isInView,
}: {
  title: string;
  titleEn: string;
  children: React.ReactNode;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainerSlow}
      className="mb-16 last:mb-0"
    >
      {/* Block header */}
      <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-white/10" />
        <div className="text-center">
          <p className="label-cinematic">{titleEn}</p>
          <p
            className="text-white text-sm mt-1"
            style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
          >
            {title}
          </p>
        </div>
        <div className="flex-1 h-px bg-white/10" />
      </motion.div>

      {children}
    </motion.div>
  );
}

export default function CreditsSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="credits" className="bg-[#050505] py-24 md:py-36 px-6 overflow-hidden">
      <div className="max-w-2xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <p className="label-cinematic mb-4">Film Credits</p>
          <div className="gold-divider w-16 mx-auto mb-6" />
          <h2
            className="text-3xl md:text-4xl text-white font-bold"
            style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
          >
            クレジット
          </h2>
        </motion.div>

        {/* Staff */}
        <CreditBlock title="スタッフ" titleEn="Staff" isInView={isInView}>
          {staffCredits.map((item) => (
            <motion.div
              key={item.role}
              variants={fadeUp}
              className="flex items-baseline justify-between py-4 border-b border-white/5"
            >
              <p
                className="text-gray-500 text-xs tracking-[0.15em] uppercase w-32 flex-shrink-0"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                {item.role}
              </p>
              <p
                className="text-white text-sm text-right"
                style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
              >
                {item.name}
              </p>
            </motion.div>
          ))}
        </CreditBlock>

        {/* Filming Cooperation + Sponsors - side by side */}
        <div className="grid grid-cols-2 gap-8 mt-0">
          {/* Filming Cooperation */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainerSlow}
            className="mb-0"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-white/10" />
              <div className="text-center">
                <p className="text-[#c9a96e] text-[0.6rem] tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Special Thanks</p>
                <p className="text-white text-xs mt-0.5" style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}>撮影協力</p>
              </div>
              <div className="flex-1 h-px bg-white/10" />
            </motion.div>
            <div className="flex flex-col items-center gap-3">
              {filmingCooperation.map((name, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  className="text-gray-400 text-xs text-center"
                  style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
                >
                  {name}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Sponsors */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainerSlow}
            className="mb-0"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-white/10" />
              <div className="text-center">
                <p className="text-[#c9a96e] text-[0.6rem] tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Sponsors</p>
                <p className="text-white text-xs mt-0.5" style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}>協賛</p>
              </div>
              <div className="flex-1 h-px bg-white/10" />
            </motion.div>
            <div className="flex flex-col items-center gap-3">
              {sponsors.map((name, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  className="text-gray-400 text-xs text-center tracking-wider"
                  style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
                >
                  {name}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
