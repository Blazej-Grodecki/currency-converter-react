import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import Container from "./Container";
import Rates from "./Rates";

function App() {
  return (
    <Container>
      <Header title="Kalkulator azjatyckich walut" />
      <Form />
      <p className="form__result">
        <span></span>
      </p>
      <Footer />
    </Container>
  );
}

export default App;
