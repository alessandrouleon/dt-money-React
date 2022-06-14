import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HandleProps {
  onOpenNewTansactionModal: () => void;
}
export function Header({ onOpenNewTansactionModal }: HandleProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button onClick={onOpenNewTansactionModal}>Nova transação</button>
      </Content>
    </Container>
  );
}
