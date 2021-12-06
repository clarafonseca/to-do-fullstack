import styled from 'styled-components'

export const Wrapper = styled.div<{ visible: boolean }>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`

export const Container = styled.div`
  background-color: white;
  border-radius: 8px;
  margin: 15% auto;
  padding: 20px;
  width: 345px;
`
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`
export const CancelBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #c7372f;
  width: 20px;
`
export const ActionName = styled.h3``
export const ConfirmBtn = styled(CancelBtn)`
  color: #007aff;
`
