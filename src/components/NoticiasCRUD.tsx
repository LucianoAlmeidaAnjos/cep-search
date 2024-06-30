import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoticiasForm from './NoticiasForm.tsx';
import NoticiasLista from './NoticiasLista.tsx';
import '../App.css';

const NoticiasCRUD = () => {
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);

  const fetchNews = async () => {
    const response = await axios.get('http://localhost:5000/noticias');
    setNews(response.data);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="App">
      <h1>Gerenciamento de Notícias</h1>
      <NoticiasForm selectedNews={selectedNews} refreshNews={fetchNews} />
      <NoticiasLista news={news} refreshNews={fetchNews} setSelectedNews={setSelectedNews} />
    </div>
  );
};

export default NoticiasCRUD;