import './globals.css';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import Navbar from '@/components/Navbar';

// הגדרת הפונט העברי
const rubik = Rubik({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-rubik',
  weight: ['400', '500', '700'],
});

// מטא-דאטה לאתר
export const metadata: Metadata = {
  title: 'מכון כושר גמא | אימונים מקצועיים ואיכותיים',
  description: 'אנחנו מכון כושר מוביל בתחום השירותים עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.',
  keywords: 'מכון כושר, אימון, כושר גופני, בריאות, גמא',
  openGraph: {
    title: 'מכון כושר גמא | אימונים מקצועיים ואיכותיים',
    description: 'אנחנו מכון כושר מוביל בתחום השירותים עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.',
    url: 'https://gamma-gym.co.il',
    siteName: 'מכון כושר גמא',
    locale: 'he_IL',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
        width: 1200,
        height: 630,
        alt: 'מכון כושר גמא',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={`${rubik.variable}`}>
      <body className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-right">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}