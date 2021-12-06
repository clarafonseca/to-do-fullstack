/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

import ListFooter from '../../components/ListFooter'
import Task from '../../components/Task'
import Nav from '../../components/Nav'

import { Wrapper, Content, Title, ErrorMessage } from './styles'

import { api } from '../../services/api'
import { useParams } from 'react-router-dom'
import Modal from '../../components/Modal'
import { Input } from '../Home/styles'

type ParamsProps = {
  id: string
}

type TaskListParms = {
  id: number
  name: string
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
  const [newTaskModal, setNewTaskModal] = useState(false)
  const [error, setError] = useState('')
  const [filterConcluded, setFilterConcluded] = useState(false)
  const [inputTask, setInputTask] = useState('')

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

  const handleConcludedTask = async (id: number, concluded: boolean) => {
    try {
      const response = await api.put(`/task/${id}`, { concluded: concluded })
      if (response.status === 200) {
        loadTaskLists()
      }
    } catch (error) {
      alert(error)
    }
  }

  const handleDeleteTaskList = async (id: string) => {
    try {
      const response = await api.delete(`/taskList/${id}`)
      if (response.status === 204) {
        window.location.href = '/'
      }
    } catch (error) {
      alert(error)
    }
  }

  const handleDeleteTask = async (id: number) => {
    try {
      const response = await api.delete(`/task/${id}`)
      if (response.status === 204) {
        loadTaskLists()
      }
    } catch (error) {
      alert(error)
    }
  }

  const handleNewTask = async (name: string) => {
    try {
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

  const handleNewTaskName = async (taskId: number, value: string) => {
    try {
      if (value) {
        const response = await api.put(`/task/${taskId}`, { name: value })
        if (response.status === 200) {
          loadTaskLists()
        }
      } else {
        document.addEventListener('keydown', (event) => {
          if (event.key === 'Enter') {
            handleDeleteTask(taskId)
          }
        })
      }
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    loadTaskLists()
  }, [])

  return (
    <>
      <Wrapper>
        <Nav
          handleDelete={() => handleDeleteTaskList(id)}
          handleFilter={() => setFilterConcluded(!filterConcluded)}
        />
        <Content>
          <Title>{taskList ? taskList.name : 'Lista de Tarefas'}</Title>
          {error ? (
            <ErrorMessage>{error}</ErrorMessage>
          ) : taskList ? (
            taskList.Tasks.sort((a, b) => {
              return a.id - b.id
            })
              .filter((task) => {
                if (!filterConcluded) {
                  return task
                }
                if (task.concluded) {
                  return task
                }
              })
              .map((task) => {
                return (
                  <Task
                    key={task.id}
                    id={task.id}
                    name={task.name}
                    handleClick={() =>
                      handleConcludedTask(task.id, !task.concluded)
                    }
                    concluded={task.concluded}
                    handleChange={(e) =>
                      handleNewTaskName(task.id, e.target.value)
                    }
                  ></Task>
                )
              })
          ) : (
            ''
          )}
        </Content>
        <ListFooter handleNewTask={() => setNewTaskModal(true)}></ListFooter>
        <Modal
          action="Nova Tarefa"
          isOpen={newTaskModal}
          toggleModalFunction={() => setNewTaskModal(false)}
          handleAction={() => {
            inputTask
              ? handleNewTask(inputTask)
              : alert('Insira nome da tarefas.')
          }}
          modalContent={
            <Input
              placeholder="Nome da Lista"
              onChange={(e) => {
                setInputTask(e.target.value)
              }}
            />
          }
        ></Modal>
      </Wrapper>
    </>
  )
}
export default TaskList
