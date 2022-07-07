import styled from 'styled-components';

export const WrapperMain = styled.main`
  width: 1050px;
  height: 500px;
  padding: 0 30px;
  margin: 100px auto 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid #FFF;
`;

export const WrapperPhoto = styled.div`
  flex: 1;
  padding: 0 5px;

  img {
    width: 400px;
    height: 400px;
    border-radius: 50%;
  }
`;

export const Descricao = styled.div`
  flex: 1;

  strong{
    text-align: right;
    font-size: 50px;
    display: block;
    color: white;
  }

  strong:nth-child(2){
    font-size: 25px;
    text-align: right;
  }
`
