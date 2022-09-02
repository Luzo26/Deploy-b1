import styled from "styled-components";
import {Link as LinkS} from 'react-scroll';

export const Button = styled(LinkS)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#ff3333' : '#0045b5')};
  white-space: nowrap;
  width: fit-content;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#fff' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  font-family: Lato;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  z-index: 2;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#0045b5' : '#ff3333')};
  }
`
