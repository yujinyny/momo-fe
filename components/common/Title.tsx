import React from 'react';
import styled from 'styled-components';
import styles from './button.module.css';

interface ButtonProps {
  label: string;
}

const TitleText = styled.p`
   font-size: 40px;
   font-weight: 700;
`
export const Title= ({
  label,
  ...props
}: ButtonProps) => {
 
  return (
   <TitleText>{label}</TitleText>
  );
};
