import styled from "styled-components";

export interface IconSvgProps {
  iconHeight?: string;
  iconWidth?: string;
  iconColor?: string;
}

export const IconSvg = styled.svg<IconSvgProps>`
  ${(props) => props.iconHeight && `height: ${props.iconHeight}`};
  ${(props) => props.iconWidth && `width: ${props.iconWidth}`};
  ${(props) => props.iconColor && `color: ${props.iconColor}`};
`;
