import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  divider: {
    width: props => props.width,

    margin: 'auto',

    borderStyle: 'solid',
    borderWidth: '0.5px',
    borderRadius: '2px',
    borderColor: props => props.color,
  },
});

export default function Divider({ color, width }) {
  const classes = useStyles({ color, width });

  return <div className={classes.divider} />;
}

Divider.defaultProps = {
  width: '100%',
  color: 'green',
};

Divider.propTypes = {
  width: PropTypes.any,
  color: PropTypes.any,
};
