import { addToCart } from "../constant";

export const addItemsToCart = (data) => {
  console.log("action", data);
  return {
    type: addToCart,
    data: data,
  };
};
// export const removeFromCart = (data) => {
//   return {
//     type: "REMOVE_FROM_CART",
//     data: data,
//   };
// };
