import { makeStyles } from '@material-ui/core';
import Logo from '../../images/logo.jpg';

const useStyles = makeStyles({
  logo: {
    width: '100%',
    maxWidth: '300px',
    height: 'auto',

    marginTop: '1vh',

    paddingTop: '1vh',
    paddingBottom: '1vh',
    paddingLeft: '2vw',
    paddingRight: '2vw',
  },
});

export default function NavBarLogo() {
  const classes = useStyles();
  return (
    <div>
      <img className={classes.logo} alt='Ey Pizza Mama' src={Logo} />
    </div>
  );
}
