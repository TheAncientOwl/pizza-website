import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  title: {
    fontStyle: 'italic',
    paddingLeft: '2vw',
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
