import { Link } from 'react-router-dom'
import { HiChevronRight } from 'react-icons/hi'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  justify-content: space-between;
`

export const LinkContainer = styled.div`
  display: flex;
`

export const LinkA = styled(Link)`
  height: 80%;
`

export const Icon = styled(HiChevronRight)`
  color: #c7c7c8;
  font-size: 16px;
  &:hover {
    color: #8c8c8e;
  }
`

export const Name = styled.p`
  font-size: 14px;
`

export const TotalNumber = styled.p`
  color: #8c8c8e;
  font-size: 15px;
`
