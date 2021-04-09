import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  title: {
    fontSize: '5vh',
    marginBottom: '2vh',
  },
});

export default function Menu() {
  const classes = useStyles();
  return <Typography className={classes.title}>Ey Pizza Mama</Typography>;
}
