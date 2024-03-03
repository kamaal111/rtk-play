"use client";

import React from "react";

import MainLayout from "@/components/main-layout";
import SignUpForm from "@/features/users/components/sign-up-form";

type LoginState = "sign-up";

function Home() {
  const [loginState, setLoginState] = React.useState<LoginState>("sign-up");

  return (
    <MainLayout title="Login">
      {loginState === "sign-up" ? <SignUpForm /> : null}
    </MainLayout>
  );
}

export default Home;
