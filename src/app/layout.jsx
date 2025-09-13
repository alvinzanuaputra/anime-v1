import Navbar from '@/components/Navbar';
import PWAUpdateNotification from '@/components/PWAUpdate';
import '@/app/globals.css';

export const metadata = {
  title: 'ZANUANIME - List Anime Terpopuler',
  description: 'The most popular anime website - discover, track, and explore anime series',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'ZANUANIME',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: 'ZANUANIME',
    title: 'ZANUANIME - List Anime Terpopuler',
    description: 'The most popular anime website - discover, track, and explore anime series',
  },
  twitter: {
    card: 'summary',
    title: 'ZANUANIME - List Anime Terpopuler',
    description: 'The most popular anime website - discover, track, and explore anime series',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  shrinkToFit: 'no',
  userScalable: 'no',
  viewportFit: 'cover',
  themeColor: '#000000',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Gabarito&display=swap"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      </head>
      <body className="font-poppins bg-color-dark" suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <PWAUpdateNotification />
      </body>
    </html>
  );
}
