import PropTypes from 'prop-types';
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: props => `calc(100% - ${props.basketWidth}px)`,
      marginRight: props => props.basketWidth,
    },
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default function NavBarContainer({ basketWidth, children }) {
  const classes = useStyles({ basketWidth });

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar className={classes.toolbar}>{children}</Toolbar>
    </AppBar>
  );
}

NavBarContainer.propTypes = {
  basketWidth: PropTypes.number.isRequired,
  children: PropTypes.number.isRequired,
};
