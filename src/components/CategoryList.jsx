import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  bar: {
    marginBottom: '2vh',
  },
});

export default function CategoryList() {
  const classes = useStyles();
  return <div className={classes.bar}>*LOUD ITALIAN NOISES*</div>;
}
