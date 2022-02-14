import { Button } from '@nextui-org/react'
import { TodoList } from 'Container'
import type { NextPage } from 'next'
import React from 'react'
import { Actions, useDispatch } from 'store'

const TodoListPage: NextPage = (props) => {
  const dispatch = useDispatch()

  const handleClick = React.useCallback(() => {
    const token = localStorage.getItem('accessToken') || ''
    dispatch(Actions.auth.logout(token))
  }, [dispatch])

  React.useEffect(() => {
    dispatch(Actions.auth.loginCheck())
  }, [dispatch])

  return (
    <>
      <section>
        {/* <PageHeader /> */}
        <Button onClick={handleClick}>asdfasdf</Button>
      </section>
      <section>
        <TodoList />
      </section>
    </>
  )
}

export default TodoListPage
