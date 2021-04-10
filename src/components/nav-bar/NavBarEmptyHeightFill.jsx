import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  fill: {
    height: '20vh',
  },
});

export default function NavBarEmptyHeightFill() {
  const classes = useStyles();
  return <div className={classes.fill} />;
}
