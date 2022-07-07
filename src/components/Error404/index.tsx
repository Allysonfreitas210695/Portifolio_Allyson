import React from 'react';
import Error from '../../assets/img/Erro404.jpg';
import * as S from './styled';

export const Error404: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Context>
        <img src={Error} alt="Page not found" />
        {/* <h1>went bad😭!</h1> */}
      </S.Context>
    </S.Wrapper>
  );
}