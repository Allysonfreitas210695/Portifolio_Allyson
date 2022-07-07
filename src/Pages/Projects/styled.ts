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
  background: white;
  margin: 0 auto;
  justify-content: space-around;
  flex-wrap: wrap;
  border-radius: 8px;
`;

export const Repos = styled.div` 
  width: 30%;
  height: auto;
  margin: 20px 0;
  padding: 20px 20px;
  border: 1px solid #000;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  h2 {
    font-size: 25px;
    font-weight: bold;
    margin-top: 10px;
  }

  span {
    font-size: 18px;
    font-weight: 500;
    margin-top: 5px;
  }

  button {
    margin-top: 20px;
  }
`