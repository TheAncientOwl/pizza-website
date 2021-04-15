import { makeStyles } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '2vh',
    marginBottom: '1vh',

    display: 'flex',
  },
  title: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '8em',

    background: theme.palette.primary.main,
    color: theme.palette.background.default,

    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: '1.5em',

    padding: '5px',
    paddingBottom: '1px',

    borderRadius: '10em',

    textAlign: 'center',
    boxShadow: `4px 2px 5px ${theme.palette.secondary.main}`,
  },
  icon: {
    fontSize: '2em',
  },
}));

export default function BasketIcon() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <ShoppingCartIcon className={classes.icon} />
      </div>
    </div>
  );
}
