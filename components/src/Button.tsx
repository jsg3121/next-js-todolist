import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

interface ButtonProps
  extends Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {}

const ButtonComp = styled.button`
  width: 100px;
  height: 40px;
  background-color: #d1d1fc;
  border-radius: 10px;
`;

export const Button: NextPage<ButtonProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <>
      <ButtonComp {...rest}>{children}</ButtonComp>
    </>
  );
};
