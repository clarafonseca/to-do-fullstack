import React, { ReactElement } from 'react'
import { HiX } from 'react-icons/hi'
import {
  Wrapper,
  Container,
  Nav,
  CancelBtn,
  ActionName,
  ConfirmBtn
} from './styles'

type Props = {
  action: string
  isOpen: boolean
  handleAction: () => void
  toggleModalFunction: () => void
  modalContent: ReactElement
}

const Modal: React.FC<Props> = ({
  action,
  isOpen,
  toggleModalFunction,
  handleAction,
  modalContent
}) => {
  return (
    <>
      <Wrapper visible={isOpen}>
        <Container>
          <Nav>
            <CancelBtn onClick={toggleModalFunction}>
              <HiX />
            </CancelBtn>
            <ActionName>{action}</ActionName>
            <ConfirmBtn onClick={() => handleAction && handleAction()}>
              Ok
            </ConfirmBtn>
          </Nav>
          {modalContent}
        </Container>
      </Wrapper>
    </>
  )
}
export default Modal
