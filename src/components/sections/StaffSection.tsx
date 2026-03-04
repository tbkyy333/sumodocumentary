'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { staggerContainerSlow, fadeUp } from '@/lib/variants';
import { staff } from '@/data/staff';

export default function StaffSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="staff" className="bg-[#050505] py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="label-cinematic mb-4">Stable · Film Credits</p>
          <div className="gold-divider w-16 mb-6" />
          <h2
            className="text-3xl md:text-4xl text-white font-bold"
            style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
          >
            スタッフ
          </h2>
        </motion.div>

        {/* Staff list */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainerSlow}
          className="space-y-0"
        >
          {staff.map((member) => (
            <motion.div
              key={member.id}
              variants={fadeUp}
              className="group flex items-center justify-between py-5 border-b border-white/8 hover:border-[#c9a96e]/30 transition-colors duration-400"
            >
              <div className="flex items-center gap-6">
                {/* Dot */}
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 group-hover:bg-[#c9a96e] transition-colors duration-300"
                  style={{ background: 'rgba(201,169,110,0.4)' }}
                />
                <div>
                  <p
                    className="text-white text-sm font-semibold group-hover:text-[#c9a96e] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
                  >
                    {member.name}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-sm">{member.role}</p>
                <p
                  className="text-[#c9a96e] text-[0.6rem] tracking-[0.15em] uppercase mt-0.5"
                  style={{ fontFamily: 'var(--font-cormorant), serif' }}
                >
                  {member.roleEnglish}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
