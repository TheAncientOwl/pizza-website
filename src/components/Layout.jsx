import React, { useState } from 'react';

import { Typography, makeStyles, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import BasketContainer from './layout-containers/BasketContainer';
import NavBarContainer from './layout-containers/NavBarContainer';
import ProductsContainer from './layout-containers/ProductsContainer';
import NavBarTitle from './nav-bar/NavBarTitle';

const BASKET_WIDTH = 400;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  basketButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    position: 'fixed',
    right: '0',
  },
}));

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();

  const handleBasketToggle = () => setMobileOpen(!mobileOpen);

  return (
    <div className={classes.root}>
      <NavBarContainer basketWidth={BASKET_WIDTH}>
        <NavBarTitle />

        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={handleBasketToggle}
          className={classes.basketButton}>
          <MenuIcon />
        </IconButton>
      </NavBarContainer>

      <ProductsContainer>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
          velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu
          scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt
          lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
          ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
        </Typography>
      </ProductsContainer>

      <BasketContainer width={BASKET_WIDTH} mobileOpen={mobileOpen} onToggle={handleBasketToggle}>
        <div style={{ textAlign: 'center', marginTop: '10vh' }}>My Basket</div>
      </BasketContainer>
    </div>
  );
}
