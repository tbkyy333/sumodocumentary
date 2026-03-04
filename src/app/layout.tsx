import type { Metadata } from 'next';
import { Noto_Serif_JP, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import NavigationBar from '@/components/ui/NavigationBar';

const notoSerifJP = Noto_Serif_JP({
  variable: '--font-noto-serif-jp',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: '高砂部屋 | ドキュメンタリー映画 2026',
  description:
    '明治18年創立、140年の伝統を誇る高砂部屋。その魂の物語をスクリーンに刻む、感動のドキュメンタリー映画。2026年公開。',
  keywords: ['高砂部屋', '相撲', 'ドキュメンタリー', '映画', '朝乃山', '大関', '力士', 'sumo', 'documentary', 'Takasago'],
  openGraph: {
    title: '高砂部屋 | ドキュメンタリー映画 2026',
    description: '140年の伝統と誇り——土俵に生きる男たちの物語が、今スクリーンへ。',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSerifJP.variable} ${cormorant.variable}`}>
      <body className="antialiased bg-black text-white">
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
