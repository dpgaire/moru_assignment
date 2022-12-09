import React, { useState } from 'react';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Link from 'next/link';
import classes from './MainNavigation.module.css';
import Backdrop from './Backdrop';

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      {drawerIsOpen && (
        <SideDrawer onClick={closeDrawerHandler}>
          <nav className={classes.mainNavigationDrawerNav}>
            <NavLinks />
          </nav>
        </SideDrawer>
      )}

      <MainHeader>
        <button
          className={classes.mainNavigationMenuBtn}
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className={classes.mainNavigationTitle}>
          <Link href='/'>Gallary</Link>
        </h1>
        <nav className={classes.mainNavigationHeaderNav}>
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
