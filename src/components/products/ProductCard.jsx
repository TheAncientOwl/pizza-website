import { makeStyles, Card, Typography, CardActions, Button, useTheme } from '@material-ui/core';
import PropTypes from 'prop-types';
import ProductImage from './product-components/ProductImage';
import ProductContent from './product-components/ProductContent';
import Divider from '../Divider';

const useStyles = makeStyles(theme => ({
  card: {
    background: theme.palette.background.default,

    width: '260px',

    boxShadow: `9px 7px 7px ${theme.palette.secondary.main}`,
  },
  divider: {
    width: '90%',
    marginTop: '5px',
    marginLeft: 'auto',
    marginRight: 'auto',

    borderStyle: 'solid',
    borderWidth: '0.5px',
    borderRadius: '2px',
    borderColor: theme.palette.text.secondary,
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

      <CardActions className={classes.actions}>
        <Button className={classes.addButton} variant='contained' size='small' color='primary'>
          Add
        </Button>

        <div className={classes.price}>
          <Typography component='span' color='textPrimary'>
            {product.price} lei
          </Typography>
        </div>
      </CardActions>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.any.isRequired,
};
