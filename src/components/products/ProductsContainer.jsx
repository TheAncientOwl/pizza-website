import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ProductsContainer({ children }) {
  const classes = useStyles();

  return <div className={classes.content}>{children}</div>;
}

ProductsContainer.propTypes = {
  children: PropTypes.any.isRequired,
};
