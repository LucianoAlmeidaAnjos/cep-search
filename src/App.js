import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CepSearch from './components/CepSearch.tsx';
import NoticiasCRUD from './components/NoticiasCRUD.tsx';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Busca por CEP</Link>
            </li>
            <li>
              <Link to="/noticias">Gerenciamento de Notícias</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<CepSearch />} />
          <Route path="/noticias" element={<NoticiasCRUD />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;