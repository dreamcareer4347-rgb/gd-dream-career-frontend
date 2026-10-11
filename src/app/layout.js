import './globals.css';

export const metadata = {
  title: 'GD Dream Career Institute | Learn Today. Lead Tomorrow.',
  description: 'Official Student Performance Portal & Progress Dashboard',
  manifest: '/manifest.json',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}