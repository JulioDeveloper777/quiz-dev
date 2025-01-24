import { Question } from "@/app/types/Question"

export const Questions: Question[] = [
  {
    question: 'O que é uma Promise em JavaScript?',
    options: ['a) Uma função que retorna valores imediatos', 'b) Um tipo de função assíncrona que pode ser resolvida ou rejeitada', 'c) Uma função que sempre retorna um valor', 'd) Um tipo de loop'],
    answer: 1
  },
  {
    question: 'Qual a diferença entre let e const?',
    options: ['a) Não há diferença, ambos podem ser reatribuídos', 'b) const é mais rápido que let', 'c) let é usado para variáveis que podem ser reatribuídas, const é para valores constantes', 'd) Não há diferença, ambos são usados para declarar constantes'],
    answer: 2
  },
  {
    question: 'O que significa a palavra-chave this em JavaScript?',
    options: ['a) Referência ao objeto que invocou a função', 'b) Referência ao objeto global', 'c) Referência ao objeto da classe em que a função foi declarada', 'd) Nenhuma das anteriores'],
    answer: 0
  },
  {
    question: 'Qual dos seguintes métodos é usado para transformar um objeto em JSON?',
    options: ['a) Object.parseJSON()', 'b) JSON.parse()', 'c) Object.toJSON()', 'd) JSON.stringify()'],
    answer: 3
  }
]