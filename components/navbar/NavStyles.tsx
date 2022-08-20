import styled from "styled-components";

export const NavigationContainer = styled.nav<{ isWhite?: boolean }>`
  background: ${(props) => (props.isWhite ? "#fff" : "#ebfafc")};
  padding: 25px 0;
`;

export const NavigationContentContainer = styled.div`
  width: 86%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const NavigationLinkList = styled.ul<{ isMobile?: boolean }>`
  display: ${(props) => (props.isMobile ? "flex" : "none")};
  ${(props) =>
    props.isMobile &&
    `
    border-top: 1px solid #dedede;
    padding: 50px;
    flex-direction: column;

    li {
      width: 100%;
      margin-bottom: 30px;
      text-align: center;

      a {
        font-size: 16px;
      }
    }

  `}
  list-style: none;
  align-items: center;

  @media (min-width: 700px) {
    display: flex;
    li {
      margin-left: 30px;
      &:first-child {
        margin-left: 0;
      }
    }
  }

  @media (min-width: 900px) {
    li {
      margin-left: 60px;
    }
  }
`;

export const NavigationLinkItem = styled.a<{ isActive?: boolean }>`
  color: ${(props) => (props.isActive ? "#24B0BF" : "#333")};
  font-size: 18px;
  line-height: 22px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.6s ease;
  &:hover {
    color: #24b0bf;
  }
`;

export const NavigationButton = styled.button`
  background: #24b0bf;
  border-radius: 10.6742px;
  font-family: inherit;
  border: transparent;
  width: 120px;
  height: 45px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;

  @media (min-width: 700px) {
    font-size: 18px;
    line-height: 22px;
    width: 141px;
    height: 54px;
  }
`;

/**
 * MOBILE NAVIGATION
 */
export const MobileNavContainer = styled.div`
  position: fixed;
  width: 90%;
  max-width: 300px;
  background: #fff;
  top: 0;
  right: 0;
  height: 100vh;
  overflow-y: scroll;
  z-index: 100;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavigationBlurredBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(49, 45, 63, 0.5);
  top: 0;
  left: 0;
  z-index: 99;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const MobileNavLogoArea = styled.div`
  width: 100%;
  height: 80px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dedede;
`;

export const MobileProfileButton = styled.div`
  text-align: center;
  padding: 20px 0;
`;
