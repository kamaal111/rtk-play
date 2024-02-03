import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RTK play",
  description: "App to play with Redux toolkit",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
