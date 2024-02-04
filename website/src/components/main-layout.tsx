function MainLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <main>
      <h1>{title}</h1>
      {children}
    </main>
  );
}

export default MainLayout;
