'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeUp, slideFromLeft, slideFromRight } from '@/lib/variants';

export default function StorySection() {
  const { ref, isInView } = useScrollAnimation();
  const { ref: ref2, isInView: isInView2 } = useScrollAnimation();

  return (
    <section id="story" className="relative py-24 md:py-40 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[#050505]">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.03) 2px,
              rgba(255,255,255,0.03) 4px
            )`,
          }}
        />
        {/* Large background kanji */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold select-none pointer-events-none opacity-[0.025] leading-none"
          style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
        >
          道
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Top label */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <p className="label-cinematic mb-4">The Film</p>
          <div className="gold-divider w-16 mx-auto mb-6" />
          <h2
            className="text-3xl md:text-5xl text-white font-bold leading-tight"
            style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
          >
            高砂部屋の物語
          </h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left text */}
          <motion.div
            ref={ref2}
            initial="hidden"
            animate={isInView2 ? 'visible' : 'hidden'}
            variants={slideFromLeft}
          >
            <p className="label-cinematic mb-6">Film Synopsis</p>
            <div className="space-y-4 text-gray-300 leading-loose text-sm" style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}>
              <p>
                大相撲の名門・高砂部屋。
                大相撲の力士が減少する中<br />
                帰化した モンゴル出身・高砂親方の『新弟子スカウト活動』に密着！<br/><br/>
                相撲部屋とは 『人生を預かる場所』<br />
                新弟子候補は 人生の分岐点で葛藤…<br />
                実は、幼いころから抱えてきた病気とも戦っていた。 １８歳の決断は？<br/>
                
                親方と共に向き合うのは 不祥事と大ケガから再起の途中にいる元大関。<br />
                若者の決断と、力士として生きる人生。<br />
                その二つの道が、静かに交差し<br />
                「背負った責任の数」が 人の強さ となっていく…<br/>
                相撲部屋という家族を通して<br />
                『人生の決断において必要なこと』<br />
                『自分の人生を引き受け 責任を背負う姿』 を描く物語。
              </p>
              <p>
                若者が人生を選ぶとき…<br />
                親がその背中を見送るとき…<br />
                誰かの決断を受け止めるとき…
              </p>
              <p>
                きっとこの「高砂部屋ドキュメンタリー」は<br />
                多くの人の心に重なる。
              </p>
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial="hidden"
            animate={isInView2 ? 'visible' : 'hidden'}
            variants={slideFromRight}
            className="space-y-8"
          >
            {[
              { num: '140', label: '創立', sub: 'Years of History' },
              { num: '47', label: '代横綱を輩出', sub: 'Grand Champions' },
              { num: '26', label: '現役力士', sub: 'Active Rikishi' },
              { num: '1', label: '大関在位', sub: 'Ōzeki' },
            ].map(({ num, label, sub }) => (
              <div key={sub} className="flex items-baseline gap-4">
                <span
                  className="text-5xl md:text-6xl font-bold text-white leading-none"
                  style={{ fontFamily: 'var(--font-cormorant), serif' }}
                >
                  {num}
                </span>
                <div>
                  <p className="text-white text-sm font-semibold" style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}>
                    {label}
                  </p>
                  <p className="text-[#c9a96e] text-[0.65rem] tracking-widest uppercase" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
                    {sub}
                  </p>
                </div>
                <div className="flex-1 h-px ml-4" style={{ background: 'linear-gradient(90deg, rgba(201,169,110,0.4), transparent)' }} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.0, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <div className="gold-divider w-24 mx-auto mb-8" />
          <p
            className="text-2xl md:text-3xl text-gray-300 italic leading-relaxed font-light"
            style={{ fontFamily: 'var(--font-cormorant), serif', letterSpacing: '0.05em' }}
          >
            &ldquo;The ring is not just a battlefield.<br />
            It is a mirror of the soul.&rdquo;
          </p>
          <p className="mt-6 text-[#c9a96e] text-xs tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
            — From the Documentary · 高砂部屋
          </p>
          <div className="gold-divider w-24 mx-auto mt-8" />
        </motion.blockquote>
      </div>
    </section>
  );
}
