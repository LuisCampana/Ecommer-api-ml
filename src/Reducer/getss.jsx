import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
export const counterSlice = createSlice({
  name: "call",
  initialState: {
    info: [],
    carrito: [],
    carousel: [],
    cartQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    setPeople: (state, action) => {
      state.info = action.payload;
    },
    setCarousel: (state, action) => {
      state.carousel = action.payload;
    },
    setCarrito: (state, action) => {
      if (
        state.carrito.filter((item) => item.id === action.payload.id).length ===
        0
      ) {
        state.carrito.push(action.payload);
      }
    },
    setDeletecarrito: (state, action) => {
      const id = action.payload.id;
      const NextCarritoDelete = state.carrito.filter(
        (carrito) => carrito.id !== id
      );
      state.carrito = NextCarritoDelete;
    },
    setincrement: (state, action) => {
      state.carrito.cartQuantity = action.payload;
    },
    setdecrement: (state, action) => {
      const itemindex = state.carrito.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(itemindex);
      if (state.carrito[itemindex].cartQuantity > 1) {
        state.carrito[itemindex].cartQuantity -= 1;
      } else if (state.carrito[itemindex].cartQuantity === 1) {
        const nextcarrito = state.carrito.filter(
          (item) => item.id !== action.payload.id
        );
        state.carrito = nextcarrito;
      }
    },
  },
});
export const {
  setPeople,
  setCarrito,
  setDeletecarrito,
  setdecrement,
  setincrement,
  setCarousel,
} = counterSlice.actions;
export default counterSlice.reducer;
const limit = 24;
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
export const apicallcarousel = (path) => (dispatch) => {
  fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${path}`)
    .then((res) => res.json())
    .then((res) => {
      dispatch(setCarousel(res.results.slice(0, 8)));
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

export const decrementcarrito = () => (dispatch) => {
  dispatch(setdecrement());
};
export const incremento = () => (dispatch) => {
  dispatch(setincrement());
};
