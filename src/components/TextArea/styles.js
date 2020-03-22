import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 32px;

  label {
    position: absolute;
    left: 30px;
    font-weight: 500;
    font-size: 18px;
    background: #2b2c2e;
    padding: 0 16px;
    transform: translateY(-10px);
  }

  textarea {
    background: none;
    border: solid #fff 3px;
    border-radius: 16px;
    height: 128px;
    width: 100%;

    padding: 20px 15px;

    resize: none;
  }
`;
