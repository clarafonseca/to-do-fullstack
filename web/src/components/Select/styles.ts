import styled from 'styled-components'

export const Label = styled.label`
  font-weight: bold;
  font-size: 14px;
  color: #757575;
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 5px;
`

export const customStyles = {
  option: () => ({
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#333333',
    padding: 10,
    ':hover': {
      backgroundColor: 'var(--yellow-500)',
      color: 'var(--text-color-500)'
    }
  }),
  control: () => ({
    fontFamily: 'Inter',
    fontSize: 14,
    minWidth: 140,
    width: '100%',
    borderRadius: 8,
    display: 'flex'
  }),
  singleValue: () => ({
    color: '#333333'
  }),
  indicatorSeparator: () => ({
    display: 'none'
  })
}
