import { Button, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: '2.5%',
    color: theme.palette.text.primary,

    fontWeight: 'bold',

    paddingTop: '5px',
    paddingBottom: '5px',
  },
}));

export default function AddButton({ onClick }) {
  const classes = useStyles();

  return (
    <Button className={classes.button} variant='contained' size='small' color='primary' onClick={onClick}>
      Add
    </Button>
  );
}

AddButton.propTypes = {
  onClick: PropTypes.any.isRequired,
};
