import React from 'react';
import '../assets/styles/App.scss';

const SideBar = () => (
  <>
    <div className='sidebar'>
      <nav className='menu'>
        <ul>
          <li className='element'>Dashboard</li>
          <li className='element'>Transactions</li>
          <li className='element'>Customers</li>
        </ul>
      </nav>
    </div>
  </>
);

export default SideBar;
