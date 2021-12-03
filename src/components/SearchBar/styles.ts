import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

export const InputGroup = styled.div`
  position: relative;
  margin-bottom: 15px;
`;
export const Input = styled.input`
  font-size: 16px;
  color: #9D9C9D;
  background: #E3E4E9;
  border: none;
  border-radius: 16px;
  display: block;
  width: 325px;
  padding: 10px 10px 10px 34px;
  outline: none;
`;

export const Icon = styled(FaSearch)`
  position: absolute;
  font-size: 14px;
  top: 14px;
  color: #9D9C9D;
  left: 12px;
`;

