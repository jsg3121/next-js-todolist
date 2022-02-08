import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import useSWR from 'swr';
import { PageHeader, TodoList } from '../Container';

const Home: NextPage = () => {
  return (
    <div>
      <PageHeader />
      <TodoList />
    </div>
  );
};

export default Home;
