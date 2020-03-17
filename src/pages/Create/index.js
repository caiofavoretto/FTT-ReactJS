import React, { useState } from 'react';

import api from '../../services/api';

import { Container, MainContainer } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Create({ history }) {
  const [fist_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [user_name, setUser_name] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !fist_name ||
      !last_name ||
      !user_name ||
      !password ||
      !confirmPassword
    ) {
      alert('all fields are required');
      return;
    }

    if (confirmPassword !== password) {
      alert('password does not match');
      setPassword('');
      setConfirmPassword('');
      return;
    }

    try {
      const response = await api.post('/users', {
        fist_name,
        last_name,
        user_name,
        password
      });
    } catch (error) {
      alert(error.response.data.message);

      setUser_name('');
      setPassword('');
      setConfirmPassword('');

      return;
    }

    history.push(`/`);
  }

  return (
    <Container>
      <MainContainer>
        <form onSubmit={e => handleSubmit(e)}>
          <Input
            name="First name"
            type="text"
            onChange={setFirst_name}
            value={fist_name}
          />
          <Input
            name="Last name"
            type="text"
            onChange={setLast_name}
            value={last_name}
          />
          <Input
            name="User_name"
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
          <Input
            name="Confirm password"
            type="password"
            onChange={setConfirmPassword}
            value={confirmPassword}
          />
          <Button name="Sign up" />
        </form>
      </MainContainer>
    </Container>
  );
}
