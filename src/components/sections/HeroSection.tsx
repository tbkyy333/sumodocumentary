'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import TrailerModal from '@/components/ui/TrailerModal';

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], ['0%', '30%']);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <>
      <section
        id="hero"
        className="relative overflow-hidden"
        style={{ minHeight: '100dvh' }}
      >
        {/* Parallax background */}
        <div className="absolute inset-0 overflow-hidden bg-black">
          <motion.div
            className="absolute inset-x-0 top-1/2 -translate-y-1/2"
            style={{ y: bgY }}
          >
            <div
              className="relative overflow-hidden"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
              }}
            >
              {/* Hero image — full width, no horizontal crop */}
              <Image
                src="/images/top.png"
                alt="土俵際 ドキュメンタリー"
                width={0}
                height={0}
                sizes="100vw"
                priority
                className="w-full h-auto block"
              />
              {/* 全体に30%の黒オーバーレイ */}
              <div className="absolute inset-0 bg-black/50 pointer-events-none" />
            </div>
          </motion.div>

          {/* ① 極細ドット格子オーバーレイ — 文字可読性確保 */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.55) 1px, transparent 1px)`,
              backgroundSize: '4px 4px',
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

          {/* Decorative vertical lines */}
          <div
            className="absolute left-1/4 top-0 bottom-0 w-px opacity-10"
            style={{ background: 'linear-gradient(180deg, transparent, #c9a96e, transparent)' }}
          />
          <div
            className="absolute right-1/4 top-0 bottom-0 w-px opacity-10"
            style={{ background: 'linear-gradient(180deg, transparent, #c9a96e, transparent)' }}
          />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center text-center px-6"
          style={{ minHeight: '100dvh', opacity }}
        >
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            animate={{ opacity: 1, letterSpacing: '0.3em' }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="label-cinematic mb-8"
          >
            Documentary Film · 2026
          </motion.p>

          {/* Gold divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.0, delay: 0.5 }}
            className="gold-divider w-24 mb-8"
          />

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none tracking-wider mb-4"
            style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
          >
            土俵際
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.9 }}
            className="text-[#c9a96e] text-lg md:text-2xl tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase mb-2"
            style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 300 }}
          >
            A Story of Pride &amp; Legacy
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 1.1 }}
            className="text-gray-400 text-sm md:text-base max-w-lg leading-relaxed mt-4 mb-12"
            style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
          >
            創立140年——<br className="md:hidden" />
            土俵に生きた男たちの魂を、スクリーンに刻む。
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex items-center justify-center"
          >
            <button
              onClick={() => setModalOpen(true)}
              className="group flex items-center gap-3 px-8 py-3 border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-black transition-all duration-400 text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '0.85rem' }}
            >
              <Play size={14} className="group-hover:scale-110 transition-transform duration-200" />
              紹介映像を観る
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 1.0 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.querySelector('#news')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-gray-500 text-[0.6rem] tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ChevronDown size={16} className="text-[#c9a96e]" />
          </motion.div>
        </motion.div>
      </section>

      <TrailerModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
