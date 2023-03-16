import "./style.css";

const Form = () => (
    <form className="form">
        <fieldset className="form__fieldset">
          <legend className="form__legend">Przelicz walutę</legend>
          <p>
            <label>
              <span className="form__labelText">Wybierz walutę</span>
              <select
                className="form__field"
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
                className="form__field"
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
);

export default Form;