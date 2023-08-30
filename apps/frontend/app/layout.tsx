import '../styles/globals.css';
import type { Metadata } from 'next';
import { Providers } from './providers';
import { helveticaNeue } from './fonts/fonts';
import { Sidebar } from '../components/client';

export const metadata: Metadata = {
  title: 'River',
  description: 'Set information free',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${helveticaNeue.variable}`}>
      <body>
        <Providers>
          <Sidebar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
