import cartReducer, { addToCart, removeFromCart, emptyCart } from "./cart.reducer";
import modalReducer, { modalOpen, modalClose, formOpen, formClose, modalSubmitClose, modalSubmitOpen } from "./modal.reducer";
import { dataFetch } from "./data.reducer";
import favouriteReducer, { addToFavourite, removeFromFavourite } from "./favourite.reducer";

export {
    cartReducer,
    addToCart,
    removeFromCart,
    emptyCart,
    modalReducer,
    modalOpen,
    modalClose,
    dataFetch,
    favouriteReducer,
    addToFavourite,
    removeFromFavourite,
    formOpen,
    formClose,
    modalSubmitClose,
    modalSubmitOpen
}