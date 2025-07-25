import "styled-components";
import { defaultThemes } from "../styles/themes/themes";

type ThemeType = typeof defaultThemes

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}