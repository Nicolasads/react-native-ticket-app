import 'styled-components';
import {globalTheme} from './globalTheme';

declare module 'styled-components' {
  type ThemeType = typeof globalTheme;

  export interface DefaultTheme extends ThemeType {}
}
