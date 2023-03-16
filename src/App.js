import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerAction, removeCustomerAction } from "./store/customerReduser";

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
    dispath(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispath(removeCustomerAction(customer.id));
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
        <button onClick={() => removeCustomer(prompt())}>Удалить клиента</button>
      </div>
      {customers.length > 0 ?
        <div>
          {
            customers.map(customer => (
              <div onClick={() => removeCustomer(customer)} 
              style={{ fontSize: "1rem",
               border: '1px solid black',
               padding: "10px", 
               marginTop: 5 }}>
                {customer.name}
              </div>
            ))
          }
        </div>
        :
        <div style={{ fontSize: "2 rem" }}>Клиентов нет!</div>

      }
    </div >
  );
}

export default App;
