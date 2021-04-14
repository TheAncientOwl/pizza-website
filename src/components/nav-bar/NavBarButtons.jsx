import { Button, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import NavBarDivider from './NavBarDivider';

import FoodData from '../../FoodData';

const useStyles = makeStyles(theme => ({
  button: {
    background: theme.palette.background.default,
  },
  buttonSelect: {},
  scrollMenu: {
    overflow: 'auto',
    whiteSpace: 'nowrap',
    width: '100%',
  },
  scrollMenuItem: {
    display: 'inline-block',
    textAlign: 'center',
  },
}));

/*TO DO: solve buttons overflow on mobile */
export default function NavBarButtons({ onCategoryChange, currentTitle }) {
  const classes = useStyles();

  return (
    <>
      <NavBarDivider />
      <div className={classes.scrollMenu}>
        {FoodData.map((category, index) => (
          <div key={index} className={classes.scrollMenuItem}>
            <Button
              className={category.categoryName === currentTitle ? classes.buttonSelect : classes.button}
              color='primary'
              variant='contained'
              key={index}
              onClick={() => onCategoryChange(category.categoryName, category.data)}>
              {category.categoryName}
            </Button>
          </div>
        ))}
      </div>
      <NavBarDivider />
    </>
  );
}

NavBarButtons.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
  currentTitle: PropTypes.string.isRequired,
};
