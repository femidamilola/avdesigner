import styled from "styled-components";

const Hamburger = styled.button`
  position: absolute;
  right: 10%;
  top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 18px;
  height: 15px;
  background: transparent;
  border: none;
  cursor: pointer;

  div {
    width: 18px;
    height: 3px;
    background: #354672;
    border-radius: 5px;
    display: block;
    transition: all 0.3s linear;
    position: relative;
  }

  @media (min-width: 700px) {
    display: none;
  }
`;

type HamburgerIconProps = {
  onClick: () => void;
};

/**
 * Hamburger Icon toggles the mobile navbar on click
 */
export const HamburgerIcon = ({ onClick }: HamburgerIconProps) => (
  <Hamburger aria-label="Open the mobile navigation menu" onClick={onClick}>
    <div />
    <div />
    <div />
  </Hamburger>
);
