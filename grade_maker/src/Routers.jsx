// src/Router.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Disciplina from './pages/Disciplina';
import Professor from './pages/Professor';
import NavBar from './components/NavBar';
import Curso from './pages/Cursos';
import Disponibilidade from './pages/Disponibilidade';

function AppRouter() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/disciplina" element={<Disciplina />} />
        <Route path="/professor" element={<Professor />} />
        <Route path='/curso' element={<Curso />}/>
        <Route path='/disponibilidade' element={<Disponibilidade />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;