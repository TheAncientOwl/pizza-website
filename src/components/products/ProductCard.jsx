import { makeStyles, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  card: {
    background: theme.overrides.MuiDrawer.paper.background,

    height: '330px',
    width: '260px',

    boxShadow: `9px 7px 7px ${theme.palette.secondary.main}`,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  content: {
    height: '130px',

    paddingTop: '7px',
    paddingLeft: '17px',
    paddingRight: '17px',
    paddingBottom: '10px',
  },
  divider: {
    width: '90%',
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
  },
}));

export default function ProductCard({ product }) {
  // const { img, alt, summary, details, price } = product;
  const { summary } = product;
  console.log(summary);

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={product.img} title={product.summary} />

      <CardContent className={classes.content}>
        <Typography variant='body1' color='textPrimary'>
          {product.summary}
        </Typography>

        <Typography variant='body2' color='textSecondary' paragraph>
          {product.details}
        </Typography>
      </CardContent>

      <div className={classes.divider} />

      <CardActions className={classes.actions}>
        <Button className={classes.addButton} variant='contained' size='small' color='primary'>
          Add
        </Button>

        <div className={classes.price}>
          <Typography variant='body2' color='textSecondary'>
            DE LA
            <Typography component='span' color='textPrimary'>
              {' '}
              {product.price} lei
            </Typography>
          </Typography>
        </div>
      </CardActions>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.any.isRequired,
};
