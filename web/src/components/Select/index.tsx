import React from 'react'
import Select from 'react-select'

import { customStyles, Container, Label } from './styles'

type Props = {
  label: string
  labelFor: string
  options: { value: string; label: string }[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange(newValue: any): void
}

const SelectIpt: React.FC<Props> = ({
  options,
  label,
  labelFor,
  handleChange
}) => {
  return (
    <>
      <Container>
        <Label htmlFor={labelFor}>{label}</Label>
        <Select
          id={labelFor}
          styles={customStyles}
          onChange={handleChange}
          options={options}
        />
      </Container>
    </>
  )
}

export default SelectIpt
