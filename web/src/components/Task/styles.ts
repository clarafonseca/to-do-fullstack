import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const RoundCheckbox = styled.div<{ concluded: boolean }>`
  position: relative;
  height: 20px;
  width: 22px;
  border: 1px solid ${(props) => (props.concluded ? '#007aff' : '#ccc')};
  border-radius: 50%;
  ${(props) =>
    props.concluded
      ? `&:after {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    background-color: #007aff;
    border-radius: 50%;
    top: 2px;
    left: 2px;
  }`
      : ''}
`

export const Name = styled.p`
  width: 100%;
  padding: 8px;
  margin-left: 16px;
  border-bottom: 1px solid #8c8c8e33;
`
export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-left: 16px;
  background: transparent;
  border: 0;
  border-bottom: 1px solid #8c8c8e33;
  outline: none;
`
