import { AppThemeType } from "./AppTheme";
import { createGlobalStyle } from 'styled-components'

export interface ThemeWrapper {
    theme: AppThemeType;
    hasNoFocus: boolean;
}

/**
 * GlobalStyle: injects global CSS
 *
 * hasNoFocus prop controls removing outline for all elements.
 */
export const GlobalStyle = createGlobalStyle<ThemeWrapper>`
  @font-face {
  font-family: LatoRegular;
  src: url("/fonts/Lato/Lato-Regular.ttf");
  }
  @font-face {
    font-family: LatoBold;
    src: url("/fonts/Lato/Lato-Bold.ttf");
  }
  @font-face {
    font-family: LatoLight;
    src: url("/fonts/Lato/Lato-Light.ttf");
  }
  @font-face {
    font-family: LatoBlack;
    src: url("/fonts/Lato/Lato-Black.ttf");
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    box-sizing: border-box;
    font-family: LatoRegular, sans-serif;
    scroll-behavior: smooth;
    color: #333;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ${(props) => props.hasNoFocus && ":focus { outline: none; }"}
`;
