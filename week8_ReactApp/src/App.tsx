import Greeting from "./component/Greeting";
import Switch from "./component/Switch";
import { Reset } from 'styled-reset';

export default function App() {
  return (
    <div>
      <Reset />
      <GlobalStyle />
      <Greeting />
      <Switch />
    </div>
  );
}
