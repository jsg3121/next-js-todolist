import type { NextPage } from 'next'
import React from 'react'
import { Actions, useDispatch } from 'store'

const Home: NextPage = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(Actions.auth.loginCheck())
  }, [dispatch])

  return <></>
}

export default Home
