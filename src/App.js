import Header from "./Header";

function App() {
  return (
    <div className="container">
      <Header title="Kalkulator azjatyckich walut" />
      <form className="form js-form">
        <fieldset className="form__fieldset">
          <legend className="form__legend">Przelicz walutę</legend>
          <p>
            <label>
              <span className="form__labelText">Wybierz walutę</span>
              <select
                className="form__field js-currency"
                name="currency"
                title="Wybierz walutę"
              >
                <option value="CNY">CNY (yuan)</option>
                <option value="PHP">PHP (peso)</option>
                <option value="INR">INR (rupia)</option>
                <option value="JPY">JPY (jen)</option>
                <option value="KRW">KRW (won)</option>
                <option value="SGD">SGD (dolar)</option>
                <option value="MYR">MYR (ringgit)</option>
                <option value="THB">THB (baht)</option>
              </select>
            </label>
          </p>
          <p>
            <label>
              <span className="form__labelText">Wpisz kwotę w PLN: </span>
              <input
                className="form__field js-amount"
                type="number"
                min="0.01"
                step="0.01"
                required
                title="Wpisz kwotę"
              />
            </label>
          </p>
        </fieldset>
        <p>
          <button className="form__button">Przelicz</button>
        </p>
      </form>
      <p className="form__result">
        <span className="js-result"></span>
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
