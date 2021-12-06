import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import SearchBar from '../../components/SearchBar'
import TaskList from '../../components/TaskList'
import HomeFooter from '../../components/HomeFooter'
import Modal from '../../components/Modal'
import SelectIpt from '../../components/Select'

import { Wrapper, Title, ListContainer, ErrorMessage, Input } from './styles'

import { api } from '../../services/api'

type TaskListParms = {
  id: number
  name: string
  Tasks: []
}

const Home: React.FC = () => {
  const [taskLists, setTaskLists] = useState<TaskListParms[]>([])
  const [tasksCount, setTasksCount] = useState(0)
  const [error, setError] = useState('')
  const [newTaskModal, setNewTaskModal] = useState(false)
  const [newTaskListModal, setNewTaskListModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [inputTaskList, setInputTaskList] = useState('')
  const [inputTask, setInputTask] = useState('')
  const [inputTaskListId, setInputTaskListId] = useState('')

  const loadTaskLists = async () => {
    try {
      const response = await api.get('/taskList')
      const { data } = response
      if (data) {
        setTaskLists(data.data)
      }
    } catch (error) {
      setError('Falha ao carregar as listas.')
    }
  }

  const loadTasks = async () => {
    try {
      const response = await api.get('/task')
      const { data } = response
      if (data) {
        setTasksCount(data.metadata.total)
      }
    } catch (error) {
      console.log('error')
    }
  }

  const handleNewTaskList = async (name: string) => {
    try {
      const response = await api.post('/taskList', { name: name })
      if (response.status === 201) {
        loadTaskLists()
        loadTasks()
      }
      setNewTaskListModal(false)
    } catch (error) {
      console.log(error)
      setNewTaskListModal(false)
    }
  }

  const handleNewTask = async (taskListId: string, name: string) => {
    try {
      const id = Number.parseInt(taskListId, 10)
      const response = await api.post('/task', {
        taskListId: id,
        name: name,
        concluded: false
      })

      if (response.status === 201) {
        loadTaskLists()
      }
      setNewTaskModal(false)
    } catch (error) {
      console.log(error)
      setNewTaskModal(false)
    }
  }

  useEffect(() => {
    loadTaskLists()
  }, [])

  useEffect(() => {
    loadTasks()
  })

  return (
    <>
      <Wrapper>
        <SearchBar
          placeholder="Buscar"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
        ></SearchBar>
        <Card name="Total de tarefas" total={tasksCount}></Card>
        <Title>Minhas Listas</Title>
        {error ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : (
          <ListContainer>
            {taskLists
              .filter((taskList) => {
                if (searchTerm === '') {
                  return taskList
                }
                const taskListName = taskList.name
                if (
                  taskListName.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return taskList
                }
              })
              .map((taskList) => {
                return (
                  <TaskList
                    key={taskList.id}
                    id={taskList.id}
                    name={taskList.name}
                    total={taskList.Tasks.length}
                  ></TaskList>
                )
              })}
          </ListContainer>
        )}
        <HomeFooter
          handleNewTask={() => setNewTaskModal(true)}
          handleNewTaskList={() => setNewTaskListModal(true)}
        ></HomeFooter>

        <Modal
          action="Nova Tarefa"
          isOpen={newTaskModal}
          toggleModalFunction={() => setNewTaskModal(false)}
          handleAction={() =>
            inputTask
              ? handleNewTask(inputTaskListId, inputTask)
              : alert('Insira o nome da tarefa.')
          }
          modalContent={
            <>
              <SelectIpt
                label="Listas:"
                labelFor="listas"
                options={taskLists.map((task) => {
                  const stringId = task.id.toString()
                  return { label: task.name, value: stringId }
                })}
                handleChange={(newValue: { label: string; value: string }) => {
                  setInputTaskListId(newValue.value)
                }}
              ></SelectIpt>
              <Input
                placeholder="Tarefa"
                onChange={(e) => {
                  setInputTask(e.target.value)
                }}
              />
            </>
          }
        ></Modal>
        <Modal
          action="Nova Lista"
          isOpen={newTaskListModal}
          toggleModalFunction={() => setNewTaskListModal(false)}
          handleAction={() =>
            inputTaskList
              ? handleNewTaskList(inputTaskList)
              : alert('Insira nome da lista de tarefas.')
          }
          modalContent={
            <Input
              placeholder="Nome da Lista"
              onChange={(e) => {
                setInputTaskList(e.target.value)
              }}
            />
          }
        ></Modal>
      </Wrapper>
    </>
  )
}
export default Home
