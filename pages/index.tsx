import http from 'axios'
import { TodoList } from 'Container'
import type { NextPage } from 'next'
import React from 'react'
import useSWR from 'swr'
import { Actions, useDispatch } from '../store'

const Home: NextPage = () => {
  const dispatch = useDispatch()
  const { data } = useSWR('/api/tokencheck', async () => {
    return await http
      .request({
        method: 'POST',
        url: 'api/tokencheck',
        data: { data: localStorage.getItem('accessToken') },
      })
      .then((res) => {
        return res.data
      })
  })

  const handleClick = React.useCallback(() => {
    const token = localStorage.getItem('accessToken') || ''
    dispatch(Actions.auth.logout(token))
  }, [dispatch])

  React.useEffect(() => {
    if (data) {
      dispatch(Actions.auth.user(data))
    }
  }, [data, dispatch])

  return (
    <>
      <section>
        {/* <PageHeader /> */}
        <button onClick={handleClick}>로그아웃</button>
      </section>
      <section>
        <TodoList />
      </section>
    </>
  )
}

export default Home
