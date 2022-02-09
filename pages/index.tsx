import type { NextPage } from 'next';
import Router from 'next/router';
import React from 'react';
import { PageHeader, TodoList } from '../Container';

const Home: NextPage = () => {
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
