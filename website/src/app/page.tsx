"use client";

import React from "react";

import MainLayout from "@/components/main-layout";
import TodoForm from "@/features/todos/components/todo-form";
import TodoList from "@/features/todos/components/todo-list";

function Home() {
  return (
    <MainLayout title="Todos">
      <TodoForm />
      <TodoList />
    </MainLayout>
  );
}

export default Home;
