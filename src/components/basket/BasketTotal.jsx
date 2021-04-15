import { makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  total: {
    display: 'flex',
    width: '100%',

    marginBottom: '10px',
  },
  totalText: {
    minWidth: '50%',
    textAlign: 'center',
    background: theme.palette.background.default,

    fontWeight: 'bold',
    fontStyle: 'italic',

    padding: '5px',

    borderStyle: 'solid',
    borderColor: theme.palette.background.default,
    borderRadius: '15px',

    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

export default function BasketTotal({ products }) {
  const classes = useStyles();

  const total = products.reduce(
    (accumulator, currentValue) => accumulator + parseFloat(currentValue.price) * currentValue.count,
    0
  );

  return (
    <div className={classes.total}>
      <Typography className={classes.totalText}>Total {total.toFixed(2)} lei</Typography>
    </div>
  );
}

BasketTotal.propTypes = {
  products: PropTypes.array.isRequired,
};
