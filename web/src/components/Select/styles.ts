import styled from 'styled-components'

export const Container = styled.div`
  margin: 5px;
  width: 305px;
`

export const customStyles = {
  option: () => ({
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#333333',
    padding: 10,
    backgroundColor: '#e3e4e9'
  }),
  control: () => ({
    fontFamily: 'Inter',
    fontSize: 14,
    width: '100%',
    borderRadius: 8,
    display: 'flex'
  }),
  indicatorSeparator: () => ({
    display: 'none'
  })
}
