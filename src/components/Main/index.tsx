import React from 'react';
import Image from '../../assets/img/Allyson.png';
import * as S from './styled';

export const Main: React.FC = () => {
  return (
    <S.WrapperMain>
      <S.WrapperPhoto>
        <img src={Image} alt="Photo allyson" />
      </S.WrapperPhoto>
      <S.Descricao>
        <strong>Allyson Bruno</strong>
        <strong>Develper Backend JR.</strong>
      </S.Descricao>
    </S.WrapperMain>
  );
}
