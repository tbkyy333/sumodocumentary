'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Member } from '@/types';
import { fadeUp } from '@/lib/variants';

interface MemberCardProps {
  member: Member;
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative overflow-hidden bg-[#0a0a0a] cursor-pointer"
      style={{ aspectRatio: '3/4' }}
      whileHover="hover"
      initial="initial"
    >
      {/* Image */}
      <div className="absolute inset-0">
        <Image
          src={member.image}
          alt={member.shikona}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
        />
        {/* Default dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Hover overlay - slides up */}
      <motion.div
        variants={{
          initial: { y: '100%' },
          hover: { y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
        }}
        className="absolute inset-0 bg-black/85 flex flex-col justify-end p-3"
        style={{ borderTop: '1px solid rgba(201,169,110,0.5)' }}
      >
        <p className="text-[#c9a96e] text-[0.6rem] tracking-[0.2em] uppercase mb-1" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
          {member.rankEnglish}
        </p>
        <p className="text-white font-bold text-xs" style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}>
          {member.hometown}
        </p>
      </motion.div>

      {/* Bottom always-visible info */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <motion.div
          variants={{
            initial: { opacity: 1 },
            hover: { opacity: 0, transition: { duration: 0.2 } },
          }}
        >
          <p className="text-white font-bold text-sm leading-tight" style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}>
            {member.shikona}
          </p>
          <p className="text-gray-400 text-[0.65rem] mt-0.5">{member.rank}</p>
        </motion.div>
      </div>

      {/* Gold border on hover */}
      <motion.div
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 1, transition: { duration: 0.3 } },
        }}
        className="absolute inset-0 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(201,169,110,0.6)' }}
      />
    </motion.div>
  );
}
