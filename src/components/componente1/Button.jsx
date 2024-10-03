import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: ${props => (props.primary ? '#3829e0' : 'transparent')};
  color: ${props => (props.primary ? 'white' : '#737373')};
  border: ${props => (props.primary ? 'none' : '2px solid #737373')};
  padding: 12px 30px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => (props.primary ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none')};
  
  &:hover {
    background-color: ${props => (props.primary ? '#7c5dfa' : '#f0f0f0')};
    color: ${props => (props.primary ? 'white' : '#000')};
    box-shadow: ${props => (props.primary ? '0 6px 12px rgba(0, 0, 0, 0.2)' : 'none')};
  }

  &:active {
    transform: scale(0.98);
    box-shadow: none;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

const Button =({children,primary,...rest})=>(
    <ButtonStyled primary={primary} {...rest}>
        {children}
    </ButtonStyled>
);

export default Button;