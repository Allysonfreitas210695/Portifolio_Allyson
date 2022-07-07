import styled from 'styled-components';

export const WrapperHeader = styled.header`
  width: 100%;
  height: 68px;
  background: #E6F7FE;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const WrapperNav = styled.nav`
  width: 450px;
  display: flex;
  padding: 20px;
  font-size: 20px;
`

export const WrappeLinks = styled.ul`
  display: flex;
  justify-content: space-around;
`

export const Link = styled.li` 
  list-style: none;
  padding: 10px;
  border-radius: 8px;
  margin-left: 8px;

  a{
    text-decoration: none;
    color: #0C0A0A;
    font-weight: bold;
    text-transform: uppercase;
  }

  &:hover {
    background-color: #38393B;

    a {
      color: white;
    }
  }

  &:nth-child(4){
    background-color: #38393B;
    a {
      color: white;
    }
  }
`