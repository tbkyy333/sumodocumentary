'use client';

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div>
            <p
              className="text-white font-bold text-xl mb-1 tracking-widest"
              style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
            >
              高砂部屋
            </p>
            <p
              className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: 'var(--font-cormorant), serif' }}
            >
              Documentary Film · 2026
            </p>
            <p className="text-gray-500 text-xs leading-relaxed">
              〒130-0015<br />
              東京都墨田区横網一丁目<br />
              TEL: 03-XXXX-XXXX
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="label-cinematic mb-4">Navigation</p>
            <ul className="space-y-3">
              {['NEWS', 'STORY', 'HISTORY', 'MEMBERS', 'STAFF'].map((label) => (
                <li key={label}>
                  <button
                    onClick={() => document.querySelector(`#${label.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-[#c9a96e] transition-colors duration-300 text-xs tracking-[0.15em] uppercase cursor-pointer"
                    style={{ fontFamily: 'var(--font-cormorant), serif' }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="label-cinematic mb-4">Stable Info</p>
            <div className="space-y-3 text-xs text-gray-500">
              <div>
                <p className="text-gray-400 mb-0.5">稽古見学</p>
                <p>毎月第一日曜 05:30〜</p>
                <p>事前予約不要・見学無料</p>
              </div>
              <div>
                <p className="text-gray-400 mb-0.5">後援会</p>
                <p>高砂部屋後援会事務局</p>
                <p>お問い合わせはメールにて</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="gold-divider mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs tracking-wide">
            © {currentYear} 高砂部屋 Takasago Stable. All Rights Reserved.
          </p>
          <p
            className="text-gray-700 text-[0.6rem] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            Documentary Film · Est. 1885 · Tokyo, Japan
          </p>
        </div>
      </div>
    </footer>
  );
}
