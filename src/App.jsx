import Container from "./components/Container";
import Aside from "./components/Aside";
import SearchInput from "./components/SearchInput";
import Main from "./components/Main";
import Typography from "./components/Typography";
import Card from "./components/Card";

function App() {
  return (
    <Container>
      <Aside />

      <Main>
        <SearchInput />

        <div>
          <Typography variant="h1">
            Olá, Igor!
          </Typography>
          <Typography variant="body">
            Veja como estão suas finanças hoje.
          </Typography>
        </div>

        <section>
          <Card>
            <Card.Header>
              Orçamento diário disponível
            </Card.Header>
            <Card.Body>
              R$ 200,00
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              Progresso da meta financeira
            </Card.Header>
            <Card.Body>
              R$ 200,00
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              Movimentação financeira
            </Card.Header>
            <Card.Body>
              R$ 200,00
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              Minhas contas
            </Card.Header>
            <Card.Body>
              R$ 200,00
            </Card.Body>
          </Card>
        </section>
      </Main>
    </Container>
  );
}

export default App;
