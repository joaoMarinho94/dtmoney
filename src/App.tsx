import React from "react";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/global";

export const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Header/>
    </div>
  );
};
