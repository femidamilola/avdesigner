import styled from "styled-components";

export const PinkOutlinedButton = styled.button`
  border: 1px solid #e77e7a;
  border-radius: 10px;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #e77e7a;
  font-family: inherit;
  background: transparent;
  transition: all 0.6s ease;
  cursor: pointer;
  width: 184px;
  height: 50px;

  &:hover {
    background: #e77e7a;
    color: #fff;
  }
`;
