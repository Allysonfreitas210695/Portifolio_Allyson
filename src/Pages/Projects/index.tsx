import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { ViewLogo } from '../../components/Logo';

import { Title } from '../../components/Title';
import { api } from '../../services/Api';
import * as S from './styled';

interface IRepos {
  id: number;
  name: string;
  html_url: string;
  language: string;
}

export const Projects: React.FC = () => {
  const [repos, setRepos] = useState<IRepos[]>([]);

  useEffect(() => {
    api.get('users/Allysonfreitas210695/repos')
    .then(({ data }) => setRepos(data))
    .catch(() => console.log("error"))
  },
  [repos]);
  {console.log(repos)}
  return (
    <>
      <Header/>
      <S.Wrapper>
          <Title title='Projects' cor/>
        <S.Container>
            {repos.length > 0 && repos.map((respositories) => (
              <S.Repos key={respositories.id}>
                <h2>Respository:</h2>
                <span>{respositories.name}</span>
                <h2>language:</h2>
                <span>{respositories.language || 'Não foi definida'}</span>
                <Button>
                  <ViewLogo/>
                  <a href={respositories.html_url} target='_blank'>View Project</a>
                </Button>
              </S.Repos>
            ))}
        </S.Container>
      </S.Wrapper>
    </>
  );
}

