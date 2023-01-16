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
      const itemindex = state.carrito.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemindex >= 0) {
        state.carrito[itemindex].cartQuantity += 1;
      } else {
        const product = { ...action.payload, cartQuantity: 1 };
        state.carrito.push(product);
      }
    },
    setDeletecarrito: (state, action) => {
      const id = action.payload.id;
      const NextCarritoDelete = state.carrito.filter(
        (carrito) => carrito.id !== id
      );
      state.carrito = NextCarritoDelete;
    },
    setdecrement: (state, action) => {
      const itemindex = state.carrito.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carrito[itemindex].cartQuantity > 1) {
        state.carrito[itemindex].cartQuantity -= 1;
      } else if (state.carrito[itemindex].cartQuantity === 1) {
        const nextcarrito = state.carrito.filter(
          (item) => item.id !== action.payload.id
        );
        state.carrito = nextcarrito;
      }
    },
    setTotal: (state, action) => {
      let cuentatotal = 0;
      state.carrito.map((carrito) => {
        let total = carrito.price * carrito.cartQuantity;
        cuentatotal = cuentatotal + total;
      });
      state.cartTotalAmount = cuentatotal;
    },
  },
});
export const {
  setTotal,
  setPeople,
  setCarrito,
  setDeletecarrito,
  setdecrement,
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
      dispatch(setCarousel(res.results.slice(0, 9)));
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

export const decrementcarrito = (carrito) => (dispatch) => {
  dispatch(setdecrement(carrito));
  if (carrito.cartQuantity === 1) {
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
  }
};
export const incremento = (carrito) => (dispatch) => {
  dispatch(setCarrito(carrito));
};

export const totalacount = (carrito) => (dispatch) => {
  dispatch(setTotal(carrito));
};
