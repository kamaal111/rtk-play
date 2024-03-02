import * as React from "react";

function MainLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  React.useEffect(() => {
    fetch("http://0.0.0.0:8000")
      .then((response) => response.text())
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <main>
      <h1>{title}</h1>
      {children}
    </main>
  );
}

export default MainLayout;
