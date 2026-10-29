import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Best Institute Nursery to 12th, English Speaking & Free Computer | GD Dream Career Sumel Bagrana Agra Road Jaipur',
  description: 'GD Dream Career (Sumel, Bagrana, Purani Chungi, Vijaypura, Agra Road, Jaipur - 302031) offers 3+ years of top coaching for Nursery to 12th, Spoken English, and Free Computer Education. Led by CEO Dev Sharma (9982216542), Founders Sachin Sharma & Golu Saini.',
  metadataBase: new URL('https://gddreamcareer.online'),
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  keywords: [
    'coaching institute Sumel Bagrana Jaipur',
    'best institute Agra Road Jaipur 302031',
    'Nursery to 12th coaching Purani Chungi Vijaypura',
    'English speaking institute Bagrana Sumel Agra Road',
    'free computer education near Bagrana Sumel',
    'GD Dream Career Jaipur 9982216542',
    'Dev Sharma CEO GD Dream Career',
    'Sachin Sharma Golu Saini founders GD Dream Career'
  ],
  openGraph: {
    title: 'GD Dream Career - Sumel, Bagrana, Agra Road Jaipur 302031',
    description: 'Best Academic & Coaching Institute in Sumel, Bagrana, Purani Chungi, Vijaypura, Agra Road Jaipur. Contact CEO Dev Sharma at 9982216542.',
    url: 'https://gddreamcareer.online',
    siteName: 'GD Dream Career',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// <--- MOBILE STRETCH & RESPONSIVE VIEWPORT FIX --->
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#011F4B',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full w-full">
      <head>
        {/* Google AdSense Verification Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1386817715504553" // <-- Yahan apni AdSense Screen wali ca-pub- ID replace karein
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased min-h-screen w-full max-w-full overflow-x-hidden bg-white text-gray-800">
        {children}
      </body>
    </html>
  );
}