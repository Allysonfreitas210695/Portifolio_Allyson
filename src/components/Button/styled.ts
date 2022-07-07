import styled from 'styled-components';

export const Button = styled.button`
  width: 300px;
  padding: 12px 24px;
  background: #0C0A0A;
  border-radius: 8px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    font-size: 20px;
    color: #FFF;
    font-weight: bold;
    text-transform: uppercase;
  }

  svg {
    margin-right: 10px;
  }

  &:hover{
    background: transparent;
    border: 1px solid #000;
    transition: 0.3s;

    a{
      color: #0C0A0A;
    }

    svg {
      fill: #000;
    }
  }

`