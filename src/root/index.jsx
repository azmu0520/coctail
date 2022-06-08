import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import { data } from '../utilits/navbar';
const Root = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        {data?.map(
          ({ id, path, Component, hidden }) =>
            !hidden && <Route key={id} path={path} element={<Component />} />
        )}
        <Route path='/' element={<Home />} />
      </Route>
      <Route path='login' element={<Login />} />
      <Route path={'*'} element={<div>you are lost</div>} />
    </Routes>
  );
};

export default Root;
