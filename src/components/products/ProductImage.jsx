import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

export default function ProductImage({ src, alt }) {
  const classes = useStyles();

  return <img className={classes.image} src={src} alt={alt} />;
}

ProductImage.propTypes = {
  src: PropTypes.any.isRequired,
  alt: PropTypes.string.isRequired,
};
