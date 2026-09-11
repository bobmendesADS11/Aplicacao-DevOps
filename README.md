# Aplicacao DevOps

Uma aplicacao simples construída com NodeJS e o framework Express.

Quando requisitada, esta aplicacao retorna ao cliente um documento `.html` com uma mensagem de boas-vindas e um documento `.json` com lista dos alunos que compoem a nossa equipe.

## Como rodar a aplicacao?

1. Faça o clone do repositório para a sua máquina  
`git clone https://github.com/bobmendesADS11/Aplicacao-DevOps.git`

2. Acesse a pasta raiz do projeto pelo terminal.
`cd Aplicacao-DevOps`

3. Instale todas as dependências necessárias executando o comando de instalação de pacotes:  
`npm install` 

4. Inicie o servidor de desenvolvimento para visualizar a aplicação:  
`node app.js`

## Endpoints

- **Para visualizar (get) o documento index.html** utilize, no seu navegador, a url 
`http://localhost:3000/` - este é o endpoint raíz.

- **Para visualizar (get) a lista de alunos que compoem a equipe** utilize, no seu navegador, a url
`http://localhost:3000/integrantes` - este é o endpoint integrantes.

## Nossa Equipe

- **Caio Mazziero Schultz**
- **Henrique Pereira Rodrigues Nunes**
- **Moacir Mendes de Oliveira Neto**
