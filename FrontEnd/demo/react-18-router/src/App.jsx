import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
    incrementedByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

const { incremented, decremented, incrementedByAmount } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

const selectCounterValue = (state) => state.value;

const currentValue = selectCounterValue(store.getState());

store.subscribe(() => console.log(store.getState()));

export default function App() {
  return <Child currentValue={currentValue} />;
}

function Child({ currentValue }) {
  console.log(currentValue);

  const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
      dispatch(incrementedByAmount(amount));
    }, 1000);
  };

  return (
    <>
      <h2>{currentValue}</h2>
      <button
        onClick={() => {
          store.dispatch(incremented());
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          store.dispatch(decremented());
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          store.dispatch(incrementedByAmount(2));
        }}
      >
        +2
      </button>
      <button onClick={() => incrementAsync(4)(store.dispatch)}>async +</button>
    </>
  );
}
