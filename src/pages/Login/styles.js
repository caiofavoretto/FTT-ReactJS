import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 800px;
  min-width: 300px;
  padding: 64px 32px 32px;
  background: #2b2c2e;
  border-radius: 32px;
  top: 50%;
  left: 50%;
  position: absolute;

  transform: translate(-50%, -50%);

  -webkit-box-shadow: 0px 10px 24px -6px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 0px 10px 24px -6px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 10px 24px -6px rgba(0, 0, 0, 0.58);

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const ContainerLink = styled.div`
  margin-top: 32px;

  a {
    color: #fff;
    font-size: 18px;

    &:hover {
      opacity: 0.8;
    }
  }
`;
