# Usando a imagem do Node.js 18 Alpine por ser mais leve e eficiente
FROM node:18-alpine

COPY .env ./

# Define o diretório de trabalho no container
WORKDIR /app

# Copia os arquivos de configuração do projeto (package.json e yarn.lock)
COPY package.json yarn.lock ./

# Instala as dependências do projeto utilizando o Yarn
RUN yarn install

# Copia os arquivos restantes do projeto para o container
COPY . .

# Expõe a porta 3526 para comunicação com o aplicativo
EXPOSE 3526

# Comando para iniciar o aplicativo Node.js com a flag experimental
CMD ["node", "--experimental-specifier-resolution=node", "src/app.js"]
