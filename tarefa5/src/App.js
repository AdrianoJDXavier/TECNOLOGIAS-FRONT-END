import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SignForm from './components/SignForm/SignForm';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme';
import Menu from './components/Menu/Menu';

const App = () => {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Menu logo={logo} DarkTheme={isDarkTheme} onclick={toggleTheme}/>
      <div className='center'>
        <GlobalStyles />
        <SignForm />
      </div>
    </ThemeProvider>
  );
}
export default App;
