import { makeStyles, Grid, useTheme } from '@material-ui/core';
import PropTypes from 'prop-types';

import ProductCard from './product/ProductCard';
import ProductImage from './product/ProductImage';
import ProductContent from './product/ProductContent';
import ProductActions from './product/ProductActions';
import ProductPrice from './product/ProductPrice';
import AddButton from './product/AddButton';

import Divider from '../Divider';

const useStyles = makeStyles({
  grid: {
    marginTop: '10px',
  },
});

export default function ProductsGrid({ products, onProductAdd }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container justify='center' spacing={3} className={classes.grid}>
      {products.map((product, index) => (
        <Grid item key={index}>
          <ProductCard shadows={true}>
            <ProductImage src={product.img} alt={product.alt} />

            <ProductContent summary={product.summary} details={product.details} />

            <Divider width='90%' color={theme.palette.text.primary} />

            <ProductActions>
              <AddButton onClick={() => onProductAdd(product)} />
              <ProductPrice price={product.price} />
            </ProductActions>
          </ProductCard>
        </Grid>
      ))}
    </Grid>
  );
}

ProductsGrid.propTypes = {
  products: PropTypes.array.isRequired,
  onProductAdd: PropTypes.func.isRequired,
};
