import React from 'react';
import { FaUsers, FaQuestion } from 'react-icons/fa';

import { Container, ImageContainer } from './styles';

export default function Card({ object }) {
  function getIcon() {
    if (object.type === 'user') {
      return <FaUsers color="#2b2c2e" size={80} />;
    } else if (object.type === 'question') {
      return <FaQuestion color="#2b2c2e" size={80} />;
    }
  }

  return (
    <Container big={object.type === 'question' ? true : false}>
      <ImageContainer big={object.type === 'question' ? true : false}>
        {getIcon()}
      </ImageContainer>
      <strong>{object.title}</strong>
      <span>{object.description}</span>
    </Container>
  );
}
