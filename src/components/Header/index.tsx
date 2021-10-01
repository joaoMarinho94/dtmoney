import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface Props{
  onOpenNewTransactionModal: () => void
}

export const Header: React.FC<Props> = ({onOpenNewTransactionModal}) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="gt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
};
