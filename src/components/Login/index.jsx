import axios from 'axios';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Wrap, Success } from './style';

import qs from 'qs';

const Login = () => {
  const [state, setState] = useState({
    _username: '',
    _password: '',
    _subdomain: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const [loged, setLoged] = useState(localStorage?.token);
  const navigate = useNavigate();
  let logIn = async (e) => {
    e.preventDefault();

    await axios({
      url: `https://toko.ox-sys.com/security/auth_check`,
      method: 'POST',
      data: qs.stringify(state),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
    })
      .then((res) => {
        if (res?.status === 200) {
          localStorage.setItem('token', res?.data?.token);
          navigate('/home');
        }
      })
      .catch((error) => alert(error.massage));
  };
  return (
    <>
      {loged ? (
        <Success>
          <Success.Back>
            <NavLink className='link' to='/home'>
              <Success.Arrow /> back
            </NavLink>
          </Success.Back>
          <Success.Wrap>
            <Success.Btn>
              <Success.Suc />
            </Success.Btn>
            <Success.Text>Sucessfully Loged in</Success.Text>
          </Success.Wrap>
        </Success>
      ) : (
        <Wrap>
          <Success.Back top='true'>
            <NavLink className='link' to='/home'>
              <Success.Arrow /> back
            </NavLink>
          </Success.Back>
          <Wrap.Form>
            <Wrap.Title>Register ! </Wrap.Title>
            <Wrap.Descript>Join Us and start Logging your File</Wrap.Descript>
            <Wrap.Input
              onChange={handleChange}
              name='_username'
              placeholder='Name'
              type='text'
              required
              autocomplete='new-password'
            />
            <Wrap.Input
              onChange={handleChange}
              name='_password'
              placeholder='Password'
              required
              type='password'
              autocomplete='new-password'
            />
            <Wrap.Input
              onChange={handleChange}
              name='_subdomain'
              placeholder='Subdomain'
              required
              type='text'
              autocomplete='new-password'
            />
            <Wrap.Button
              onClick={logIn}
              type='submit'
              value='Register Account'
            />
          </Wrap.Form>
        </Wrap>
      )}
    </>
  );
};

export default Login;
