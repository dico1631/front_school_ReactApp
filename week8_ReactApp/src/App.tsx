import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'usehooks-ts';
import Greeting from './component/Greeting';
import Switch from './component/Switch';
import GlobalStyle from './styles/GlobalStyle';
import defaultTheme from './styles/defaultTheme';
import darkTheme from './styles/darkTheme';
import Button from './component/Button';

export default function App() {
  const { isDarkMode, toggle } = useDarkMode();

  const theme = isDarkMode ? darkTheme : defaultTheme;
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Reset />
        <GlobalStyle />
        <Button onClick={toggle} active={isDarkMode}>
          Toggle dark mode
        </Button>
        <Greeting />
        <Switch />
      </div>
    </ThemeProvider>
  );
}
