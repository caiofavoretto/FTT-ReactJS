import React from 'react';
import { Link } from 'react-router-dom';

import { FaArrowLeft, FaSignOutAlt, FaPlus } from 'react-icons/fa';

import { Container } from './styles';

export default function ActionButton({
  history,
  page = '',
  icon,
  callback,
  small
}) {
  function getIcon() {
    if (icon === 'back') {
      return <FaArrowLeft size={small ? 16 : 28} color="#fff" />;
    } else if (icon === 'signout') {
      return <FaSignOutAlt size={small ? 16 : 28} color="#fff" />;
    } else if (icon === 'add') {
      return <FaPlus size={small ? 16 : 28} color="#fff" />;
    }
  }

  function handleClick() {
    if (callback) callback();

    history.push(`/${page}`);
  }

  return (
    <Container type="button" onClick={handleClick} small={small}>
      {getIcon()}
    </Container>
  );
}
