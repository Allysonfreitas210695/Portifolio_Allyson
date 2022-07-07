import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  color: #000;
  background: white;
  font-size: 40px;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 10px;
`;

export const Context = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    width: 700px;
    height: 500px;
  }
`;

