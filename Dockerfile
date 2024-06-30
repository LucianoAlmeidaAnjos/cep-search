# Usa a imagem oficial do node como base
FROM node:latest

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de configuração e de dependências
COPY package.json package-lock.json /app/

# Instala as dependências do projeto
RUN npm install

# Copia os arquivos do projeto para o diretório de trabalho do container
COPY . /app/

# Compila o TypeScript para JavaScript
RUN npm run build

# Expõe a porta 3000 para acesso externo
EXPOSE 3000

# Comando para iniciar a aplicação quando o container for iniciado
CMD ["npm", "start"]