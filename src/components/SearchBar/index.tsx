import React from 'react'
import { InputGroup, Input, Icon } from './styles'

const SearchBar: React.FC = function () {
  return (
    <>
      <InputGroup>
        <Input placeholder="Buscar"></Input>
        <Icon></Icon>
      </InputGroup>
    </>
  )
}
export default SearchBar
