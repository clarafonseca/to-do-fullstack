import { FaInbox } from 'react-icons/fa'
import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 16px;
  background-color: white;
  display: flex;
  width: 325px;
  padding: 10px;
  justify-content: space-between;
`

export const IconContainer = styled.div``

export const Icon = styled(FaInbox)`
  color: #5a6269;
  font-size: 16px;
`

export const CardName = styled.div`
  font-size: 16px;
  color: #8c8c8e;
  font-weight: bold;
`

export const TotalNumber = styled.div`
  color: #333333;
  font-size: 20px;
  font-weight: bold;
`
