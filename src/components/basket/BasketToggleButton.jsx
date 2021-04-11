import PropTypes from 'prop-types';

import { IconButton, makeStyles } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles(theme => ({
  basketButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },

    background: theme.palette.background.default,
    color: theme.palette.secondary.main,

    position: 'fixed',
    bottom: '5px',
    left: '17px',

    borderStyle: 'solid',
    borderColor: 'green',
    borderWidth: '0.5px',
  },
}));

export default function BasketToggleButton({ onClick }) {
  const classes = useStyles();

  return (
    <IconButton
      color='inherit'
      aria-label='open drawer'
      edge='start'
      onClick={onClick}
      className={classes.basketButton}>
      <ShoppingCartIcon />
    </IconButton>
  );
}

BasketToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
