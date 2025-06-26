import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      white: string;
      black: string;
      glass: string;
      glassBorder: string;
    };
    borderRadius: string;
    boxShadow: string;
  }
}
