import styled from 'styled-components';

const Button = styled.button`
  border: none;
  border-radius: 0.6rem;
  min-width: 13rem;
  height: 3.2rem;
  background-color: #0075EA;
  color: #FFF;
  padding: 1.2rem 2.4rem;
  cursor: pointer;
  &:hover {
    background-color: #005CB8;
  }
  &:focus {
    outline: none;
    box-shadow: 0px 4px 8px rgba(49, 49, 49, 0.15);
    background-color: #005CB8;
  }
  &:disabled {
    background-color: #E0DEEA;
    cursor: not-allowed;
  }
`;

export default Button;