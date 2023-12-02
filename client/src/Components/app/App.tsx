//import { Box } from '@mui/material';
//import Task from '../common/task/Task';
//import { TaskColor, TaskSize } from '../common/task/types';
import Button from '../common/button/Button';
import { ButtonColor, ButtonSize, ButtonVariant } from '../common/button/types';
//import {  Route, Routes } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
//import Task from '../common/task';
//import { TaskColor } from '../common/task/types';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from '../pages/login-page';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<LoginPage />} />
          <Route path="tasks" element={<h1>tasks </h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
