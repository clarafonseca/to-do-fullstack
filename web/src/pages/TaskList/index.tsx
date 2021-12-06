import React, { useEffect, useState } from 'react'

import ListFooter from '../../components/ListFooter'
import Task from '../../components/Task'

import {
  Wrapper,
  Nav,
  GoBack,
  Icon,
  EditBtn,
  Content,
  Title,
  ListContainer,
  ErrorMessage
} from './styles'

import { api } from '../../services/api'
import { useParams } from 'react-router-dom'
import { HiDotsHorizontal } from 'react-icons/hi'

type ParamsProps = {
  id: string
}

type TaskListParms = {
  id: number
  name: string
  tasksCount: number
  Tasks: [
    {
      id: number
      name: string
      concluded: boolean
    }
  ]
}

const TaskList: React.FC = () => {
  const { id } = useParams<ParamsProps>()

  const [taskList, setTaskList] = useState<TaskListParms>()
  const [error, setError] = useState('')

  useEffect(() => {
    const loadTaskLists = async () => {
      try {
        const response = await api.get(`/taskList/${id}`)
        if (response.data) {
          setTaskList(response.data)
        }
      } catch (error) {
        setError('Falha ao carregar a lista.')
      }
    }
    loadTaskLists()
  }, [id])

  return (
    <>
      <Wrapper>
        <Nav>
          <GoBack to="/">
            <Icon />
            Listas
          </GoBack>
          <EditBtn>
            <HiDotsHorizontal />
          </EditBtn>
        </Nav>
        <Content>
          <Title>{taskList ? taskList.name : 'Lista de Tarefas'}</Title>
          {error ? (
            <>
              <ErrorMessage>{error}</ErrorMessage>
              <Task
                id={1}
                name={'Limpar a casa'}
                concluded={false}
                handleClick={() => console.log('a')}
              ></Task>
              <Task
                id={1}
                name={'Comprar frutas'}
                concluded={true}
                handleClick={() => console.log('a')}
              ></Task>
            </>
          ) : (
            <ListContainer>
              {taskList
                ? taskList.Tasks.map((task) => {
                    return (
                      <Task
                        key={task.id}
                        id={task.id}
                        name={task.name}
                        concluded={task.concluded}
                        handleClick={() => (task.concluded = !task.concluded)}
                      ></Task>
                    )
                  })
                : ''}
            </ListContainer>
          )}
        </Content>
        <ListFooter></ListFooter>
      </Wrapper>
    </>
  )
}
export default TaskList
