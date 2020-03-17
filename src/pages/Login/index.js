import React from 'react';

import { Link } from 'react-router-dom';

import { Container, MainContainer, ContainerLink } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Login() {
  return (
    <Container>
      <MainContainer>
        <Input name="Username" />
        <Input name="Password" />
        <Button name="Sign in" />

        <ContainerLink>
          <Link to="signup">Create new account</Link>
        </ContainerLink>
      </MainContainer>
    </Container>
  );
}
