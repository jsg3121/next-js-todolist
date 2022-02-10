import http from 'axios'
import { PageHeader, TodoList } from 'Container'
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

  React.useEffect(() => {
    if (data) {
      dispatch(Actions.user.user(data))
    }
  }, [data, dispatch])

  return (
    <>
      <section>
        <PageHeader />
      </section>
      <section>
        <TodoList />
      </section>
    </>
  )
}

export default Home
