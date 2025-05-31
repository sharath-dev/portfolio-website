import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Sharath Devasahayam - Full Stack Developer',
  description: 'Full Stack Developer crafting seamless web experiences with React, Node.js, Python, and AWS',
  keywords: ['Full Stack Developer', 'React', 'Node.js', 'Python', 'AWS', 'TypeScript'],
  authors: [{ name: 'Sharath Devasahayam' }],
  creator: 'Sharath Devasahayam',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body
        className={`bg-terminal text-green-400 font-mono antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
