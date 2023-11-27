// reducers.js
const initialState = {
  cartItems: [],
}
var newItems = []

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      }
    case 'REMOVE_ITEM':
      newItems = [...state.cartItems]
      newItems.splice(action.payload, 1)
      return {
        cartItems: newItems,
      }
    default:
      return state
  }
}

export default cartReducer