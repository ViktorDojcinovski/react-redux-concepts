const INITIAL_STATE = {
  counter: 1,
};

export const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return {
        counter: ++state.counter,
      };
    case "DECREMENT_COUNTER":
      return {
        counter: --state.counter,
      };

    default:
      return {
        ...state,
      };
  }
};
