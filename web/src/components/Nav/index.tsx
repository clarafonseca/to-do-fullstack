import React, { useState } from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import {
  Container,
  GoBack,
  Icon,
  EditBtn,
  OptionsContainer,
  Options,
  Option
} from './styles'

type Props = { handleFilter: () => void; handleDelete: () => void }

const Nav: React.FC<Props> = ({ handleFilter, handleDelete }) => {
  const [showOptions, setShowOptions] = useState(false)

  return (
    <>
      <Container>
        <GoBack to="/">
          <Icon />
          Listas
        </GoBack>
        <EditBtn onClick={() => setShowOptions(true)}>
          <HiDotsHorizontal />
        </EditBtn>
        <OptionsContainer visible={showOptions}>
          <Options>
            <Option onClick={handleFilter}>Filtrar concluidos</Option>
            <Option onClick={handleDelete}>Deletar Lista</Option>
          </Options>
        </OptionsContainer>
      </Container>
    </>
  )
}
export default Nav
