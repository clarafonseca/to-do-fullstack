import React from 'react'
import { Container, AddNewTask, IconContainer, Icon } from './styles'

const ListFooter: React.FC = () => {
  return (
    <>
      <Container>
        <AddNewTask>
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
