import React, { InputHTMLAttributes } from 'react'
import { InputGroup, Input, Icon } from './styles'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  placeholder: string
}

const SearchBar: React.FC<Props> = ({ placeholder, ...rest }) => {
  return (
    <>
      <InputGroup>
        <Input type="test" {...rest} placeholder={placeholder}></Input>
        <Icon></Icon>
      </InputGroup>
    </>
  )
}
export default SearchBar
