import './App.css';
import {Routes, Route} from 'react-router-dom'
import {useMemo} from 'react'
import { CssBaseline, ThemeProvider} from '@mui/material'
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';
import  {Toaster} from 'react-hot-toast'
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import Summary from './pages/Summary';
import Paragraph from './pages/Paragraph';
import Chatbot from './pages/Chatbot';
import JsConverter from './pages/JsConverter';
import Sifiimage from './pages/Sifiimage';
function App() {
  const theme = useMemo(()=>createTheme(themeSettings(),[]))
  return (
    <>
      <ThemeProvider theme ={theme}>
      <CssBaseline/>
      <Navbar/>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/summary' element={<Summary />}/>
        <Route path='/paragraph' element={<Paragraph />}/>
        <Route path='/chatbot' element={<Chatbot/>}/>
        <Route path='/js-converter' element={<JsConverter/>}/>
        <Route path='/scifi-image' element={<Sifiimage/>}/>
      </Routes>
      </ThemeProvider>
      
    </>
  );
}

export default App;
