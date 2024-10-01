import { createSelector } from 'reselect';
import { CartState } from './cartReducer';
import { RootState } from '../store';

const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
)
export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.openCart
)

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, item) => total + item.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
)
