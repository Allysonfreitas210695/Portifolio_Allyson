import React, {  ReactElement, ReactNode } from 'react';
import * as S from './styled';

export const InfoSection: React.FC<{children: ReactNode}>= ({children}) => {
  return (
    <>
      {children}
    </>
  );
}
