import React from 'react'
import { Container, RoundCheckbox, Name } from './styles'

type Props = {
  id: number
  name: string
  concluded: boolean
  handleClick: () => void
}

const Task: React.FC<Props> = ({ name, concluded, handleClick }) => {
  return (
    <>
      <Container>
        <RoundCheckbox concluded={concluded} onClick={handleClick} />
        <Name>{name}</Name>
      </Container>
    </>
  )
}
export default Task
