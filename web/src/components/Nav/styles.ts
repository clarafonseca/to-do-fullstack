import { HiChevronLeft } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.nav`
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
  position: relative;
  border-radius: 50%;
  border: 2px solid #007aff;
  color: #007aff;
  padding: 4px 4px 0 4px;
`
export const OptionsContainer = styled.div<{ visible: boolean }>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: absolute;
  right: 15px;
  top: 60px;
  border-radius: 8px;
  background-color: white;
`
export const Options = styled.ul`
  list-style: none;
`
export const Option = styled.li`
  cursor: pointer;
  padding: 8px;
  &:hover {
    color: #007aff;
  }
`
