
import { CssBaseline, ThemeProvider} from '@mui/material';
import { ColorModeContext, useMode } from './theme';

function App() {
  const [theme, colorMode] = useMode()
  return (
    <div className='App'> Clean Slate </div>
  );
}

export default App;
