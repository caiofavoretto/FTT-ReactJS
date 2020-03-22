import styled from 'styled-components';

export const Container = styled.div`
  width: ${props => (props.big ? '660px' : '283px')};
  height: 250px;
  padding: 32px;

  border-radius: 32px;
  background: #2b2c2e;

  position: relative;

  margin-top: 80px;

  strong {
    display: block;
    font-size: 24px;
    text-align: ${props => (props.big ? 'center' : 'left')};
    margin-top: ${props => (props.big ? '0' : '120px')};
    transform: ${props => (props.big ? 'translateX(60px)' : '0')};

    height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    display: block;
    font-size: 18px;
    margin-top: ${props => (props.big ? '52px' : '8px')};
  }
`;

export const ImageContainer = styled.div`
  width: 160px;
  height: 160px;

  position: absolute;
  top: 0;
  left: ${props => (props.big ? '25%' : '50%')};
  transform: translate(-50%, -50%);

  background: #fff;
  border: solid #2b2c2e 8px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
