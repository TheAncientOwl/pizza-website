import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import ProductDetails from './ProductDetails';
import ProductSummary from './ProductSummary';

const useStyles = makeStyles({
  content: {
    height: '130px',

    paddingTop: '7px',
    paddingLeft: '17px',
    paddingRight: '17px',
    paddingBottom: '10px',
  },
});

export default function ProductContent({ summary, details }) {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <ProductSummary summary={summary} />

      <ProductDetails details={details} />
    </div>
  );
}

ProductContent.propTypes = {
  summary: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};
