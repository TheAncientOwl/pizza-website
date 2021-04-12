import PropTypes from 'prop-types';

export default function ProductCard({ summary }) {
  return <span>{summary}</span>;
}

ProductCard.propTypes = {
  summary: PropTypes.string.isRequired,
};
