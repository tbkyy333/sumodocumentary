'use client';

import { motion } from 'framer-motion';
import { NewsItem } from '@/types';
import { fadeUp } from '@/lib/variants';

interface NewsCardProps {
  item: NewsItem;
  index: number;
}

export default function NewsCard({ item }: NewsCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      className="group border-b border-white/10 pb-6 cursor-pointer hover:border-[#c9a96e]/40 transition-colors duration-500"
    >
      <div className="flex items-start gap-4">
        {/* Date & category */}
        <div className="flex-shrink-0 w-16 sm:w-20 md:w-24 pt-1">
          <p className="text-[#c9a96e] text-[0.6rem] tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-1" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
            {item.category}
          </p>
          <p className="text-gray-500 text-[0.65rem] sm:text-xs">{item.date}</p>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3
            className="text-white text-sm font-semibold mb-2 leading-relaxed group-hover:text-[#c9a96e] transition-colors duration-300"
            style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
          >
            {item.title}
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
            {item.excerpt}
          </p>
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0 pt-1">
          <motion.span
            className="text-[#c9a96e] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm"
            initial={{ x: -4 }}
            whileHover={{ x: 0 }}
          >
            →
          </motion.span>
        </div>
      </div>
    </motion.article>
  );
}
