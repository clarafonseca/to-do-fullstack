import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'

export const InputGroup = styled.div`
  position: relative;
  margin-bottom: 15px;
`
export const Input = styled.input`
  font-size: 16px;
  color: #9d9c9d;
  background: #e3e4e9;
  border: none;
  border-radius: 8px;
  display: block;
  width: 325px;
  padding: 10px 10px 10px 34px;
  outline: none;
`

export const Icon = styled(FaSearch)`
  position: absolute;
  font-size: 14px;
  top: 14px;
  color: #9d9c9d;
  left: 12px;
`
