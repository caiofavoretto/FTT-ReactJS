import React, { useState } from 'react';

import api from '../../services/api';

import { Container, MainContainer } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Question({ history }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !title ||
      !description 
    ) {
      alert('all fields are required');
      return;
    }

    try {
      const response = await api.post('/questions', {
        title,
        description
      });
    } catch (error) {
      alert(error.response.data.message);

      setTitle('');
      setDescription('');

      return;
    }

    history.push(`/`);
  }

  return (
    <Container>
      <MainContainer>
        <form onSubmit={e => handleSubmit(e)}>
          <Input
            name="Title"
            type="text"
            onChange={setTitle}
            value={title}
          />
          <Input
            name="Description"
            type="text"
            onChange={setDescription}
            value={description}
          />
          <Button name="Add" />
        </form>
      </MainContainer>
    </Container>
  );
}
