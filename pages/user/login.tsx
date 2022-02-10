import { LoginForm } from 'Container';
import type { NextPage } from 'next';
import Router from 'next/router';
import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  height: 100%;
  background-color: #6667ab;
  position: relative;
`;

const Article = styled.article`
  width: 50%;
  max-width: 550px;
  background-color: #cccae3;
`;

const Login: NextPage = (props) => {
  React.useEffect(() => {
    if (localStorage.getItem('check') === 'true') {
      Router.replace('/');
    }
  }, []);

  return (
    <Container>
      <Article>
        <LoginForm />
      </Article>
    </Container>
  );
};

export default Login;
