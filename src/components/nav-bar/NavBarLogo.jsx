import { makeStyles } from '@material-ui/core';
import Logo from '../../images/logo.jpg';

const useStyles = makeStyles({
  logo: {
    width: '100%',
    maxWidth: '300px',
    height: 'auto',

    marginTop: '10px',
    marginBottom: '10px',

    paddingLeft: '1vw',
    paddingRight: '1vw',
  },
});

export default function NavBarLogo() {
  const classes = useStyles();
  return <img className={classes.logo} alt='Ey Pizza Mama' src={Logo} />;
}
