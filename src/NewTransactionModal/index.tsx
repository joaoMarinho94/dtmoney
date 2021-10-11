import React, { FormEvent, useState } from "react";
import Modal from "react-modal";

import { Form, TransactionTypeContainer, RadioBox } from "./styles";

import closeImg from "../assets/close.svg";
import incomeImg from "../assets/income.svg";
import outcomeImg from "../assets/outcome.svg";
import api from "../services/api";

Modal.setAppElement("#root");

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal: React.FC<Props> = ({
  isOpen,
  onRequestClose,
}) => {
  const [type, setType] = useState("deposit");

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState(0);

  async function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();

    const data = {
      title,
      category, 
      value,
      type
    }

    await api.post('/transactions', data)
  }

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

      <Form onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={({ target }) => setValue(Number(target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === "deposit"}
            activeColor="green"
            onClick={() => setType("deposit")}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            isActive={type === "withdraw"}
            activeColor="red"
            onClick={() => setType("withdraw")}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={({ target }) => setCategory(target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Form>
    </Modal>
  );
};
