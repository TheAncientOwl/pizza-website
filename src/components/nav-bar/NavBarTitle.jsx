import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  title: {
    background: theme.palette.primary.main,
    color: theme.palette.text.primary,

    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: '2em',

    marginTop: '1vh',
    marginBottom: '1vh',

    paddingTop: '5px',
    paddingBottom: '5px',
    paddingLeft: '10px',
    paddingRight: '10px',

    borderRadius: '15px',

    textAlign: 'center',
  },
}));

const TITLE = '* Ey Pizza Mama *';

/*@deprecated */
export default function NavBarTitle() {
  const classes = useStyles();

  return (
    <Typography component='div' className={classes.title}>
      {TITLE}
    </Typography>
  );
}
