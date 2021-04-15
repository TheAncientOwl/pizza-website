import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

export default function ProductSummary({ summary }) {
  return (
    <Typography variant='body1' color='textPrimary'>
      {summary}
    </Typography>
  );
}

ProductSummary.propTypes = {
  summary: PropTypes.string.isRequired,
};
