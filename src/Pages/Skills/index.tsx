import React from 'react';
import CardSkills from '../../components/CardSkills';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import * as S from './styled';

export const Skills: React.FC = () => {
  return (
    <>
      <Header/>
      <S.Wrapper>
        <Title title="Skills" cor/>
        <S.Container>
          <CardSkills/>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
