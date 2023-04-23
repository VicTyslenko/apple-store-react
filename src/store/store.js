import { configureStore } from '@reduxjs/toolkit'

import modalReducer from '../reducers/modal.reducer'
import dataReducer from '../reducers/data.reducer'
import { cartReducer } from '../reducers'
import favouriteReducer from '../reducers/favourite.reducer'

const store = configureStore({
    reducer: {
        data: dataReducer,
        modal: modalReducer,
        cart: cartReducer,
        favourite: favouriteReducer
    },
})

export default store