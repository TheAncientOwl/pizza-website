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

  return <main className={classes.content}>{children}</main>;
}

ProductsContainer.propTypes = {
  children: PropTypes.any.isRequired,
};
