import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
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
      state.carrito.push(action.payload);
    },
    setDeletecarrito: (state, action) => {
      const id = action.payload.id;
      const NextCarritoDelete = state.carrito.filter(
        (carrito) => carrito.id !== id
      );
      state.carrito = NextCarritoDelete;
    },
  },
});
export const { setPeople, setCarrito, setDeletecarrito } = counterSlice.actions;
export default counterSlice.reducer;
const limit = 25;
export const apicall = () => (dispatch) => {
  fetch("https://api.mercadolibre.com/sites/MLA/search?q=mochilas")
    .then((res) => res.json())
    .then((res) => {
      dispatch(setPeople(res.results.slice(0, limit)));
    });
};

export const apicallsearch = (path) => (dispatch) => {
  fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${path}`)
    .then((res) => res.json())
    .then((res) => {
      dispatch(setPeople(res.results.slice(0, limit)));
    });
};

export const carritonew = (carrito) => (dispatch) => {
  dispatch(setCarrito(carrito));
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-start",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });

  Toast.fire({
    icon: "success",
    title: `Se agrego a su carrito: ${carrito.title}`,
  });
};
export const carritodelete = (carrito) => (dispatch) => {
  dispatch(setDeletecarrito(carrito));
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-start",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });
  Toast.fire({
    icon: "error",
    title: `Se elimino de su carrito: ${carrito.title}`,
  });
};
