import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/App.scss';

const SideBar = () => (
  <>
    <div className='sidebar'>
      <nav className='menu'>
        <ul>
          <li className='element'>
            <Link to='/'>Dashboard</Link>
          </li>
          <li className='element'>
            <Link to='/transactions'>Transactions</Link>
          </li>
          <li className='element'>
            <Link to='customers'>Customers</Link>
          </li>
        </ul>
      </nav>
    </div>
  </>
);

export default SideBar;
