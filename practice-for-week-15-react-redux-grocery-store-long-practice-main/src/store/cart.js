import CartItem from "../components/Cart/CartItem"

const ADD_CART = "cart/ADD_CART"

export const addCart = add => {
    return {
        type: ADD_CART,
        add
    }
}

export default function cartReducer(state = {}, action) {
    Object.freeze(state)
    const nextState = {...state}
    switch (action.type) {
        case ADD_CART:
            nextState[action.cart.id] = action.cart
        return nextState;
        default:
        return nextState;
    }
}
