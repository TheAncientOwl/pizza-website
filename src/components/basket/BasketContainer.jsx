import { makeStyles, Hidden, SwipeableDrawer, Drawer } from '@material-ui/core';
import PropTypes from 'prop-types';

import BackgroundImage from '../../images/productsBackground.jpg';

const useStyles = makeStyles(theme => ({
  container: {
    borderStyle: 'solid',
    borderColor: theme.palette.background.default,
    borderRadius: '15px',

    background: theme.palette.background.default,
    backgroundImage: `url('${BackgroundImage}')`,

    margin: '2.5%',

    width: '95%',
    height: '100%',

    overflow: 'auto',

    padding: '5px',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: props => props.width,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: props => props.width,
    maxWidth: '100vw',
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
          <div className={classes.container}>{children}</div>
        </SwipeableDrawer>
      </Hidden>
      <Hidden xsDown implementation='css'>
        <Drawer anchor='right' classes={{ paper: classes.drawerPaper }} variant='permanent' open>
          <div className={classes.container}>{children}</div>
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
