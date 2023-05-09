import { Inter } from "next/font/google";
import AppHead from "@/components/AppHead";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AppHead />

      <body className={inter.className}>{children}</body>
    </html>
  );
}
