import styled, { css } from 'styled-components';
import { ButtonProps } from './buttonType';
import React from 'react';

const StyledButton = styled.button.attrs((props) => ({}))<ButtonProps>`
  ${(props) => css`
    color: white;
    background-color: ${props.color};
    border-radius: 25px;
    background-repeat: no-repeat;
    width: 15%;
    height: 45px;
    border: none;
    padding: 5px 10px;
    font-size: 1em;
    font-weight: 500;
    outline: none;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 5px 3px 5px;

    ${props.themes &&
      css`
        ${themes[props.themes]}
      `}

    ${props.size && 
      css`
       ${sizeStyles[props.size]}
      `}
    
    :active {
      margin-left: 5px;
      margin-top: 5px;
      box-shadow: none;
    }

  `}
`;

const themes = {
  primary: css`
    background-color: ${(props) => props.theme.color};
  `,
  secondary: css`
    background-color: red;

  `,
  tertiary: css`
    background-color: ${(props) => props.theme.color};

  `,
};

const sizeStyles = {
  small: css`
    width: 10%;
    height: 30px;
  `,
  medium: css`
    width: 15%;
    height: 45px;
  `,
  large: css`
    width: 20%;
    height: 60px;
  `,
};

export default StyledButton;