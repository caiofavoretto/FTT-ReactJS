import React from 'react';

import { ContainerButton } from './styles';

export default function Button({ name }) {
  return <ContainerButton type="submit">{name}</ContainerButton>;
}
