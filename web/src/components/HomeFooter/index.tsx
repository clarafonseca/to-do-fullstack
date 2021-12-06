import React from 'react'
import {
  Container,
  AddNewTask,
  IconContainer,
  Icon,
  AddNewTaskList
} from './styles'

type Props = {
  handleNewTask: () => void
  handleNewTaskList: () => void
}

const HomeFooter: React.FC<Props> = ({ handleNewTask, handleNewTaskList }) => {
  return (
    <>
      <Container>
        <AddNewTask onClick={() => handleNewTask && handleNewTask()}>
          <IconContainer>
            <Icon></Icon>
          </IconContainer>
          Nova Tarefa
        </AddNewTask>
        <AddNewTaskList
          onClick={() => handleNewTaskList && handleNewTaskList()}
        >
          Nova Lista
        </AddNewTaskList>
      </Container>
    </>
  )
}
export default HomeFooter
