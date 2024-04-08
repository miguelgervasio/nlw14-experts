const perguntas = [
  {
    pergunta: "Qual é a função do método 'getElementById' em JavaScript?",
    respostas: [
      "Selecionar um elemento pelo nome da classe",
      "Selecionar um elemento pelo ID",
      "Selecionar um elemento pelo nome da tag HTML",
    ],
    correta: 1
  },
  {
    pergunta: "O que o método 'addEventListener' faz em JavaScript?",
    respostas: [
      "Remove um ouvinte de evento de um elemento",
      "Adiciona um ouvinte de evento a um elemento",
      "Executa uma função assíncrona",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o operador de comparação estrita em JavaScript?",
    respostas: [
      "==",
      "===",
      "!=",
    ],
    correta: 1
  },
  {
    pergunta: "O que o método 'querySelector' faz em JavaScript?",
    respostas: [
      "Seleciona todos os elementos com uma classe específica",
      "Seleciona o primeiro elemento com uma classe específica",
      "Seleciona um elemento pelo ID",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o resultado da expressão '3 + '3' em JavaScript?",
    respostas: [
      "6",
      "33",
      "Erro",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do método 'push' em JavaScript?",
    respostas: [
      "Adiciona um elemento ao início de um array",
      "Adiciona um elemento ao final de um array",
      "Remove o último elemento de um array",
    ],
    correta: 2
  },
  {
    pergunta: "O que a declaração 'var' faz em JavaScript?",
    respostas: [
      "Declara uma variável globalmente",
      "Declara uma variável localmente",
      "Remove uma variável",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o método para concatenar strings em JavaScript?",
    respostas: [
      "concat()",
      "join()",
      "append()",
    ],
    correta: 0
  },
  {
    pergunta: "O que o método 'split' faz em JavaScript?",
    respostas: [
      "Separa uma string em um array de substrings",
      "Junta vários arrays em uma única string",
      "Remove espaços em branco de uma string",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o resultado da expressão '2 * '2' em JavaScript?",
    respostas: [
      "4",
      "22",
      "Erro",
    ],
    correta: 2
  },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    } 

    quizItem.querySelector('dl').appendChild(dt)
  }


  quizItem.querySelector('dl dt').remove()


  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
}