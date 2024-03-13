"use client";

import React from "react";

import MainLayout from "@/components/main-layout";
import SignUpForm from "@/features/users/components/sign-up-form";
import LoginForm from "@/features/users/components/login-form";
import LoginSignUpTab from "@/features/users/components/login-sign-up-tab";

type LoginState = "sign-up" | "login";

type Content = { key: LoginState; title: string; view: React.JSX.Element };

const Contents: Content[] = [
  { key: "login", title: "Login", view: <LoginForm /> },
  { key: "sign-up", title: "Sign up", view: <SignUpForm /> },
];

function Home() {
  const [loginState, setLoginState] = React.useState<LoginState>("login");

  const title = React.useMemo(
    () => Contents.find((content) => content.key === loginState)!.title,
    [loginState]
  );

  return (
    <MainLayout title={title}>
      <LoginSignUpTab
        contents={Contents}
        defaultKey={"login"}
        onValueChange={(value) => setLoginState(value)}
      />
    </MainLayout>
  );
}

export default Home;
