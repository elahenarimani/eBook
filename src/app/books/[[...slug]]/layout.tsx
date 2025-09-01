export default function SlugLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-full h-full bg-[#F5F6F8]">{children}</div>;
}
