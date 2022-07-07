import React from 'react';
import { Button } from '../Button';
import CardSkills from '../CardSkills';
import { InfoSection } from '../InfoSection';
import { ViewLogo } from '../Logo';
import { Title } from '../Title';
import * as S from './styled';

export const Section: React.FC = () => {
  return (
    <S.WrapperSection>
      <InfoSection>
        <Title title="Projects" cor={true}/>
        <S.Info>
          <S.Descricao>
            <p>I've done several projects in different languages, here's my repositories</p>
          </S.Descricao>
          <S.WrapperButton>
            <Button>
            <ViewLogo/>
             <a href="https://github.com/Allysonfreitas210695?tab=repositories" target="_blank">Views projects</a>
            </Button>
          </S.WrapperButton>
        </S.Info>
      </InfoSection>
      <InfoSection>
        <Title title="About" cor={true}/>
        <S.Info>
          <S.Descricao>
            <p>I'm a developer that I'm still specializing, I like to learn about this world of technology, Goal of the year 2022 is to get an internship or a job!
            </p>
            <p>
            I am currently studying Back-end for myself to become a fullstack developer by adding the front-end part.
            </p>
          </S.Descricao>
        </S.Info>
      </InfoSection>
      <InfoSection>
        <Title title="Skills" cor={true}/>
        <S.Info>
          <CardSkills/>
        </S.Info>
      </InfoSection>
    </S.WrapperSection>
  );
}
