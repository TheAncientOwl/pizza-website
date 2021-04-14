import { makeStyles, Card, useTheme } from '@material-ui/core';
import PropTypes from 'prop-types';
import ProductImage from './ProductImage';
import ProductContent from './ProductContent';
import Divider from '../../Divider';
import ProductActions from './ProductActions';
import AddButton from './AddButton';
import ProductPrice from './ProductPrice';

const useStyles = makeStyles(theme => ({
  card: {
    background: theme.palette.background.default,

    width: '260px',

    boxShadow: `9px 7px 7px ${theme.palette.secondary.main}`,
  },
}));

export default function ProductCard({ product }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.card}>
      <ProductImage src={product.img} alt={product.alt} />

      <ProductContent summary={product.summary} details={product.details} />

      <Divider width='90%' color={theme.palette.text.primary} />

      <ProductActions>
        <AddButton />
        <ProductPrice price={product.price} />
      </ProductActions>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.any.isRequired,
};
