import { useState } from "react";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./NewTransactionModal";
import { GlobalStyle } from "./styles/global";

export const App: React.FC = () => {
  const [isnNewTransactionModalOpen, setIsnNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsnNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsnNewTransactionModalOpen(false);
  }

  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isnNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );
};
