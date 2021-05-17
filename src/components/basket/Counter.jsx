import { Button, ButtonGroup, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  counter: {
    display: 'flex',
    width: '60%',
  },
  count: {
    fontSize: '1.5em',
    fontWeight: 'bold',

    padding: '5px',

    marginTop: 'auto',
    marginBottom: 'auto',
  },
  button: {
    color: theme.palette.background.default,

    fontWeight: 'bold',
    fontSize: '1.25em',

    minHeight: 0,
    minWidth: 0,

    width: '2em',
    height: '1.5em',
  },
}));

export default function Counter({ count, onIncrease, onDecrease }) {
  const classes = useStyles();

  return (
    <div className={classes.counter}>
      <div className={classes.count}>{count}</div>
      <ButtonGroup orientation='vertical'>
        <Button className={classes.button} color='primary' variant='contained' onClick={onIncrease}>
          +
        </Button>
        <Button className={classes.button} color='primary' variant='contained' onClick={onDecrease}>
          -
        </Button>
      </ButtonGroup>
    </div>
  );
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
};
