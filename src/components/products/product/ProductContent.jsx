import { makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

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
      <Typography variant='body1' color='textPrimary'>
        {summary}
      </Typography>

      <Typography variant='body2' color='textSecondary' paragraph>
        {details}
      </Typography>
    </div>
  );
}

ProductContent.propTypes = {
  summary: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};
