import React from 'react';
import { 
  CSS, 
  HTML, 
  JS, 
  MONGO, 
  MYSQL, 
  NODE, 
  POSTGRES, 
  REACT, 
  RUBY 
} from '../Logo';
import { Title } from '../Title';
import * as S from './styled';

const CardSkills: React.FC = () => {
  return (
    <S.WrapperSkills>
      <S.WrappeSkill>
        <Title title='Front-end'/>
        <S.ContainerSkill>
          <HTML/>
          <CSS/>
          <JS/>
        </S.ContainerSkill>
      </S.WrappeSkill>
      <S.WrappeSkill>
        <Title title='Back-end'/>
        <S.ContainerSkill>
          <RUBY/>
          <NODE/>
        </S.ContainerSkill>
      </S.WrappeSkill>
      <S.WrappeSkill>
        <Title title='Database'/>
        <S.ContainerSkill>
          <POSTGRES/>
          <MYSQL/>
          <MONGO/>
        </S.ContainerSkill>
      </S.WrappeSkill>
      <S.WrappeSkill>
        <Title title='Frameworks-Front-end'/>
        <S.ContainerSkill >
          <REACT/>
        </S.ContainerSkill>
      </S.WrappeSkill>
    </S.WrapperSkills>
  );
}

export default CardSkills;