import React from 'react';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import * as S from './styled';

export const Contact: React.FC = () => {
  return (
    <>
      <Header/>
      <S.Wrapper>
        <Title title='Contact' cor/>
      </S.Wrapper>
    </>
  );
}
