import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  scrollMenuItem: {
    display: 'inline-block',
    textAlign: 'center',
  },
});

export default function ScrollMenuItem({ children }) {
  const classes = useStyles();

  return <div className={classes.scrollMenuItem}>{children}</div>;
}

ScrollMenuItem.propTypes = {
  children: PropTypes.any.isRequired,
};
