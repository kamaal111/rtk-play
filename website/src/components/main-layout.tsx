import * as React from "react";

function MainLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  React.useEffect(() => {
    fetch("http://127.0.0.1:8000/health/ping")
      .then((response) => response.json())
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
