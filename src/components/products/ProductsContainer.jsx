import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: {
    minHeight: '110px',
  },
}));

export default function ProductsContainer({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <div className={classes.toolbar} />
      {children}
    </div>
  );
}

ProductsContainer.propTypes = {
  children: PropTypes.any.isRequired,
};
