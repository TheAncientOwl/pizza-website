import { makeStyles, useTheme } from '@material-ui/core';
import PropTypes from 'prop-types';
import Divider from '../Divider';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  titleBox: {
    color: theme.palette.text.primary,
    background: theme.palette.background.default,

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
    borderColor: theme.palette.background.default,
  },
}));

export default function ProductsTitleBar({ title }) {
  const classes = useStyles();
  const theme = useTheme();

  const divider = <Divider color={theme.palette.background.default} />;

  return (
    <div className={classes.container}>
      {divider}
      <div className={classes.titleBox}>{title}</div>
      {divider}
    </div>
  );
}

ProductsTitleBar.propTypes = {
  title: PropTypes.string.isRequired,
};
