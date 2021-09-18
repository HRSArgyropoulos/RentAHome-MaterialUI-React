import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/logoHome.svg';

const useStyles = makeStyles({
  navbar: {
    height: '85px',
    display: 'flex',
    maxWidth: '1400px',
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius: '50px',
    margin: '1rem auto',
    alignItems: 'center',
    justifyContent: 'space-between',
    listStyle: 'none',
    padding: '0.5rem 1rem',
    backdropFilter: 'blur(20px)',
    fontFamily: 'Righteous, cursive',
    fontSize: '1.1em',
    '& li': {
      padding: '0.5rem 1rem',
    },
    '& img': {
      width: '30px',
    },
  },
  navlinks: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    fontFamily: 'Poppins, sans-serif',
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <nav>
      <ul className={classes.navbar}>
        <li>
          <NavLink to="/">
            <img src={logo} alt="Rent A Home - Go to homepage" />
            <h1>Rent A Home</h1>
          </NavLink>
        </li>
        <li>
          <ul className={classes.navlinks}>
            <li>
              <NavLink exact to="/" activeClassName="activeMenu">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/to-rent" activeClassName="activeMenu">
                Homes to rent
              </NavLink>
            </li>
            <li>
              <NavLink to="/to-host" activeClassName="activeMenu">
                Host your home
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
