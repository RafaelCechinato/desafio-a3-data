import { ReactNode } from 'react';
import styled from 'styled-components';
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  is_open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ModalContainer = styled.div<{ is_open: boolean }>`
  display: ${({ is_open }) => (is_open ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: black;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  position: absolute;
  border-radius: 5px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: black;
  font-size: 20px;
`;

const ModalComponent = ({is_open,onClose,children}: ModalProps) => {

  return (
    <ModalContainer is_open={is_open}>
        <ModalContent>
            <CloseButton onClick={onClose}><IoMdClose /></CloseButton>
            {children}
        </ModalContent>
    </ModalContainer>
  );
};

export default ModalComponent;
