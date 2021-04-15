import PropTypes from 'prop-types';

import ProductCard from '../products/product/ProductCard';
import ProductImage from '../products/product/ProductImage';
import ProductActions from '../products/product/ProductActions';
import ProductPrice from '../products/product/ProductPrice';

import Divider from '../Divider';
import { makeStyles, useTheme } from '@material-ui/core';
import ProductSummary from '../products/product/ProductSummary';
import Counter from './Counter';

const useStyles = makeStyles(theme => ({
  list: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  productContainer: {
    fontSize: '0.75em',
    borderColor: theme.palette.text.secondary,

    marginLeft: 'auto',
    marginRight: 'auto',

    marginBottom: '10px',
  },
  summaryWrapper: {
    textAlign: 'center',
    marginBottom: '3px',
  },
}));

export default function BasketList({ products }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.list}>
      {products.map((product, index) => (
        <div key={index} className={classes.productContainer}>
          <ProductCard>
            <ProductImage src={product.img} alt={product.alt} />

            <ProductSummary className={classes.summaryWrapper} summary={product.summary} />

            <Divider width='90%' color={theme.palette.text.primary} />

            <ProductActions>
              <Counter count={product.count} />
              <ProductPrice price={`${(parseFloat(product.price) * product.count).toFixed(2)}`} />
            </ProductActions>
          </ProductCard>
        </div>
      ))}
    </div>
  );
}

BasketList.propTypes = {
  products: PropTypes.array.isRequired,
};
