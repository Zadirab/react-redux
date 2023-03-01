import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispath = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispath({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispath({ type: "GET_CASH", payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispath({ type: "ADD_CUSTOMER", payload: customer });
  };

  const removeCustomer = (customer) => {
    dispath({ type: "REMOVE_CUSTOMERS", payload: customer });
  };

  return (
    <div className={"app"}>
      <div><div style={{ fontSize: "18px", color: "blue" }}>{cash}</div></div>
      <div className="cash" style={{ display: "flex" }}>
        <button onClick={() => addCash(Number(prompt()))}>
          Пополнить счет
        </button>
        <button onClick={() => getCash(Number(prompt()))}>
          Снять со счета
        </button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
      </div>
      {customers && customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div onClick={() => removeCustomer(customer.id)}>{customer.name}, {customer.id}</div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: "2 rem" }}>Клиентов нет!</div>
      )}
    </div>
  );
}

export default App;
