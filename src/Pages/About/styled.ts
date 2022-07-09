import styled from 'styled-components';

export const Wrapper = styled.main`
  height: 90vh;
  width: 100%;
  margin-top: 68px;
  justify-content: center;

  h1 {
    width: 1180px;
    margin: 100px auto 30px auto;
    font-weight: bold;
  }
`;

export const Container = styled.div`
  width: 1180px;
  height: auto;
  display: flex;
  padding: 15px;
  background: white;
  margin: 0 auto;
  justify-content: space-around;
  flex-wrap: wrap;
  border-radius: 8px;

  h1{
    margin: 0;
    font-size: 28px;
    margin-bottom: 11px;
  }

  p{
    font-size: 22px;
    text-indent: 20px;
    font-weight: 500;
    line-height: 32px;

    a{
      text-decoration: none;
      margin-left: 6px;
    }
  }
`;