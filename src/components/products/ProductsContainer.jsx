import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import NavBarEmptyHeightFill from '../nav-bar/NavBarEmptyHeightFill';

import BackgroundImage from '../../images/productsBackground.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),

    backgroundImage: `url('${BackgroundImage}')`,
    background: theme.palette.text.secondary,

    minHeight: '100vh',
  },
}));

export default function ProductsContainer({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBarEmptyHeightFill />
      {children}
    </div>
  );
}

ProductsContainer.propTypes = {
  children: PropTypes.any.isRequired,
};
