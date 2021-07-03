// Redux is not React specific. It can be used with any javascript project
const redux = require("redux");

// set state default for first run
const counterReducer = (state = { counter: 0 }, action) => {
  // actions are dispatched
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// Subscription method trigers when state changes
// subscribe method already exists
store.subscribe(counterSubscriber);

// Actions
// dispatch just needs type at basic
store.dispatch({
  type: "increment",
});

store.dispatch({
  type: "decrement",
});
