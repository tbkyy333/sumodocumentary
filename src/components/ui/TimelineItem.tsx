'use client';

import { motion } from 'framer-motion';
import { HistoryEvent } from '@/types';
import { slideFromLeft, slideFromRight } from '@/lib/variants';

interface TimelineItemProps {
  event: HistoryEvent;
  index: number;
}

export default function TimelineItem({ event, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex items-start md:grid md:grid-cols-[1fr_auto_1fr] gap-0 md:gap-6 mb-12">
      {/* Left content (desktop even items only — hidden on mobile) */}
      <div className="hidden md:block md:text-right">
        {isEven && (
          <motion.div variants={slideFromLeft} className="pr-8">
            <ContentBlock event={event} />
          </motion.div>
        )}
      </div>

      {/* Center line & dot */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-3 h-3 rounded-full flex-shrink-0 mt-1.5"
          style={{
            background: event.isHighlight ? '#c9a96e' : '#3f3f3f',
            boxShadow: event.isHighlight ? '0 0 12px rgba(201,169,110,0.6)' : 'none',
          }}
        />
        <div className="w-px flex-1 bg-white/10 min-h-[3rem]" />
      </div>

      {/* Right content (desktop odd items + all mobile) */}
      <div className="flex-1 md:flex-none pl-4 md:pl-0">
        {/* Desktop: odd items only */}
        {!isEven && (
          <motion.div variants={slideFromRight} className="hidden md:block pl-4">
            <ContentBlock event={event} />
          </motion.div>
        )}
        {/* Mobile: all items (no duplication) */}
        <motion.div variants={slideFromRight} className="md:hidden">
          <ContentBlock event={event} />
        </motion.div>
      </div>
    </div>
  );
}

function ContentBlock({ event }: { event: HistoryEvent }) {
  return (
    <div className="pb-2">
      <p
        className="text-[0.6rem] tracking-[0.25em] uppercase mb-1"
        style={{ color: '#c9a96e', fontFamily: 'var(--font-cormorant), serif' }}
      >
        {event.year}
      </p>
      <h3
        className="text-white text-sm font-semibold mb-2 leading-relaxed"
        style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
      >
        {event.title}
      </h3>
      <p className="text-gray-400 text-xs leading-relaxed">
        {event.description}
      </p>
    </div>
  );
}
