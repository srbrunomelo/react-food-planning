import styled, { css } from "styled-components";

import { ButtonType } from "./type"

const modifiers = {
  default: () => css`
    background: ${({ theme }) => theme.buttonColor.button};  
  `,

  primary: () => css`
    background: ${({ theme }) => theme.colors.primary};  
  `,
  
  disabled: () => css`
    opacity: 0.5;
  `,

  small: () => css`
    padding: 5px 15px;
  `,

  large: () => css`
    padding: 0.8rem 2.0rem;
  `
}

export const Wrapper = styled.button<Pick<ButtonType, 'isFull' | 'disabled' | 'size' | 'variant'>>`
  border: none;
  cursor: pointer;
  border-radius: 16px;
  font-style: normal;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 2rem;   
  color: ${({ theme }) => theme.buttonColor.color};
  
  display: flex;
  justify-content: center;
  align-items: center;  
  
  width: ${({ isFull }) => isFull && '100%'};

  ${({ variant, disabled, size }) => css `
      ${variant === 'default' && modifiers.default}
      ${variant === 'primary' && modifiers.primary}
      ${disabled && modifiers.disabled}
      ${size === 'large' && modifiers.large}
      ${size === 'small' && modifiers.small}
    `
  }

  &:hover {
    opacity: 0.9;
  }
`;