import { FaPlus } from 'react-icons/fa'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 325px;
  padding: 15px 0;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  z-index: 1;
  background-color: #f2f2f6;
`

export const AddNewTask = styled.button`
  color: #007aff;
  background-color: transparent;
  font-weight: bold;
  font-size: 14px;

  display: flex;
  border: none;
  outline: none;
  cursor: pointer;
`

export const IconContainer = styled.div`
  border-radius: 50%;
  background-color: #007aff;
  padding: 1px;
  height: 18px;
  width: 18px;
  margin-right: 5px;
`

export const Icon = styled(FaPlus)`
  color: white;
  font-size: 12px;
`

export const AddNewTaskList = styled.button`
  font-size: 14px;
  color: #007aff;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
