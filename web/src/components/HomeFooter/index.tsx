import React from 'react'
import {
  Container,
  AddNewTask,
  IconContainer,
  Icon,
  AddNewTaskList
} from './styles'

const HomeFooter: React.FC = () => {
  return (
    <>
      <Container>
        <AddNewTask>
          <IconContainer>
            <Icon></Icon>
          </IconContainer>
          Nova Tarefa
        </AddNewTask>
        <AddNewTaskList>Nova Lista</AddNewTaskList>
      </Container>
    </>
  )
}
export default HomeFooter
