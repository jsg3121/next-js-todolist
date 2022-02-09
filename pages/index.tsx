import type { NextPage } from 'next';
import Router from 'next/router';
import React from 'react';
import { PageHeader, TodoList } from '../Container';

const Home: NextPage = () => {
  React.useEffect(() => {
    console.log(localStorage.getItem('check'));
    if (localStorage.getItem('check') === 'false') {
      Router.replace('/user/login');
    }
  }, []);

  return (
    <>
      <section>
        <PageHeader />
      </section>
      <section>
        <TodoList />
      </section>
    </>
  );
};

export default Home;
