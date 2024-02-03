"use client";

import React from "react";

import MainLayout from "@/components/main-layout";
import TodoForm from "@/features/todos/components/todo-form";

function Home() {
  return (
    <MainLayout title="Todos">
      <TodoForm />
    </MainLayout>
  );
}

export default Home;
