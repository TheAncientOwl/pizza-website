import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core';

import BasketContainer from './basket/BasketContainer';
import BasketToggleButton from './basket/BasketToggleButton';

import NavBarContainer from './nav-bar/NavBarContainer';
import NavBarTitle from './nav-bar/NavBarTitle';
import NavBarButtons from './nav-bar/NavBarButtons';
import { TopAnchor, moveToTopAnchor } from './TopAnchor';

import ProductsContainer from './products/ProductsContainer';
import ProductsTitleBar from './products/ProductsTitleBar';
import ProductsGrid from './products/ProductsGrid';

import FoodData from '../FoodData';
import BasketList from './basket/BasketList';
import BasketTitle from './basket/BasketTitle';
import BasketTotal from './basket/BasketTotal';

const BASKET_WIDTH = 350;

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
});

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState({
    title: FoodData[0].categoryName,
    products: FoodData[0].data,
  });
  const [basketProducts, setBasketProducts] = useState([]);
  const classes = useStyles();

  const handleBasketToggle = () => setMobileOpen(!mobileOpen);

  const handleCategoryChange = (title, products) => {
    setCurrentCategory({ title, products });

    moveToTopAnchor();
  };

  const handleProductAdd = product => {
    const index = basketProducts.findIndex(element => element.summary === product.summary);

    const getNewBasketProducts = () => {
      if (index === -1) return [...basketProducts, { ...product, count: 1 }];

      const newBasketProducts = [...basketProducts];
      newBasketProducts[index].count++;
      return newBasketProducts;
    };

    setBasketProducts(getNewBasketProducts());
  };

  const handleCounterIncrease = product => {
    const index = basketProducts.findIndex(element => element.summary === product.summary);

    const newBasketProducts = [...basketProducts];
    newBasketProducts[index].count++;
    setBasketProducts(newBasketProducts);
  };

  const handleCounterDecrease = product => {
    const index = basketProducts.findIndex(element => element.summary === product.summary);

    const getNewBasketProducts = () => {
      const newBasketProducts = [...basketProducts];
      newBasketProducts[index].count--;

      if (newBasketProducts[index].count === 0) return basketProducts.filter(p => p !== product);

      return newBasketProducts;
    };

    setBasketProducts(getNewBasketProducts());
  };

  return (
    <div className={classes.root}>
      <NavBarContainer basketWidth={BASKET_WIDTH}>
        <NavBarTitle />
        <NavBarButtons onCategoryChange={handleCategoryChange} currentTitle={currentCategory.title} />
        <BasketToggleButton onClick={handleBasketToggle} />
      </NavBarContainer>

      <ProductsContainer>
        <TopAnchor />
        <ProductsTitleBar title={currentCategory.title} />
        <ProductsGrid products={currentCategory.products} onProductAdd={handleProductAdd} />
      </ProductsContainer>

      <BasketContainer width={BASKET_WIDTH} mobileOpen={mobileOpen} onToggle={handleBasketToggle}>
        <BasketTitle />
        <BasketTotal products={basketProducts} />
        <BasketList
          products={basketProducts}
          onCounterIncrease={handleCounterIncrease}
          onCounterDecrease={handleCounterDecrease}
        />
      </BasketContainer>
    </div>
  );
}
