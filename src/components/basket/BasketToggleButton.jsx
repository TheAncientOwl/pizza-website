import PropTypes from 'prop-types';

import { IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  basketButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    position: 'fixed',
    right: '0',
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
      <MenuIcon />
    </IconButton>
  );
}

BasketToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};