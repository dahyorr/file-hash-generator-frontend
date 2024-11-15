import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { Inter } from "next/font/google"
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  "authors": { name: "Dayo Adebanjo", url: "https://dayo.dev" },
  "manifest": "/site.webmanifest",
  "title": "DevUtils",
  "description": "A Swiss army knife for developers",
}

export default function RootLayout(props: any) {
  const { children } = props;
  return (
    <html lang="en">
      +      <body className={inter.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
        <Analytics />
      </body>
    </html>
  );
}
