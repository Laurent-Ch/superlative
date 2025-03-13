import "@/src/ui/styles/globals.scss";
import type { Metadata } from "next";
import Navbar from "../ui/components/Navbar";
import ModalContextProvider from "../lib/context/ModalContextProvider";

export const metadata: Metadata = {
  title: "Superlative",
  description: "Enthusiastic copywriting curation",
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
      <ModalContextProvider>
        <body className="antialiased">
          <Navbar />
          {children}
        </body>
      </ModalContextProvider>
    </html>
  );
}
