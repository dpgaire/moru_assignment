import Link from 'next/link';
import React from 'react';
import classes from './NavLinks.module.css';

const NavLinks = (props) => {
  return (
    <ul className={classes.navLinks}>
      <li>
        <Link href='/' exact='true'>
          ALL USERS
        </Link>
      </li>

      <li>
        <Link href={`/favorites`}>MY FAVROITES</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
