'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeUp } from '@/lib/variants';

function MagazineImage({ src, delay = 0, isInView }: { src: string; delay?: number; isInView: boolean }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.9, delay }}
      className="relative"
    >
      <div className="relative overflow-hidden">
        <Image
          src={src}
          alt=""
          width={0}
          height={0}
          sizes="300px"
          className="w-full h-auto opacity-80"
        />
        {/* Edge fade */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(to bottom, rgba(5,5,5,0.8) 0%, transparent 25%, transparent 75%, rgba(5,5,5,0.8) 100%)',
        }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(to right, rgba(5,5,5,0.6) 0%, transparent 25%, transparent 75%, rgba(5,5,5,0.6) 100%)',
        }} />
      </div>
    </motion.figure>
  );
}

export default function StorySection() {
  const { ref, isInView } = useScrollAnimation();
  const { ref: ref2, isInView: isInView2 } = useScrollAnimation(0.05);

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
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold select-none pointer-events-none opacity-[0.025] leading-none"
          style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
        >
          道
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <p className="label-cinematic mb-4">Story</p>
          <div className="gold-divider w-16 mx-auto mb-6" />
          <h2
            className="text-3xl md:text-5xl text-white font-bold leading-tight"
            style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
          >
            土俵際
          </h2>
        </motion.div>

        {/* Magazine body */}
        <div ref={ref2} className="space-y-16">

          {/* Row 1 — text left, image right */}
          <div className="grid md:grid-cols-[1fr_280px] gap-x-14 gap-y-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.9 }}
              className="space-y-5"
              style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
            >
              <p className="text-gray-300 text-sm leading-[2.4]">
                大相撲は今、海外からの人気が高まる中、新弟子の減少が課題。<br />
                ９０年代、１０００人超いた力士は、現在５００人台。入門者も激減している…
              </p>
              <p className="text-gray-300 text-sm leading-[2.4]">
                １５０年の歴史を持つ名門・高砂部屋。<br />
                モンゴル出身で帰化した高砂親方は 新弟子スカウトに奔走。<br />
                「人生の分岐点で葛藤する若者たち」と向き合い<br />
                人生を預かる者として、責任を負おうとする…
              </p>
            </motion.div>
            <MagazineImage src="/images/story1.png?v=2" delay={0.2} isInView={isInView2} />
          </div>

          {/* Row 2 — image left, text right */}
          <div className="grid md:grid-cols-[280px_1fr] gap-x-14 gap-y-8 items-center">
            <MagazineImage src="/images/story2.png?v=2" delay={0.1} isInView={isInView2} />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="space-y-5 text-right"
              style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
            >
              <p className="text-gray-300 text-sm leading-[2.4]">
                青森では、一度就職した１９歳の青年が、土俵への夢を捨てきれずにいる。<br />
                富山では、重い喘息を抱えながら土俵に立ち続けてきた高校生がいる。<br />
                相撲を続けるには高額な治療が欠かせない。<br />
                大学からの誘いもある中で 本人、母親、指導者の思いは すれ違っていく…
              </p>
            </motion.div>
          </div>

          {/* Row 3 — text left, image right */}
          <div className="grid md:grid-cols-[1fr_280px] gap-x-14 gap-y-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="space-y-5"
              style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
            >
              <p className="text-gray-300 text-sm leading-[2.4]">
                共に、&ldquo;家族&rdquo;となる新弟子候補と向き合うのが 栄光と挫折を知る元大関・朝乃山。<br />
                過去の過ちで地位を失い、大怪我で再び土俵を離れても<br />
                それでもなお立ち上がろうとする彼は<br />
                再起の途中で、今度は&ldquo;自分が背中を見せる側&rdquo;になっていく…
              </p>
              <p className="text-gray-300 text-sm leading-[2.4]">
                人は人生の分岐点で 何を背負い、どう決断するのか。<br />
                &ldquo;責任を背負って生きる強さ&rdquo;を描いた物語。
              </p>
            </motion.div>
            <MagazineImage src="/images/story3.png?v=2" delay={0.2} isInView={isInView2} />
          </div>

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
            &ldquo;Strength is not born in victory.<br />
            It is forged in every burden<br />
            you chose to bear.&rdquo;
          </p>
          <p className="mt-6 text-[#c9a96e] text-xs tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
            — From the Documentary · 土俵際
          </p>
          <div className="gold-divider w-24 mx-auto mt-8" />
        </motion.blockquote>
      </div>
    </section>
  );
}
