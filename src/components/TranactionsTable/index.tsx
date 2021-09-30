import { Container } from "./styles";

export const TransactionTable: React.FC = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12000</td>
            <td>Desenvolvimento</td>
            <td>20/32/2020</td>
          </tr>
          <tr>
            <td>Alugel</td>
            <td className="withdraw">- R$1100</td>
            <td>Casa</td>
            <td>20/32/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
