import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-height: 100vh;
  overflow: hidden;

  position: relative;
`;

export const MainContainer = styled.div`
  padding-top: 120px;
  margin-left: 20%;
  width: 80%;
  padding: 64px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
`;

export const UsersContainer = styled.div`
  height: calc(100vh - 60px);
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  padding-bottom: 32px;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
`;

export const QuestionsContainer = styled.div`
  height: calc(100vh - 60px);
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
`;
