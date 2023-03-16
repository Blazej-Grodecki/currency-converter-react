import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <Header title="Kalkulator azjatyckich walut" />
      <Form />
      <p className="form__result">
        <span></span>
      </p>
      <Footer />
    </div>
  );
}

export default App;
