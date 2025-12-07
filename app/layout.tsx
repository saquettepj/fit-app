import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppProvider } from '@/contexts/AppContext';

const inter = Inter({ subsets: ['latin'] });

// Helper para adicionar basePath aos caminhos (necessário para GitHub Pages)
const getAssetPath = (path: string): string => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  // Remove barra duplicada se basePath terminar com / e path começar com /
  if (basePath.endsWith('/') && path.startsWith('/')) {
    return `${basePath}${path.slice(1)}`;
  }
  return `${basePath}${path}`;
};

export const metadata: Metadata = {
  title: 'FitGo - App de Exercícios',
  description: 'Aplicativo de exercícios com timer circular',
  icons: {
    icon: [
      { url: getAssetPath('/favicon-16x16.png'), sizes: '16x16', type: 'image/png' },
      { url: getAssetPath('/favicon-32x32.png'), sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: getAssetPath('/android-chrome-192x192.png'), sizes: '192x192', type: 'image/png' },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}

