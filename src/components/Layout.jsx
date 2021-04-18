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
import { useBasketProducts, BASKET_ACTION } from './basket/useBasketProducts';

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
  const [basketProducts, basketDispatch] = useBasketProducts();
  const classes = useStyles();

  const handleBasketToggle = () => setMobileOpen(!mobileOpen);

  const handleCategoryChange = (title, products) => {
    setCurrentCategory({ title, products });
    moveToTopAnchor();
  };

  const handleProductAdd = product => basketDispatch({ type: BASKET_ACTION.ADD, product });
  const handleCounterIncrease = product => basketDispatch({ type: BASKET_ACTION.INCREASE_COUNTER, product });
  const handleCounterDecrease = product => basketDispatch({ type: BASKET_ACTION.DECREASE_COUNTER, product });

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
