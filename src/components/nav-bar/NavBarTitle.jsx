import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  title: {
    width: '100%',
    textAlign: 'center',
  },
});

export default function NavBarTitle() {
  const classes = useStyles();

  return (
    <Typography variant='h4' className={classes.title}>
      Ey Pizza Mama
    </Typography>
  );
}
