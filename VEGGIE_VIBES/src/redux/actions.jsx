// actions.js
export const addToCart = (item) => ({
  type: 'ADD_TO_CART',
  payload: item,
})

export const removeItem = (index) => ({
  type: 'REMOVE_ITEM',
  payload: index,
})