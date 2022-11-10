import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "call",
  initialState: {
    info: [],
    carrito: [],
  },
  reducers: {
    setPeople: (state, action) => {
      state.info = action.payload;
    },
    setCarrito: (state, action) => {
      state.carrito = action.payload;
    },
  },
});
export const { setPeople, setCarrito } = counterSlice.actions;
export default counterSlice.reducer;

export const apicall = () => (dispatch) => {
  fetch("https://api.mercadolibre.com/sites/MLA/search?q=mochilas")
    .then((res) => res.json())
    .then((res) => {
      console.log(res.results);
      dispatch(setPeople(res.results));
    });
};

export const apicallsearch = (path) => (dispatch) => {
  fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${path}`)
    .then((res) => res.json())
    .then((res) => {
      dispatch(setPeople(res.results));
    });
};

export const carritonew = (dato) => (dispatch) => {
  dispatch(setCarrito(dato));
};
