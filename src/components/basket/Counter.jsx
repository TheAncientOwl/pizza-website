import PropTypes from 'prop-types';

export default function Counter({ count }) {
  return <div>{count}</div>;
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};
