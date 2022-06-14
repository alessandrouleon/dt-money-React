import { useState, FormEvent, useContext } from "react";
import Modal from "react-modal";
import { useTransaction } from "../../hooks/useTransaction";
import { api } from "../../service/api";
import closeImg from "../../assets/close.svg";
import entradaImg from "../../assets/entradas.svg";
import saidaImg from "../../assets/saidas.svg";

import { Container, TransactionTypeContainer, RadioBox } from "./style";

interface NewTransactionModalProps {
  isOpenModal: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpenModal,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransaction();
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });
    setTitle("");
    setAmount(0);
    setType("deposit");
    setCategory("");
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-close-modal"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastro de Atividade</h2>
        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={entradaImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={saidaImg} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
