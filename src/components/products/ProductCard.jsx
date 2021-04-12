import PropTypes from 'prop-types';

export default function ProductCard({ product }) {
  return <span>{product.summary}</span>;
}

ProductCard.propTypes = {
  product: PropTypes.any.isRequired,
};
