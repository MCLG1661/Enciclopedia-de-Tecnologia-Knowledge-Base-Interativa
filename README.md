# 💻 Enciclopédia de Tecnologia

*Base de Conhecimento Interativa*

![HTML5](https://img.shields.io/badge/HTML5-Frontend-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Responsive-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![JSON](https://img.shields.io/badge/Data-JSON-000000?logo=json&logoColor=white)
![Responsive](https://img.shields.io/badge/Design-Responsive-7952B3)
![Alura](https://img.shields.io/badge/Alura-Imersão%20DEV%2010-0A3871)
![Top 10](https://img.shields.io/badge/🏆_Imersão_DEV_10-TOP_10-gold)
![Status](https://img.shields.io/badge/Status-Concluído-brightgreen)

A **Enciclopédia de Tecnologia** é uma aplicação web interativa desenvolvida para
centralizar e facilitar a consulta de informações sobre linguagens de programação,
seus criadores e tecnologias relacionadas.

A solução utiliza uma base de conhecimento estruturada em **JSON**, combinada com
HTML, CSS e JavaScript para oferecer pesquisa dinâmica, apresentação em cards e
acesso rápido a informações técnicas.

---

## 🏆 Reconhecimento

O projeto foi selecionado entre os **10 melhores trabalhos da Imersão DEV 10 da Alura**.

Esse reconhecimento marcou de forma especial o desenvolvimento do projeto e representa
um importante resultado dentro da jornada de aprendizado em programação e
desenvolvimento Front-end.

---

## 🎯 Objetivo

Criar uma aplicação capaz de organizar informações sobre tecnologia em uma experiência
de consulta simples, visual e interativa.

O projeto explora conceitos como :

- Desenvolvimento Front-end
- JavaScript
- Manipulação do DOM
- Estruturas de dados em JSON
- Busca e recuperação de informações
- Renderização dinâmica de conteúdo
- UX/UI
- Responsive Web Design

---

## 💡 Conceito

O projeto funciona como uma pequena **base de conhecimento sobre tecnologia**.

Em vez de apresentar informações de maneira estática, os conteúdos são armazenados
em uma estrutura de dados e recuperados conforme as pesquisas realizadas pelo usuário.

O fluxo pode ser representado por :

```text
Usuário
   ↓
Termo de Pesquisa
   ↓
JavaScript
   ↓
Busca na Base JSON
   ↓
Correspondências
   ↓
Renderização Dinâmica
   ↓
Informações / Cards
```

---

## 🔎 Sistema de Busca

A aplicação permite pesquisar informações existentes na base de conhecimento.

A lógica em JavaScript compara os termos pesquisados com diferentes informações
armazenadas nos registros.

Isso permite recuperar conteúdos relacionados a:

- Linguagens de programação
- Criadores
- Tecnologias
- Termos associados
- Informações técnicas

Os resultados são apresentados dinamicamente na interface.

---

## 📚 Base de Conhecimento

Os conteúdos utilizados pela aplicação são estruturados em **JSON**.

Essa abordagem separa os dados da camada de apresentação :

```text
JSON
 ↓
JavaScript
 ↓
Processamento
 ↓
DOM
 ↓
Interface
```

Com isso, novos registros podem ser incorporados à base sem a necessidade de
reescrever toda a estrutura HTML da aplicação.

---

## ✨ Funcionalidades

🔍 Pesquisa Dinâmica

O usuário pode pesquisar conteúdos existentes na base utilizando diferentes termos.

🧠 Base de Conhecimento

As informações são organizadas em uma estrutura de dados utilizada pelo JavaScript.

🖥️ Renderização Dinâmica

Os resultados são criados e apresentados na página conforme a pesquisa realizada.

🃏 Cards de Conteúdo

As informações encontradas são organizadas visualmente para facilitar a leitura.

🔗 Referências Externas

Os conteúdos podem direcionar o usuário para materiais e documentações relacionadas.

📱 Interface Responsiva

A aplicação foi estruturada para funcionar em diferentes tamanhos de tela.

---

## 🖥️ Preview da Aplicação

<img width="800" height="400" alt="Captura de tela 2026-08-12 181944" src="https://github.com/user-attachments/assets/75cba164-a378-44b2-8717-ff1a506a7b70" />

---

## 🌐 Live Demo

(https://mclg1661.github.io/Enciclopedia-de-Tecnologia-Knowledge-Base-Interativa/)

---

## 🏗️ Arquitetura da Aplicação

```text
┌─────────────────────────────┐
│          Usuário            │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│      Interface Web          │
│      HTML + CSS             │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│       JavaScript            │
│                             │
│ • Captura da pesquisa       │
│ • Processamento             │
│ • Filtragem                 │
│ • Renderização              │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│          data.json          │
│                             │
│   Base de Conhecimento      │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│     Resultados da Busca     │
│                             │
│ • Linguagens                │
│ • Criadores                 │
│ • Informações               │
│ • Referências               │
└─────────────────────────────┘
```

---

## 🛠️ Tecnologias

**HTML5** - Estrutura da aplicação

**CSS3** - Layout, identidade visual e responsividade

**JavaScript** - Busca, processamento e interatividade

**JSON** - Estruturação da base de conhecimento

**DOM** - Renderização dinâmica dos resultados

**Git** - Versionamento

**GitHub** - Repositório e documentação

---

## 📂 Estrutura do Projeto

```text
Enciclopedia-de-Tecnologia-Knowledge-Base-Interativa/
│
├── assets/
│   └── images/
│       ├── javascript.png
│       ├── python.svg
│       ├── java.png
│       └── ...
├── data.json
├── index.html
├── script.js
├── style.css
└── README.md
```

---

## ▶️ Como Executar

1. Clone o repositório

```bash
git clone https://github.com/MCLG1661/Enciclopedia-de-Tecnologia-Knowledge-Base-Interativa.git
```

2. Acesse o diretório

```bash
cd Enciclopedia-de-Tecnologia-Knowledge-Base-Interativa
```

3. Execute a aplicação

Abra o arquivo:

```text
index.html
```

em seu navegador.

Também é possível utilizar um servidor local, como o **Live Server**, durante o
desenvolvimento.

---

## 💡 Competências Demonstradas

- HTML5
- CSS3
- JavaScript
- JSON
- DOM Manipulation
- Front-end Development
- Responsive Web Design
- Information Retrieval
- Data-driven Interface
- Estruturação de dados
- Busca e filtragem
- Renderização dinâmica
- UX/UI
- Git e GitHub

---

## 🚀 Possíveis Evoluções

A Enciclopédia de Tecnologia pode evoluir incorporando :

- Busca com autocomplete
- Filtros por categoria
- Ordenação de resultados
- Sistema de favoritos
- Novas linguagens e tecnologias
- Persistência com Local Storage
- API para gerenciamento dos conteúdos
- Backend
- Banco de dados
- Busca semântica
- Embeddings
- Assistente de IA
- RAG sobre a base de conhecimento

Uma evolução particularmente interessante seria transformar a aplicação em uma
**Knowledge Base inteligente**, permitindo consultas em linguagem natural sobre
o conteúdo disponível.

---

## 🎓 Contexto

Projeto desenvolvido durante a **Imersão DEV 10 da Alura**.

A experiência teve como objetivo aplicar fundamentos de programação e desenvolvimento
web na construção de uma aplicação funcional.

---

## 🤝 Como Contribuir

Contribuições são bem-vindas, especialmente para ampliar a base de conhecimento,
melhorar a experiência de busca ou incorporar novas funcionalidades.

1. Faça um Fork do projeto
2. Crie uma branch:

```bash
git checkout -b feature/nova-funcionalidade
```

3. Faça suas alterações
4. Realize o commit:

```bash
git commit -m "Adiciona nova funcionalidade"
```

5. Envie sua branch:

```bash
git push origin feature/nova-funcionalidade
```

6. Abra um Pull Request

---

## 👨‍💻 Autor

**Marcus Guedes**

Marketing | Data Science | Inteligência Artificial | Gestão de Projetos

GitHub: MCLG1661  

LinkedIn: Marcus Guedes

---

🏆 **Top 10 Imersão DEV 10 — transformando informação sobre tecnologia em uma experiência interativa de conhecimento.**

🌟 " O conhecimento é a única coisa que ninguém pode tirar de você. Explore, aprenda e compartilhe !"

🛠️ Desenvolvido com código limpo !






