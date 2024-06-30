import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NoticiasForm = ({ selectedNews, refreshNews }) => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  useEffect(() => {
    if (selectedNews) {
      setTitulo(selectedNews.titulo);
      setDescricao(selectedNews.descricao);
    }
  }, [selectedNews]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedNews) {
      await axios.put(`http://localhost:5000/noticias/${selectedNews.id}`, { titulo, descricao });
    } else {
      await axios.post('http://localhost:5000/noticias', { titulo, descricao });
    }
    setTitulo('');
    setDescricao('');
    refreshNews();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedNews ? 'Editar Notícia' : 'Adicionar Notícia'}</h2>
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Título"
        required
      />
      <textarea
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Descrição"
        required
      />
      <button type="submit">{selectedNews ? 'Atualizar' : 'Adicionar'}</button>
    </form>
  );
};

export default NoticiasForm;