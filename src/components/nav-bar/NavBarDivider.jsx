import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  divider: {
    width: '100%',

    borderStyle: 'solid',
    borderWidth: '0.5px',
    borderRadius: '2px',

    marginTop: '0.9vh',
    marginBottom: '0.5vh',

    borderColor: theme.palette.text.primary,
  },
}));

export default function NavBarDivider() {
  const classes = useStyles();
  return <div className={classes.divider} />;
}
