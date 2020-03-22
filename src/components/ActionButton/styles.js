import styled from 'styled-components';

export const Container = styled.button`
  width: ${props => (props.small ? '42px' : '64px')};
  height: ${props => (props.small ? '42px' : '64px')};

  background: #2b2c2e;
  border-radius: 50%;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: ${props => (props.small ? '128px' : '32px')};
  left: 32px;

  -webkit-box-shadow: 0px 10px 24px -6px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 0px 10px 24px -6px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 10px 24px -6px rgba(0, 0, 0, 0.58);
`;
