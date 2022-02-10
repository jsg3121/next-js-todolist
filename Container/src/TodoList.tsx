import type { NextPage } from 'next'
import { AddList } from './List'

interface TodoList {}

export const TodoList: NextPage = (props) => {
  const {} = props

  return (
    <>
      <AddList />
    </>
  )
}
