import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Sharath Devasahayam - Full Stack Developer',
  description: 'Full Stack Developer crafting seamless web experiences with React, Node.js, Python, and AWS',
  keywords: ['Full Stack Developer', 'React', 'Node.js', 'Python', 'AWS', 'TypeScript'],
  authors: [{ name: 'Sharath Devasahayam' }],
  creator: 'Sharath Devasahayam',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
