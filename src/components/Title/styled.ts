import styled from 'styled-components';

interface ICor{
  cor: boolean;
}

export const Title = styled.h1<ICor>`
  font-size: 35px;
  color: ${props => props.cor ? 'white' : 'black'};
  width: 200pxpx;
  text-align: start;
  padding-left: 15px;
  border-left: 10px solid ${props => props.cor ? "white" : "black"};

  margin-bottom: 25px;
  margin-top: 25px;
`;
