import { makeStyles, Hidden, SwipeableDrawer, Drawer } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: props => props.width,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: props => props.width,
  },
}));

export default function BasketContainer({ width, mobileOpen, onToggle, children }) {
  const classes = useStyles({ width });

  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation='css'>
        <SwipeableDrawer
          anchor='right'
          container={window.document.body}
          variant='temporary'
          open={mobileOpen}
          onOpen={() => {}}
          onClose={onToggle}
          classes={{ paper: classes.drawerPaper }}
          ModalProps={{ keepMounted: true }}>
          {children}
        </SwipeableDrawer>
      </Hidden>

      <Hidden xsDown implementation='css'>
        <Drawer anchor='right' classes={{ paper: classes.drawerPaper }} variant='permanent' open>
          {children}
        </Drawer>
      </Hidden>
    </nav>
  );
}

BasketContainer.propTypes = {
  width: PropTypes.number.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
};
