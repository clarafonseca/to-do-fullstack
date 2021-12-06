import React from 'react'
import {
  Container,
  LinkContainer,
  LinkA,
  Icon,
  Name,
  TotalNumber
} from './styles'

type Props = { id: number; name: string; total: number }

const TaskList: React.FC<Props> = ({ id, name, total }) => {
  return (
    <>
      <Container>
        <Name>{name}</Name>
        <LinkContainer>
          <TotalNumber>{total}</TotalNumber>
          <LinkA to={`/task-list/${id}`}>
            <Icon></Icon>
          </LinkA>
        </LinkContainer>
      </Container>
    </>
  )
}
export default TaskList
