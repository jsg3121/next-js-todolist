import type { NextPage } from 'next';
import styled from 'styled-components';
import { Title } from '../../components';

const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  background-color: #5d5d5d;
  text-align: center;
`;

export const PageHeader: NextPage = (props) => {
  return (
    <>
      <HeaderContainer>
        <Title color="white">Todo List</Title>
      </HeaderContainer>
    </>
  );
};
