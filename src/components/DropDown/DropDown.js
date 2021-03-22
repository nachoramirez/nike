import styled from 'styled-components'
import { Container } from '../../containers/Containers.js'

export const DropDownContainer = styled(Container)`
  width: 90%;
  justify-content: flex-end;
`

export const ShortBy = styled.p`
  font-size: 22px;
  margin: 0px;
  padding: 7px 8px 0 0 ;
`

export const Ul = styled.ul`
  border-radius: 5px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #E6E6E6;
`;


export const Dropbtn = styled.div`
  width:60px;
  height: 20px;
  display: inline-block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropDownLi = styled.li`
  display: inline-block;
  &:hover {
    background-color: #DEDEDE;
  }
  &:hover ${DropDownContent} {
    display: block;
  }
`;


export const DropDownOption = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: #f1f1f1;
  }
`;