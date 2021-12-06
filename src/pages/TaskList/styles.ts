import { HiChevronLeft } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 375px;
  background-color: #f2f2f6;
  padding-top: 30px;
  margin: auto;
`

export const Content = styled.section`
  margin: auto;
  width: 345px;
`

export const Title = styled.h2`
  margin: 15px auto;
  color: #007aff;
`

export const ListContainer = styled.div`
  margin-top: 15px;
  background-color: white;
  border-radius: 8px;
`

export const ErrorMessage = styled.p`
  margin-top: 15px;
  font-size: 14px;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 5px;
`

export const GoBack = styled(Link)`
  display: flex;
  align-items: center;
`
export const Icon = styled(HiChevronLeft)`
  font-size: 24px;
`
export const EditBtn = styled.button`
  border-radius: 50%;
  border: 2px solid #007aff;
  color: #007aff;
  padding: 4px 4px 0 4px;
`
