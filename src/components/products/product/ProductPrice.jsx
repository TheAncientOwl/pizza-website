import { makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  price: {
    width: '100%',
    textAlign: 'right',
    paddingRight: '2.5%',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});

export default function ProductPrice({ price }) {
  const classes = useStyles();

  return (
    <div className={classes.price}>
      <Typography component='span' color='textPrimary'>
        {price} lei
      </Typography>
    </div>
  );
}

ProductPrice.propTypes = {
  price: PropTypes.string.isRequired,
};
