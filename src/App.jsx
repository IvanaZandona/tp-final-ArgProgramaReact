import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import TaskForm from "./components/TaskForm/TaskForm";

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={ <NavBar />} />
        <Route path="/taskform" element={<TaskForm />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
