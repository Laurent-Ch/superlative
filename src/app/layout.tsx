import "@/src/ui/styles/globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Superlative",
  description: "Lorem Ipsum",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
