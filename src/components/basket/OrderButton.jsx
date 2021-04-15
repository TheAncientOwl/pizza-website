import { Button, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    width: '100%',

    marginBottom: '10px',
  },
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
    background: theme.palette.background.default,
    textAlign: 'center',
  },
  text: {
    color: theme.palette.text.primary,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
}));

export default function OrderButton() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Button className={classes.button} size='small' variant='contained' color='primary'>
        <Typography className={classes.text}>Comandă</Typography>
      </Button>
    </div>
  );
}
