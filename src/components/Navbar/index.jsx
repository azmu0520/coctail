import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { data } from '../../utilits/navbar';
import { Wrap } from './style';

const Navbar = () => {
  return (
    <>
      <Wrap>
        {data.map((item) => (
          <Link key={item.id} to={item.path}>
            <li>{item.title}</li>
          </Link>
        ))}
      </Wrap>
      <Outlet />
    </>
  );
};

export default Navbar;
