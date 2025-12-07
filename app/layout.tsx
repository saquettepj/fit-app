import type { Metadata, Viewport } from 'next';
import './globals.css';
import { AppProvider } from '@/contexts/AppContext';

// Obtém o basePath para usar nos metadados (gerado em build time)
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata: Metadata = {
  title: 'FitGo - App de Exercícios',
  description: 'Aplicativo de exercícios com timer circular',
  icons: {
    icon: [
      { url: `${basePath}/favicon-16x16.png`, sizes: '16x16', type: 'image/png' },
      { url: `${basePath}/favicon-32x32.png`, sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: `${basePath}/android-chrome-192x192.png`, sizes: '192x192', type: 'image/png' },
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
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}

