import React from 'react'
import { Container, AddNewTask, IconContainer, Icon } from './styles'

type Props = {
  handleNewTask: () => void
}

const ListFooter: React.FC<Props> = ({ handleNewTask }) => {
  return (
    <>
      <Container>
        <AddNewTask onClick={() => handleNewTask && handleNewTask()}>
          <IconContainer>
            <Icon></Icon>
          </IconContainer>
          Nova Tarefa
        </AddNewTask>
      </Container>
    </>
  )
}
export default ListFooter
