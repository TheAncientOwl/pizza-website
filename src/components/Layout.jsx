import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core';

import BasketContainer from './basket/BasketContainer';
import NavBarContainer from './nav-bar/NavBarContainer';
import ProductsContainer from './products/ProductsContainer';

import NavBarLogo from './nav-bar/NavBarLogo';
import BasketToggleButton from './basket/BasketToggleButton';
import NavBarButtons from './nav-bar/NavBarButtons';

import ProductsTitleBar from './products/ProductsTitleBar';

import FoodData from '../FoodData';

const BASKET_WIDTH = 400;

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
});

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentCategory] = useState(FoodData[0].categoryName);
  const [currentProducts] = useState(FoodData[0].data);
  const classes = useStyles();

  const handleBasketToggle = () => setMobileOpen(!mobileOpen);

  return (
    <div className={classes.root}>
      <NavBarContainer basketWidth={BASKET_WIDTH}>
        <NavBarLogo />
        <NavBarButtons />
        <BasketToggleButton onClick={handleBasketToggle} />
      </NavBarContainer>

      <ProductsContainer categoryName={currentCategory} products={currentProducts}>
        <ProductsTitleBar title={currentCategory} />
      </ProductsContainer>

      <BasketContainer width={BASKET_WIDTH} mobileOpen={mobileOpen} onToggle={handleBasketToggle}>
        <div style={{ textAlign: 'center', marginTop: '10vh' }}>My Basket</div>
      </BasketContainer>
    </div>
  );
}
