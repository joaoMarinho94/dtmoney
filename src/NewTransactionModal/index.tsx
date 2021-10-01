import React from "react";
import Modal from "react-modal";

import { Form, TransactionTypeContainer } from "./styles";

import closeImg from "../assets/close.svg";
import incomeImg from "../assets/income.svg";
import outcomeImg from "../assets/outcome.svg";

Modal.setAppElement("#root");

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal: React.FC<Props> = ({
  isOpen,
  onRequestClose,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Form>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Título" />

        <input type="text" placeholder="Valor" />

        <TransactionTypeContainer>
          <button type="button">
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button type="button">
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Form>
    </Modal>
  );
};
