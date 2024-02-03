"use client";

import React from "react";
import { Provider } from "react-redux";

import store, { loadStateFromLocalStorage } from ".";

function StoreProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    loadStateFromLocalStorage();
  }, []);

  return <Provider store={store}>{children}</Provider>;
}

export default StoreProvider;
