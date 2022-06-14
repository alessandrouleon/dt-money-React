import { Summany } from "../Summary";
import { TransactionsTable } from "../TransectionsTable";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <>
      <Container>
        <Summany />
        <TransactionsTable />
      </Container>
    </>
  );
}
