const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return { ...state, counter: state.counter + 1 };
    case "ADD_COUNTER":
      return { ...state, counter: state.counter + action.payload.add };
    default:
      return state;
  }
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
  console.log("[Subscription]", store.getState());
});

// Dispatching
store.dispatch({ type: "INCREMENT_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", payload: { add: 10 } });
store.dispatch({ type: "DECREMENT_COUNTER" });

console.log(store.getState());
