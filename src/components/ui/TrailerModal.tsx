'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { backdropVariants, modalVariants } from '@/lib/variants';

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
  youtubeId?: string;
}

export default function TrailerModal({ isOpen, onClose, youtubeId }: TrailerModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const videoSrc = youtubeId
    ? `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`
    : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8"
          >
            {/* Modal */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute -top-10 right-0 text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 text-sm tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                <X size={16} />
                CLOSE
              </button>

              {/* Video container */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                {videoSrc ? (
                  <iframe
                    src={videoSrc}
                    title="高砂部屋 紹介映像"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ border: '1px solid rgba(201,169,110,0.3)' }}
                  />
                ) : (
                  <div
                    className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-[#0a0a0a]"
                    style={{ border: '1px solid rgba(201,169,110,0.3)' }}
                  >
                    <div className="text-[#c9a96e] text-4xl mb-4">▶</div>
                    <p className="text-gray-400 text-sm tracking-widest uppercase" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
                      Coming Soon
                    </p>
                    <p className="text-gray-600 text-xs mt-2">紹介映像を準備中です</p>
                  </div>
                )}
              </div>

              {/* Caption */}
              <div className="mt-4 flex items-center justify-between">
                <p className="text-gray-500 text-xs tracking-widest uppercase" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
                  Takasago Stable · Official Introduction
                </p>
                <div className="h-px flex-1 mx-4" style={{ background: 'linear-gradient(90deg, rgba(201,169,110,0.4), transparent)' }} />
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
