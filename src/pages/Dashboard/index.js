import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import {
  Container,
  MainContainer,
  UsersContainer,
  QuestionsContainer
} from './styles';

import ActionButton from '../../components/ActionButton';
import Card from '../../components/Card';

export default function Dashboard({ history }) {
  const [users, setUsers] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function getUsersAndQuestions() {
      const [responseUsers, responseQuestions] = await Promise.all([
        api.get('/users'),
        api.get('/questions')
      ]);

      console.log(responseUsers.data);
      console.log(responseQuestions.data);

      const usersArray = [];
      const questionsArray = [];

      responseUsers.data.map(user => {
        usersArray.push({
          id: user._id,
          title: `${user.first_name} ${user.last_name}`,
          description: user.user_name,
          type: 'user'
        });
      });

      responseQuestions.data.map(question => {
        questionsArray.push({
          id: question._id,
          title: question.title,
          description: question.description,
          type: 'question'
        });
      });

      setUsers(usersArray);
      setQuestions(questionsArray);
    }

    const userConnected = localStorage.getItem('userConnected');

    if (userConnected) {
      getUsersAndQuestions();
    } else {
      history.push('/');
    }
  }, [history]);

  function handleLogout() {
    localStorage.removeItem('userConnected');
  }

  return (
    <Container>
      <ActionButton history={history} page="question" icon="add" />
      <ActionButton
        history={history}
        icon="signout"
        callback={handleLogout}
        small
      />

      <MainContainer>
        <UsersContainer>
          {users.length &&
            users.map(user => <Card key={user.id} object={user} />)}
        </UsersContainer>

        <QuestionsContainer>
          {questions.length &&
            questions.map(question => (
              <Card key={question.id} object={question} />
            ))}
        </QuestionsContainer>
      </MainContainer>
    </Container>
  );
}
