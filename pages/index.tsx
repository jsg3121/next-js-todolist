import { TodoList } from 'Container'
import type { NextPage } from 'next'
import React from 'react'
import { Actions, useDispatch } from '../store'

const Home: NextPage = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(Actions.auth.loginCheck())
  }, [dispatch])

  // const handleClick = React.useCallback(() => {
  //   const token = localStorage.getItem('accessToken') || ''
  //   dispatch(Actions.auth.logout(token))
  // }, [dispatch])

  // React.useEffect(() => {
  //   if (data) {
  //     dispatch(Actions.auth.user(data))
  //   }
  // }, [data, dispatch])

  return (
    <>
      <section>
        {/* <PageHeader /> */}
        <button>로그아웃</button>
      </section>
      <section>
        <TodoList />
      </section>
    </>
  )
}

export default Home
