import { makeStyles, Card, Typography, Button, useTheme } from '@material-ui/core';
import PropTypes from 'prop-types';
import ProductImage from './product-components/ProductImage';
import ProductContent from './product-components/ProductContent';
import Divider from '../Divider';
import ProductActions from './product-components/ProductActions';

const useStyles = makeStyles(theme => ({
  card: {
    background: theme.palette.background.default,

    width: '260px',

    boxShadow: `9px 7px 7px ${theme.palette.secondary.main}`,
  },
  addButton: {
    marginLeft: '2.5%',
    color: theme.palette.text.primary,

    fontWeight: 'bold',

    paddingTop: '5px',
    paddingBottom: '5px',
  },
  price: {
    width: '100%',
    textAlign: 'right',
    paddingRight: '2.5%',
    marginTop: 'auto',
    marginBottom: 'auto',
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
        <Button className={classes.addButton} variant='contained' size='small' color='primary'>
          Add
        </Button>

        <div className={classes.price}>
          <Typography component='span' color='textPrimary'>
            {product.price} lei
          </Typography>
        </div>
      </ProductActions>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.any.isRequired,
};
