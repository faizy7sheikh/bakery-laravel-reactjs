import React from 'react'
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Example from './Example';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './authentication/Login'
import SignUp from './authentication/SignUp';


const App = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#864313',
            }

        },
    });

    return (
        <>
            <ThemeProvider theme={theme} >
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<Login/>} />
                    <Route path='/signup' element={<SignUp/>} />
                    <Route index element={<Example />}/>
                </Routes>
            </BrowserRouter>
            </ThemeProvider>
        </>
    )
}

export default App

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}