import styled from 'styled-components';

export const WrapperSection = styled.section`
  width: 1050px;
  height: auto;
  margin:0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Info = styled.div`
  width: 1050px;
  height: auto;
  padding: 30px;
  background: white;
  margin-bottom: 30px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const Descricao = styled.div`
  width: 980px;
  border-radius: 8px;

  p{
    color: #000;
    font-size: 30px;
    font-weight: 400;
    line-height: 35px;
    text-indent: 30px;
  }
`

export const WrapperButton = styled.div`
  display: flex;
  justify-content: end;
`

