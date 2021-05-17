import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  fill: {
    minHeight: '110px',
  },
});

export default function NavBarEmptyHeightFill() {
  const classes = useStyles();
  return <div className={classes.fill} />;
}
