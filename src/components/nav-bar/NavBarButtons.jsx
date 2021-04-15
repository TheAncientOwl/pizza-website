import { Button, makeStyles, useTheme } from '@material-ui/core';
import PropTypes from 'prop-types';

import FoodData from '../../FoodData';
import Divider from '../Divider';
import ScrollMenu from '../scroll-menu/ScrollMenu';
import ScrollMenuItem from '../scroll-menu/ScrollMenuItem';

const useStyles = makeStyles(theme => ({
  button: {
    background: theme.palette.background.default,
  },
}));

/*TO DO: solve buttons overflow on mobile */
export default function NavBarButtons({ onCategoryChange, currentTitle }) {
  const classes = useStyles();
  const theme = useTheme();

  const divider = <Divider color={theme.palette.text.secondary} />;

  return (
    <>
      {divider}
      <ScrollMenu>
        {FoodData.map((category, index) => (
          <ScrollMenuItem key={index}>
            <Button
              className={category.categoryName === currentTitle ? classes.buttonSelect : classes.button}
              color='primary'
              variant='contained'
              key={index}
              onClick={() => onCategoryChange(category.categoryName, category.data)}>
              {category.categoryName}
            </Button>
          </ScrollMenuItem>
        ))}
      </ScrollMenu>
      {divider}
    </>
  );
}

NavBarButtons.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
  currentTitle: PropTypes.string.isRequired,
};
