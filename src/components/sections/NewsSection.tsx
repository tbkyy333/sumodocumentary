'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { staggerContainerSlow, fadeUp } from '@/lib/variants';
import NewsCard from '@/components/ui/NewsCard';
import { news } from '@/data/news';

export default function NewsSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="news" className="bg-black py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="label-cinematic mb-4">Film News</p>
          <div className="gold-divider w-16 mb-6" />
          <h2
            className="text-3xl md:text-4xl text-white font-bold"
            style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
          >
            最新情報
          </h2>
        </motion.div>

        {/* News list */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainerSlow}
          className="flex flex-col gap-6"
        >
          {news.map((item, i) => (
            <NewsCard key={item.id} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
