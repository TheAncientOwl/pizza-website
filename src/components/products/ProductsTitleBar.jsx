import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  titleBox: {
    color: theme.palette.text.primary,
    background: theme.overrides.MuiDrawer.paper.background,

    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: '12px',
    paddingRight: '12px',

    textTransform: 'capitalize',
    fontSize: '1.2rem',
    fontStyle: 'italic',
    fontWeight: 'bold',

    borderStyle: 'solid',
    borderRadius: '15px',
    borderWidth: '3px',
  },
  bar: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: '10px',
    marginRight: '10px',

    width: '100%',

    borderStyle: 'solid',
    borderWidth: '0.5px',
    borderRadius: '2px',
  },
}));

export default function ProductsTitleBar({ title }) {
  const classes = useStyles();

  const bar = <div className={classes.bar} />;

  return (
    <div className={classes.container}>
      {bar}
      <span className={classes.titleBox}>{title}</span>
      {bar}
    </div>
  );
}

ProductsTitleBar.propTypes = {
  title: PropTypes.string.isRequired,
};
