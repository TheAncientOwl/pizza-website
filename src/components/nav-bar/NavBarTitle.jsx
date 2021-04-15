import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: '20em',

    marginTop: '1vh',
    marginBottom: '1vh',
  },
  title: {
    background: theme.palette.primary.main,
    color: theme.palette.text.primary,

    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: '2em',

    paddingTop: '5px',
    paddingBottom: '5px',
    paddingLeft: '10px',
    paddingRight: '10px',

    borderRadius: '15px',

    textAlign: 'center',
  },
}));

const TITLE = '* Ey Pizza Mama *';

export default function NavBarTitle() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography className={classes.title}>{TITLE}</Typography>
    </div>
  );
}
