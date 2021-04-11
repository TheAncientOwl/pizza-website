import React, { useState } from 'react';

import { Typography, makeStyles } from '@material-ui/core';

import BasketContainer from './basket/BasketContainer';
import NavBarContainer from './nav-bar/NavBarContainer';
import ProductsContainer from './products/ProductsContainer';
import NavBarLogo from './nav-bar/NavBarLogo';
import BasketToggleButton from './basket/BasketToggleButton';
import NavBarButtons from './nav-bar/NavBarButtons';

const BASKET_WIDTH = 400;

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
});

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();

  const handleBasketToggle = () => setMobileOpen(!mobileOpen);

  return (
    <div className={classes.root}>
      <NavBarContainer basketWidth={BASKET_WIDTH}>
        <NavBarLogo />
        <NavBarButtons />
        <BasketToggleButton onClick={handleBasketToggle} />
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
