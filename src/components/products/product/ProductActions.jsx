import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  actions: {
    display: 'flex',
    padding: '10px',
  },
});

export default function ProductActions({ children }) {
  const classes = useStyles();

  return <div className={classes.actions}>{children}</div>;
}

ProductActions.propTypes = {
  children: PropTypes.any.isRequired,
};
