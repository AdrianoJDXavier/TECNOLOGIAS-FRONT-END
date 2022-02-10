import { createGlobalStyle } from 'styled-components'; export

    const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  button{
      background: ${({ theme }) => theme.button};
      color: ${({ theme }) => theme.textButton};
      border-color:  ${({ theme }) => theme.button};
      border-radius: 10px;
  }
  .center{
      text-align: center;
      margin-top: 1%;
  }
  .div_form{
      border: 1px solid ${({ theme }) => theme.text};
      background: ${({ theme }) => theme.form};
      margin-left:25%;
      margin-right: 25%;
      padding-top: 30px;
      padding-bottom: 50px;
      border-radius:10px;
  }
  .btn-submit{
    border-radius: 0px 10px 10px 0px;
  }
  .btn-theme{
    margin-left: 90%;
    margin-top: 1em;
    height: 40px;
    font-weight: bold;
    float: left;
  }
  .shadow{ 
    box-shadow: 5px 5px 15px 5px ${({ theme }) => theme.shadow};
  }
`; export const lightTheme = {
    body: '#f1f1f1',
    text: '#121620',
    button: '#000000',
    textButton: '#FFFFFF',
    form :'#DCDCDC',
    shadow: '#464646',
}; export const darkTheme = {
    body: '#121620',
    text: '#f1f1f1',
    button: '#FFFFFF',
    textButton: '#000000',
    form: '#1C1C1C',
    shadow: '#464646',
};