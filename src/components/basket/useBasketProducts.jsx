import { useReducer } from 'react';

export const BASKET_ACTION = {
  ADD: 0,
  INCREASE_COUNTER: 1,
  DECREASE_COUNTER: 2,
};

function reducer(products, action) {
  const { product: newProduct } = action;
  const index = products.findIndex(product => product.summary === newProduct.summary);

  const getIncreased = () => {
    const newProducts = [...products];
    newProducts[index].count++;
    return newProducts;
  };

  const getDecreased = () => {
    const newProducts = [...products];
    newProducts[index].count--;
    return newProducts;
  };

  switch (action.type) {
    case BASKET_ACTION.ADD:
      if (index === -1) return [...products, { ...newProduct, count: 1 }];
      return getIncreased();

    case BASKET_ACTION.INCREASE_COUNTER:
      return getIncreased();

    case BASKET_ACTION.DECREASE_COUNTER:
      if (products[index].count === 1) return products.filter(product => product !== newProduct);
      return getDecreased();

    default:
      throw new Error();
  }
}

export const useBasketProducts = () => useReducer(reducer, []);
