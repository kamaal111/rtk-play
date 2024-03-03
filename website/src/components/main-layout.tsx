function MainLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <main className="m-4">
      <h1>{title}</h1>
      {children}
    </main>
  );
}

export default MainLayout;
