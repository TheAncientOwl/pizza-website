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
  const [basketProducts] = useState([...FoodData[0].data, ...FoodData[1].data]);
  const classes = useStyles();

  const handleBasketToggle = () => setMobileOpen(!mobileOpen);

  const handleCategoryChange = (title, products) => {
    setCurrentCategory({ title, products });

    moveToTopAnchor();
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
        <ProductsGrid products={currentCategory.products} />
      </ProductsContainer>

      <BasketContainer width={BASKET_WIDTH} mobileOpen={mobileOpen} onToggle={handleBasketToggle}>
        <BasketTitle />
        <BasketList products={basketProducts} />
      </BasketContainer>
    </div>
  );
}
