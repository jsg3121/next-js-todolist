import { Container, Text } from '@nextui-org/react'
import { LoginForm } from 'Container'
import type { NextPage } from 'next'
import React from 'react'
import { Actions, useDispatch } from 'store'
import styled from 'styled-components'

const LoginContainer = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Article = styled(Container)`
  width: 50%;
  max-width: 550px;
  position: relative;
`

const Login: NextPage = (props) => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(Actions.auth.loginCheck())
  }, [dispatch])

  return (
    <LoginContainer>
      <Article>
        <Text
          h1
          size={'5rem'}
          css={{
            textGradient: '45deg, $blue500 -20%, $pink500 50%',
          }}
          weight="bold"
        >
          Todo List
        </Text>
        <LoginForm />
      </Article>
    </LoginContainer>
  )
}

export default Login
