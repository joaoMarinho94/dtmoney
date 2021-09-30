import { Summary } from "../Summary";
import { TransactionTable } from "../TranactionsTable";
import { Container } from "./styles";

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
};
