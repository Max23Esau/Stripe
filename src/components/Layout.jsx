import React from 'react';

import Header from './Header';
import SideBar from './SideBar';

function Layout(props) {
  return (
    <>
      <Header />
      <SideBar />
      {props.children}
    </>
  );
}

export default Layout;
