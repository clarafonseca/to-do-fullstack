import React from 'react'
import Select from 'react-select'

import { customStyles, Container } from './styles'

type Props = {
  options: { value: string; label: string }[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange(newValue: any): void
}

const SelectIpt: React.FC<Props> = ({ options, handleChange }) => {
  return (
    <>
      <Container>
        <Select
          styles={customStyles}
          onChange={handleChange}
          placeholder="Listas..."
          options={options}
        />
      </Container>
    </>
  )
}

export default SelectIpt
