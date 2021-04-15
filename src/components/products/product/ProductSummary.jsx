import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

export default function ProductSummary({ className, summary }) {
  return (
    <Typography className={className} variant='body1' color='textPrimary'>
      {summary}
    </Typography>
  );
}

ProductSummary.propTypes = {
  className: PropTypes.any,
  summary: PropTypes.string.isRequired,
};
