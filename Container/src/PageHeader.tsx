import { Title } from 'components'
import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  background-color: #5d5d5d;
  text-align: center;
`

export const PageHeader: NextPage = (props) => {
  const handleClick = React.useCallback(() => {}, [])

  return (
    <>
      <HeaderContainer>
        <Title color="white">Todo List</Title>
      </HeaderContainer>
    </>
  )
}
