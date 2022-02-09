import type { NextPage } from 'next';
import styled from 'styled-components';
import { LoginForm } from '../../Container';

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

const login: NextPage = (props) => {
  return (
    <Container>
      <Article>
        <LoginForm />
      </Article>
    </Container>
  );
};

export default login;
