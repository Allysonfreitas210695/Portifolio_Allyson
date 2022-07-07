import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';
import * as S from './styled';

export const Header: React.FC = () => {
  return (
    <S.WrapperHeader>
      <S.Container>
        <Link to="/">
          <Logo/>
        </Link>
          <S.WrapperNav>
            <S.WrappeLinks>
              <S.Link>
                <Link to="/projects">Projects</Link>
              </S.Link>
              <S.Link>
                <Link to="/about">About</Link>
              </S.Link>
              <S.Link>
                <Link to="/skills">Skills</Link>
              </S.Link>
              <S.Link>
                <Link to="/contact">Contact</Link>
              </S.Link>
            </S.WrappeLinks>
          </S.WrapperNav>
      </S.Container>
    </S.WrapperHeader>
  );
}