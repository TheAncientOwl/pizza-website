import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  title: {
    width: '100%',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default function NavBarTitle() {
  const classes = useStyles();

  return (
    <Typography component='div' variant='h4' className={classes.title}>
      * Ey Pizza Mama *
    </Typography>
  );
}
