import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import SearchBar from '../../components/SearchBar'
import TaskList from '../../components/TaskList'
import HomeFooter from '../../components/HomeFooter'

import { Wrapper, Title, ListContainer, ErrorMessage } from './styles'

import { api } from '../../services/api'

type TaskListParms = { id: number; name: string; tasksCount: number }

const Home: React.FC = () => {
  const [taskLists, setTaskLists] = useState<TaskListParms[]>([])
  const [tasksCount, setTasksCount] = useState(0)
  const [error, setError] = useState('')

  const loadTaskLists = async () => {
    try {
      const response = await api.get('/taskList')
      if (response.data) {
        setTaskLists(response.data)
      }
    } catch (error) {
      setError('Falha ao carregar as listas.')
    }
  }

  useEffect(() => {
    loadTaskLists()
  }, [])

  return (
    <>
      <Wrapper>
        <SearchBar></SearchBar>
        <Card name="Todos" total={tasksCount}></Card>
        <Title>Minhas Listas</Title>
        {error ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : (
          <ListContainer>
            {taskLists.map((taskList) => {
              setTasksCount(tasksCount + taskList.tasksCount)
              return (
                <TaskList
                  key={taskList.id}
                  id={taskList.id}
                  name={taskList.name}
                  total={taskList.tasksCount}
                ></TaskList>
              )
            })}
          </ListContainer>
        )}
        <HomeFooter></HomeFooter>
      </Wrapper>
    </>
  )
}
export default Home
