'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { staggerContainer, fadeUp, slideFromLeft } from '@/lib/variants';
import MemberCard from '@/components/ui/MemberCard';
import { oyakata, rikishi } from '@/data/members';

export default function MembersSection() {
  const { ref, isInView } = useScrollAnimation();
  const { ref: ref2, isInView: isInView2 } = useScrollAnimation(0.05);

  return (
    <section id="members" className="bg-black py-24 md:py-40 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="label-cinematic mb-4">Featured in the Film</p>
          <div className="gold-divider w-16 mb-6" />
          <h2
            className="text-3xl md:text-5xl text-white font-bold"
            style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
          >
            力士一覧
          </h2>
        </motion.div>

        {/* Oyakata Feature Card */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={slideFromLeft}
          className="relative mb-12 overflow-hidden group min-h-[240px] sm:min-h-[260px] md:h-[280px]"
        >
          <div className="absolute inset-0 bg-[#0a0a0a]">
            <Image
              src={oyakata.image}
              alt={oyakata.shikona}
              fill
              className="object-cover object-top grayscale opacity-50 group-hover:opacity-70 group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          </div>

          {/* Oyakata info */}
          <div className="relative z-10 flex flex-col justify-center px-6 sm:px-8 md:px-16 py-8 md:py-0 md:h-full max-w-2xl">
            <p className="label-cinematic mb-3">師匠 · As Featured</p>
            <div className="gold-divider w-12 mb-4" />
            <h3
              className="text-4xl md:text-5xl text-white font-bold mb-2"
              style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
            >
              {oyakata.shikona}
            </h3>
            <p className="text-[#c9a96e] text-sm mb-4 tracking-wider" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
              {oyakata.rank}
            </p>
            <p className="text-gray-400 text-xs leading-relaxed max-w-md">
              {oyakata.bio}
            </p>
          </div>

          {/* Gold border */}
          <div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ boxShadow: 'inset 0 0 0 1px rgba(201,169,110,0.4)' }}
          />
        </motion.div>

        {/* Section divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="gold-divider flex-1" />
          <p
            className="text-[#c9a96e] text-[0.65rem] tracking-[0.3em] uppercase whitespace-nowrap"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            On Screen · {rikishi.length}名
          </p>
          <div className="gold-divider flex-1" />
        </div>

        {/* Rikishi Grid - Star Wars cascade style */}
        <motion.div
          ref={ref2}
          initial="hidden"
          animate={isInView2 ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-3"
        >
          {rikishi.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
