import React, { InputHTMLAttributes } from 'react'
import { Input } from './styles'

type Props = InputHTMLAttributes<HTMLInputElement>

const TaskIpt: React.FC<Props> = ({ ...rest }) => {
  return (
    <>
      <Input {...rest} />
    </>
  )
}
export default TaskIpt
