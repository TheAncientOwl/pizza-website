import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  title: {
    background: theme.palette.primary.main,
    color: theme.palette.text.primary,

    fontStyle: 'italic',
    fontWeight: 'bold',

    marginTop: '1vh',

    paddingTop: '1vh',
    paddingBottom: '1vh',
    paddingLeft: '2vw',
    paddingRight: '2vw',

    borderRadius: '1vw',

    textAlign: 'center',
  },
}));

/*@deprecated */
export default function NavBarTitle() {
  const classes = useStyles();

  return (
    <Typography component='div' variant='h4' className={classes.title}>
      * Pizza Mama *
    </Typography>
  );
}
