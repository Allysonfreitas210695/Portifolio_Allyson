import React from 'react';
import * as S from './styled';

interface ITitle {
  title: string;
  cor?: boolean;
}

export const Title: React.FC<ITitle> = ( {title, cor = false} ) => {
  return (
    <S.Title cor={cor}>{title}</S.Title>
  );
}