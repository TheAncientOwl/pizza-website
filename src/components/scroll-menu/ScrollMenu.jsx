import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  scrollMenu: {
    overflow: 'auto',
    whiteSpace: 'nowrap',
    width: '100%',
  },
});

export default function ScrollMenu({ children }) {
  const classes = useStyles();

  return <div className={classes.scrollMenu}>{children}</div>;
}

ScrollMenu.propTypes = {
  children: PropTypes.any.isRequired,
};
