import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FridgeSmart | Smart kitchen control for real households',
  description:
    'FridgeSmart helps people scan groceries, track expiration dates, reduce food waste, and get AI-powered meal ideas from Chef Lumi.',
  metadataBase: new URL('https://www.fridgesmartapp.com'),
  openGraph: {
    title: 'FridgeSmart',
    description:
      'Know what is in your fridge, waste less food, and let Chef Lumi turn ingredients into meals.',
    url: 'https://www.fridgesmartapp.com',
    siteName: 'FridgeSmart',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
