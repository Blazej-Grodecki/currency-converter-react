import Header from "./Header";
import Form from "./Form";

function App() {
  return (
    <div className="container">
      <Header title="Kalkulator azjatyckich walut" />
      <Form />
      <p className="form__result">
        <span></span>
      </p>
      <footer className="footer">
        <p>
          CNY = 0.6610, PHP = 0.0818, INR = 5.8179 / 100, JPY = 3.2461 / 100
        </p>
        <p>KRW = 0.3382 / 100, SGD = 3.3886, MYR = 1.0104, THB = 0.1277</p>
      </footer>
    </div>
  );
}

export default App;
