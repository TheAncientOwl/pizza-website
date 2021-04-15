import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  card: {
    width: '17em',
    background: theme.palette.background.default,
    boxShadow: props => (props.shadows ? `9px 7px 7px ${theme.palette.secondary.main}` : 'none'),
  },
}));

export default function ProductCard({ children, shadows }) {
  const classes = useStyles({ shadows });

  return <div className={classes.card}>{children}</div>;
}

ProductCard.defaultProps = {
  shadows: false,
};

ProductCard.propTypes = {
  children: PropTypes.any.isRequired,
  shadows: PropTypes.bool,
};
