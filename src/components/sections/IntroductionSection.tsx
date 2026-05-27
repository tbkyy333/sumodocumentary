'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeUp } from '@/lib/variants';

export default function IntroductionSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="introduction" className="relative py-28 md:py-44 overflow-hidden bg-black">
      {/* Subtle background glow */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #c9a96e, transparent 70%)' }}
        />
      </div>

      {/* Left decorative image */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[30vw] max-w-[380px] h-[85%] hidden lg:block"
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/intro1.png?v=3"
            alt=""
            fill
            className="object-cover object-center opacity-85"
            sizes="380px"
          />
          {/* Black fade — right edge */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.05) 0%, transparent 30%, rgba(0,0,0,0.9) 70%, black 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, black 0%, transparent 28%, transparent 72%, black 100%)' }} />
        </div>
      </motion.div>

      {/* Right decorative image */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[30vw] max-w-[380px] h-[85%] hidden lg:block"
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/intro2.png?v=3"
            alt=""
            fill
            className="object-cover object-center opacity-85"
            sizes="380px"
          />
          {/* Black fade — left edge */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to left, rgba(0,0,0,0.05) 0%, transparent 30%, rgba(0,0,0,0.9) 70%, black 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, black 0%, transparent 28%, transparent 72%, black 100%)' }} />
        </div>
      </motion.div>

      {/* Center text */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <p className="label-cinematic mb-4">Introduction</p>
          <div className="gold-divider w-16 mx-auto mb-10" />

          <div
            className="space-y-8 text-gray-300 leading-loose"
            style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
          >
            <p className="text-xl md:text-2xl text-white font-bold tracking-wide">
              大相撲の名門・高砂部屋。
            </p>

            <p className="text-lg md:text-xl text-[#c9a96e]" style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 300, letterSpacing: '0.08em' }}>
              そこは、血のつながりを超えた&ldquo;家族&rdquo;でした
            </p>

            <p className="text-sm md:text-base leading-[2.2]">
              部屋の未来を背負う親方、26人の部屋の力士、<br />
              再起を懸ける元大関・朝乃山、進路に揺れる新弟子候補が<br />
              それぞれの「人生の分岐点」と向き合う
            </p>

            <p className="text-sm md:text-base leading-[2.2]">
              本作では、「情報社会」「自由な選択肢」がある<br />
              今の時代とは逆行した 相撲という伝統的な世界で
            </p>

            <p className="text-base md:text-lg text-white font-semibold leading-relaxed">
              『何を背負い、どう決断し、どう自分の人生を引き受けるのか』
            </p>

            <p className="text-sm md:text-base leading-[2.2]">
              家族、継承、再起、責任という　誰もが抱える人生の問いの中で<br />
              人が強くなっていく瞬間を描く ドキュメンタリー。
            </p>

            <div className="pt-4">
              <div className="gold-divider w-24 mx-auto mb-8" />
              <p
                className="text-xl md:text-2xl text-[#c9a96e]"
                style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 300, letterSpacing: '0.06em' }}
              >
                &lsquo;背負った責任の数が 人の強さになる&rsquo;
              </p>
              <div className="gold-divider w-24 mx-auto mt-8" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
