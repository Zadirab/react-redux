import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispath = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customer.customers);

  const addCash = (cash) => {
    dispath({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispath({ type: "GET_CASH", payload: cash });
  };

  return (
    <div className={"app"}>
      <div style={{ fontSize: "18px", color: "blue" }}>{cash}</div>
      <div style={{ display: "flex" }}>
        <button onClick={() => addCash(Number(prompt()))}>
          Пополнить счет
        </button>
        <button onClick={() => getCash(Number(prompt()))}>
          Снять со счета
        </button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map(customer => (
            <div>{customer}</div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: "2 rem" }}>
          Клиентов нет!
        </div>
      )}
    </div>
  );
}

export default App;
