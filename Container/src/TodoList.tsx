import type { NextPage } from 'next';
import { AddList } from './AddList';

interface TodoList {}

export const TodoList: NextPage = (props) => {
  const {} = props;

  return (
    <>
      <AddList />
    </>
  );
};
