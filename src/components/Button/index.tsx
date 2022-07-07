import React, { ReactNode } from 'react';
import * as S from './styled';

interface IButton {
  children: ReactNode
}

export const Button: React.FC<IButton> = ({children}) => {
  return (
    <S.Button>
      {children}
    </S.Button>
  );
}