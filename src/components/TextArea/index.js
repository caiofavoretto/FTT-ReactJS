import React from 'react';

import { Container } from './styles';

export default function TextArea({ name, value, onChange }) {
  return (
    <Container>
      <label>{name}</label>
      <textarea onChange={e => onChange(e.target.value)} value={value} />
    </Container>
  );
}
