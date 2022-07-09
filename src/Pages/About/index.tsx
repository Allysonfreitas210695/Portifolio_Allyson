import React from 'react';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import * as S from './styled';

export const About: React.FC = () => {
  return (
    <>
      <Header/>
      <S.Wrapper>
        <Title title='About' cor/>
        <S.Container>
            <h1>Dear, I'm a FullStack developer.</h1>

            <p>
            I am passionate about Technology, I am a resilient, committed and engaged person. In the last few months I've been learning and developing projects in Ruby on Rails, NodeJS, Reactjs. In this process I am increasingly familiar with concepts and technologies such as: Ruby on Rails, NodeJS, Reactjs, Javacript, Postgres, MVC, Api Rest, Git, Docker and Rspec. My academic projects are available on my Github:
            <a href="https://github.com/Allysonfreitas210695?tab=repositories">(Link)</a>
            </p>

            <p>
            I am in the last year of the Information Technology course at UFERSA. I am an algorithms discipline monitor.
            I am very interested and looking forward to getting my first professional job and taking this big step in my professional training. I've been through several challenges and I hope you receive this one of learning and contributing by working as a team for your company.
            </p>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
