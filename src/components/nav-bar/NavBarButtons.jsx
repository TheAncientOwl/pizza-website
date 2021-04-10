import { Button, ButtonGroup, makeStyles } from '@material-ui/core';

import FoodData from '../../FoodData';

const useStyles = makeStyles(theme => ({
  buttonGroup: {
    marginBottom: '1vh',
    overflow: 'auto',
  },
  button: {
    background: theme.palette.background.default,
  },
}));

export default function NavBarButtons() {
  const classes = useStyles();

  return (
    <ButtonGroup className={classes.buttonGroup}>
      {FoodData.map((category, index) => (
        <Button className={classes.button} color='primary' variant='contained' key={index}>
          {category.categoryName}
        </Button>
      ))}
    </ButtonGroup>
  );
}
