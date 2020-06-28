import * as types from './actions';

const initialState = {
  cart: [],
  productsInCart: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type) {

    case types.ADD_TO_CART:
      let phone = action.phone;
      console.log('cart state: ', state.cart.concat(phone));
      console.log('total products in cart:', state.productsInCart + 1)
      return  {
        cart: state.cart.concat(phone),
        productsInCart: state.productsInCart + 1
      };

      case types.REMOVE_FROM_CART:
        let index = action.index;
        let newArr = state.cart.splice(index, 1);
        //console.log(newArr);
        return  {
          cart: newArr,
          productsInCart: state.productsInCart - 1
        };

      case types.CLEAR_CART:
        return {
          cart: [],
          productsInCart: 0
        }
    default:
      return state;
  };
};

export default reducer;