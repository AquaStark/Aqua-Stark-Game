import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aqua Stark",
  description: "Building the future of Starknet",
  icons: {
    icon: "/icons/fish.png",
    shortcut: "/icons/fish.png",
    apple: "/icons/fish.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
