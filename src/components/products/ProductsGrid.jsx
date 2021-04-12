import { makeStyles, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';

const useStyles = makeStyles({
  grid: {
    marginTop: '10px',
  },
});

export default function ProductsGrid({ products }) {
  const classes = useStyles();
  return (
    <Grid container justify='center' spacing={2} className={classes.grid}>
      {products.map((product, index) => (
        <Grid item key={index}>
          <ProductCard summary={product.summary} />
        </Grid>
      ))}
    </Grid>
  );
}

ProductsGrid.propTypes = {
  products: PropTypes.array.isRequired,
};
