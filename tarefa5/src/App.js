import React, {useState} from 'react';
import SignForm from './components/SignForm/SignForm';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme';

const App = () => {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <button className="btn-theme shadow" onClick={toggleTheme}>
        {isDarkTheme ?
          <span aria-label="Light mode" role="img">Tema Claro</span> :
          <span aria-label="Dark mode" role="img">Tema Escuro</span>}
      </button>
      <div className='center'>
        <GlobalStyles />
        <SignForm />
      </div>
    </ThemeProvider>
  );
}
export default App;
