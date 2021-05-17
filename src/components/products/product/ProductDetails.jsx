import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

export default function ProductDetails({ details }) {
  return (
    <Typography variant='body2' color='textSecondary' paragraph>
      {details}
    </Typography>
  );
}

ProductDetails.propTypes = {
  details: PropTypes.string.isRequired,
};
