import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container, MainContainer, ContainerLink } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Login({ history }) {
  const [user_name, setUser_name] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const userConnected = localStorage.getItem('userConnected');

    if (userConnected) {
      history.push(`/dashboard`);
    }
  }, [history]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!user_name || !password) {
      alert('all fields are required');
      return;
    }

    try {
      const response = await api.post('/auth', {
        user_name,
        password
      });

      localStorage.setItem('userConnected', JSON.stringify(response.data));
    } catch (error) {
      alert(error.response.data.message);

      setUser_name('');
      setPassword('');

      return;
    }

    history.push(`/dashboard`);
  }

  return (
    <Container>
      <MainContainer>
        <form onSubmit={e => handleSubmit(e)}>
          <Input
            name="Username"
            type="text"
            onChange={setUser_name}
            value={user_name}
          />
          <Input
            name="Password"
            type="password"
            onChange={setPassword}
            value={password}
          />
          <Button name="Sign in" />
        </form>

        <ContainerLink>
          <Link to="signup">Create new account</Link>
        </ContainerLink>
      </MainContainer>
    </Container>
  );
}
