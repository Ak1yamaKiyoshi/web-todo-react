//import { Box } from '@mui/material';
//import Task from '../common/task/Task';
//import { TaskColor, TaskSize } from '../common/task/types';
//import {  Route, Routes } from 'react-router-dom';
import Navbar from '../common/navbar/Navbar';
//import Task from '../common/task';
//import { TaskColor } from '../common/task/types';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from '../pages/login-page';
import RegisterPage from '../pages/register-page';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="login" element={<LoginPage/>} />
          <Route path="register" element={<RegisterPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
