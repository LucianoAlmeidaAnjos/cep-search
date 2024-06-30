import React from 'react';
import axios from 'axios';
import './noticia.css';
const NoticiasLista = ({ news, refreshNews, setSelectedNews }) => {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/noticias/${id}`);
    refreshNews();
  };

  return (
    <div>
      <h2>Lista de Notícias</h2>
      <div>
        {news.map((item) => (
          <div key={item.id}>
            <h3>{item.titulo}</h3>
            <p>{item.descricao}</p>
            <button id='edit' onClick={() => setSelectedNews(item)}>Editar</button>
            <button id='del' onClick={() => handleDelete(item.id)}>Excluir</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticiasLista;