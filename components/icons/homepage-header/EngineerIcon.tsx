import styled from "styled-components";
import { EngineerBlink } from "../../../keyframes/Blink";

const EngineerIconSvg = styled.svg`
  position: absolute;
  top: 20px;
  right: 54px;
  animation: ${EngineerBlink} 20s infinite ease;

  @media (min-width: 700px) {
    bottom: 131px;
    right: 307px;
  }
`;

export const EngineerIcon = () => (
  <EngineerIconSvg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="21"
      cy="21"
      r="18.375"
      fill="#FFF8DB"
      stroke="white"
      strokeWidth="5.25"
    />
    <path
      d="M18.8778 19.4083L17.8167 14.633C19.8329 13.6249 22.1674 13.6249 24.1837 14.633L23.1225 19.4083"
      stroke="#FFCC00"
      strokeWidth="1.06117"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24.0245 15.4819C25.7224 16.49 26.8366 18.3471 26.8366 20.4694V21.5306L27.8978 22.5918H21.0001H14.1025L15.1637 21.5306V20.4694C15.1637 18.3471 16.2779 16.49 17.9758 15.4819"
      stroke="#FFCC00"
      strokeWidth="1.06117"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.7026 22.645C16.6495 22.9634 16.5964 23.3348 16.5964 23.6531C16.5964 24.0245 16.6495 24.3429 16.7026 24.6612C17.2331 24.6082 17.7637 24.8204 18.029 25.351C18.2943 25.8285 18.2412 26.4122 17.9229 26.8366C18.4004 27.3142 19.0371 27.6856 19.7269 27.8978C19.9391 27.4203 20.4166 27.0489 21.0003 27.0489C21.5839 27.0489 22.0615 27.4203 22.2737 27.8978C22.9635 27.6856 23.5471 27.3142 24.0777 26.8366C23.7593 26.4122 23.7063 25.8285 23.9716 25.351C24.2369 24.8735 24.8205 24.6082 25.298 24.6612C25.3511 24.3429 25.4041 23.9715 25.4041 23.6531C25.4041 23.2817 25.3511 22.9634 25.298 22.645"
      stroke="#FFCC00"
      strokeWidth="1.06117"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.8329 22.5918C19.5676 22.8571 19.4084 23.2285 19.4084 23.653C19.4084 24.555 20.0982 25.2447 21.0002 25.2447C21.9022 25.2447 22.592 24.555 22.592 23.653C22.592 23.2285 22.4328 22.8571 22.1675 22.5918"
      stroke="#FFCC00"
      strokeWidth="1.06117"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </EngineerIconSvg>
);
