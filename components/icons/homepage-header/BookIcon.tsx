import styled from "styled-components";
import { BookBlink } from "../../../keyframes/Blink";

const BookIconSvg = styled.svg`
  position: absolute;
  right: 29px;
  bottom: 100px;
  animation: ${BookBlink} 20s infinite ease;

  @media (min-width: 700px) {
    bottom: 113px;
    left: 470px;
  }
`;

export const BookIcon = () => (
  <BookIconSvg
    width="29"
    height="29"
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="14.5"
      cy="14.5"
      r="12.6875"
      fill="#CFE0F4"
      stroke="white"
      strokeWidth="3.625"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.0319 11.5366V17.5527H15.335C14.8828 17.5527 14.5161 17.9188 14.5161 18.3724V17.8581V17.746C14.5161 17.331 14.8516 16.996 15.2655 16.996H17.5141V11.5366H18.0319Z"
      stroke="#538DD0"
      strokeWidth="0.309167"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5161 11.7493C14.5161 11.3362 14.8514 11 15.2649 11H17.5141V16.996H15.2655C14.8516 16.996 14.5161 17.331 14.5161 17.7459V17.8581V11.7493Z"
      stroke="#538DD0"
      strokeWidth="0.309167"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 11.5366V17.5527H13.6969C14.1492 17.5527 14.5158 17.9188 14.5158 18.3724V17.8581V17.746C14.5158 17.331 14.1803 16.996 13.7665 16.996H11.5178V11.5366H11Z"
      stroke="#538DD0"
      strokeWidth="0.309167"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5161 11.7493C14.5161 11.3362 14.1808 11 13.7673 11H11.5181V16.996H13.7667C14.1806 16.996 14.5161 17.331 14.5161 17.7459V17.8581V11.7493Z"
      stroke="#538DD0"
      strokeWidth="0.309167"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BookIconSvg>
);
