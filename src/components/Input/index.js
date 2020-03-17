import React from 'react';

import { Container } from './styles';

export default function Input({ name, type, value, onChange }) {
  return (
    <Container>
      <label>{name}</label>
      <input
        onChange={e => onChange(e.target.value)}
        value={value}
        type={type}
      />
    </Container>
  );
}
