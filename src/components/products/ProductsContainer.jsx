import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  content: {
    marginLeft: '10px',
    marginRight: '10px',
    minHeight: '75vh',

    borderStyle: 'solid',
    borderColor: 'green',
    borderWidth: '0.5px',
  },
  toolbar: {
    minHeight: '110px',
  },
}));

export default function ProductsContainer({ children }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.toolbar} />
        <div className={classes.content}>{children}</div>
      </div>
    </>
  );
}

ProductsContainer.propTypes = {
  children: PropTypes.any.isRequired,
};
