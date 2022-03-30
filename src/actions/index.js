export const addTable = (tableId) => ({
  type: "ADD_TABLE",
  payload: { table: tableId },
});

export const addToCart = (productId, floor, table) => ({
  type: "ADD_ITEM",
  payload: { id: productId, floor: floor, table: table },
});

export const removeFromCart = (productId, table) => ({
  type: "REMOVE_ITEM",
  payload: { id: productId, table: table },
});

export const addCartPrice = (cartPrice, table) => ({
  type: "ADD_CART_PRICE",
  payload: { cartPrice: cartPrice, table: table },
});
