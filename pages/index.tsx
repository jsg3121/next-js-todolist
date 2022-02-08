import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import useSWR from 'swr';
import { AddList } from '../Container';

const Home: NextPage = () => {
  return (
    <div>
      <AddList />
    </div>
  );
};

export default Home;
