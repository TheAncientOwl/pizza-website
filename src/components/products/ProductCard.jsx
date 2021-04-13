import { makeStyles, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  paper: {
    background: theme.palette.background.default,
    [theme.breakpoints.down('sm')]: {
      backgroundColor: 'red',
    },

    borderStyle: 'solid',
    borderWidth: '0.5px',
    borderColor: 'green',

    height: '195px',
    width: '220px',

    //height: '140px',
    //width: '165px',
  },
}));

export default function ProductCard({ product }) {
  // const { img, alt, summary, details, price } = product;
  const { summary } = product;
  console.log(summary);

  const classes = useStyles();

  return <Paper className={classes.paper}></Paper>;
}

ProductCard.propTypes = {
  product: PropTypes.any.isRequired,
};
