import { Button, ButtonGroup, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import NavBarDivider from './NavBarDivider';

import FoodData from '../../FoodData';

const useStyles = makeStyles(theme => ({
  buttonGroup: {
    overflow: 'auto',
  },
  button: {
    background: theme.palette.background.default,
  },
}));

/*TO DO: solve buttons overflow on mobile */
export default function NavBarButtons({ onCategoryChange }) {
  const classes = useStyles();

  return (
    <>
      <NavBarDivider />
      <ButtonGroup className={classes.buttonGroup}>
        {FoodData.map((category, index) => (
          <Button
            className={classes.button}
            color='primary'
            variant='contained'
            key={index}
            onClick={() => onCategoryChange(category.categoryName, category.data)}>
            {category.categoryName}
          </Button>
        ))}
      </ButtonGroup>
      <NavBarDivider />
    </>
  );
}

NavBarButtons.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
};
