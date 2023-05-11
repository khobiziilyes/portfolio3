import AppHead from "@/components/AppHead";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AppHead />

      <body>{children}</body>
    </html>
  );
}
