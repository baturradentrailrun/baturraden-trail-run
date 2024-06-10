export const metadata = {
  title: "Studio BTR",
  description: "Edit dynamic konten Baturaden Trail Run",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
