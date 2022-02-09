import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

type TitleProps = {
  theme?: 'light' | 'dark';
  color?: 'white' | 'black';
};

const H1 = styled((props) => {
  return <h1 {...props}></h1>;
})`
  font-size: 3rem;
  color: ${(props) => {
    return `${props.color === 'white' ? '#ffffff' : '#333333'}`;
  }};
`;

export const Title: NextPage<TitleProps> = (props) => {
  const { children, color } = props;

  return <H1 color={color}>{children}</H1>;
};
