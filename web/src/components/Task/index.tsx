import React, { useState } from 'react'
import { Container, RoundCheckbox, Name } from './styles'
import TaskIpt from '../TaskIpt'

type Props = {
  id: number
  name: string
  concluded: boolean
  handleClick: () => void
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Task: React.FC<Props> = ({
  name,
  concluded,
  handleClick,
  handleChange
}) => {
  const [transformIpt, setTransformIpt] = useState(false)
  return (
    <>
      <Container>
        <RoundCheckbox concluded={concluded} onClick={handleClick} />
        {transformIpt ? (
          <TaskIpt onChange={handleChange} value={name} />
        ) : (
          <Name onClick={() => setTransformIpt(!transformIpt)}>{name}</Name>
        )}
      </Container>
    </>
  )
}
export default Task
