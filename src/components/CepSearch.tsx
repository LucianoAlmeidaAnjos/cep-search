import React, { useState } from 'react';
import axios from 'axios';
import './cepsearch.css';

const CepSearch: React.FC = () => {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState<any>(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (cep.length !== 8) {
      setError('Um CEP válido possui 8 caracteres');
      setAddress(null);
      return;
    }
    try {
      const response = await axios.get(`http://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) {
        setError('cep não encontrado');
        setAddress(null);
      } else {
        setAddress(response.data);
        setError('');
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 400) {
          setError('Erro ao buscar o CEP.');
        } else {
          setError('Erro ao buscar o CEP.');
        }
      } else {
        setError('Erro ao buscar o CEP.');
      }
      setAddress(null);
    }
  };

  const handleChangeCep = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Validar se o valor contém apenas números e tem no máximo 8 dígitos
    if (/^\d{0,8}$/.test(value)) {
      setCep(value);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="address-search">
      <h1>Buscar Endereço por CEP</h1>
      <div className="input-container">
        <input
          type="text"
          value={cep}
          onChange={handleChangeCep}
          onKeyPress={handleKeyPress}
          placeholder="Digite o CEP"
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      {error && <p>{error}</p>}
      {address && (
        <div className="address-result">
          <p><strong>Logradouro:</strong> {address.logradouro}</p>
          <p><strong>Bairro:</strong> {address.bairro}</p>
          <p><strong>Cidade:</strong> {address.localidade}</p>
          <p><strong>Estado:</strong> {address.uf}</p>
        </div>
      )}
    </div>
  );
};

export default CepSearch;
