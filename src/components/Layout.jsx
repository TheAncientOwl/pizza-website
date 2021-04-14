import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core';

import BasketContainer from './basket/BasketContainer';
import BasketToggleButton from './basket/BasketToggleButton';

import NavBarContainer from './nav-bar/NavBarContainer';
import NavBarLogo from './nav-bar/NavBarLogo';
import NavBarButtons from './nav-bar/NavBarButtons';
import { TopAnchor, moveToTopAnchor } from './TopAnchor';

import ProductsContainer from './products/ProductsContainer';
import ProductsTitleBar from './products/ProductsTitleBar';
import ProductsGrid from './products/ProductsGrid';

import FoodData from '../FoodData';

const BASKET_WIDTH = 350;

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
});

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(FoodData[0].categoryName);
  const [currentProducts, setCurrentProducts] = useState(FoodData[0].data);
  const classes = useStyles();

  const handleBasketToggle = () => setMobileOpen(!mobileOpen);

  const handleCategoryChange = (title, products) => {
    setCurrentTitle(title);
    setCurrentProducts(products);
    moveToTopAnchor();
  };

  return (
    <div className={classes.root}>
      <NavBarContainer basketWidth={BASKET_WIDTH}>
        <NavBarLogo />
        <NavBarButtons onCategoryChange={handleCategoryChange} currentTitle={currentTitle} />
        <BasketToggleButton onClick={handleBasketToggle} />
      </NavBarContainer>

      <ProductsContainer>
        <TopAnchor />
        <ProductsTitleBar title={currentTitle} />
        <ProductsGrid products={currentProducts} />
      </ProductsContainer>

      <BasketContainer width={BASKET_WIDTH} mobileOpen={mobileOpen} onToggle={handleBasketToggle}>
        <div style={{ textAlign: 'center', marginTop: '10vh' }}>My Basket</div>
      </BasketContainer>
    </div>
  );
}
