import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import Container from "./Container";
import { currencies } from "./Currencies";
import Button from "./Button";

function App() {
  return (
    <Container>
      <Header title="Kalkulator azjatyckich walut" />
      <Form currencies={currencies}/>
      <Button />
      <p className="form__result">
        <span></span>
      </p>
      <Footer />
    </Container>
  );
}

export default App;
