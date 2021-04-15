import { makeStyles, useTheme } from '@material-ui/core';
import Divider from '../Divider';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px',
  },
  titleBox: {
    minWidth: '120px',
    color: theme.palette.text.primary,
    background: theme.palette.background.default,

    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: '12px',
    paddingRight: '12px',

    textTransform: 'capitalize',
    fontSize: '1rem',
    fontStyle: 'italic',
    fontWeight: 'bold',

    borderStyle: 'solid',
    borderRadius: '15px',
    borderColor: theme.palette.background.default,
  },
}));

const TITLE = 'Coșul meu';

export default function BasketTitle() {
  const classes = useStyles();
  const theme = useTheme();

  const divider = <Divider color={theme.palette.background.default} />;

  return (
    <div className={classes.container}>
      {divider}
      <div className={classes.titleBox}>{TITLE}</div>
      {divider}
    </div>
  );
}
