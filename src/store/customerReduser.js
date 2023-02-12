const defaultState = {
    customer:[]
}


export const customerReduser = (state = defaultState, action) => {
    switch (action.type) {
      case "ADD_CUSTOMER":
        return { ...state, customers: [...state.customers, action.payload] };
      case "REMOVE_CUSTOMERS":
        return { ...state, customers : state.customers.fiter(customer => customer.id !== action.payload) };
      default:
        return state;
    }
  };
  