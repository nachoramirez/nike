import styled from 'styled-components'

export const Container = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`

export const Button = styled.button`
  justify-self: center;
  background-color: #673ab7;
  border: 2px solid;
  height: 50px;
  width: 500px;
  color: #fff;
  transition: 0.25s;
  &:hover,
  &:focus {
    border-color: #4d2b8c;
    color: #fff;
    box-shadow: inset 40em 0 0 0 #4d2b8c;
  }
`
