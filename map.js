const ListaAlunos = [
  {
    Nome: "Enrique",
    expulso: false
  },
  {
    Nome: "João",
    expulso: true
  },
  {
    Nome: "Maria",
    expulso: false
  },
  {
    Nome: "Pedro",
    expulso: true
  },
  {
    Nome: "Ana",
    expulso: false
  },
  {
    Nome: "Carlos",
    expulso: true
  },
  {
    Nome: "Sofia",
    expulso: false
  },
  {
    Nome: "Rafael",
    expulso: true
  }
]

const NovaLista = ListaAlunos.map((alunos)=>{
     return {
      Nome: alunos.Nome,
      Rematricula: alunos.expulso == false ? true : false
     }
})

console.log(NovaLista)

const students = [
  { name: 'Rodolfo', testGrade: 7 },
  { name: 'Maria', testGrade: 5 },
  { name: 'João', testGrade: 8 },
  { name: 'Bruno', testGrade: 9 },
  { name: 'Carla', testGrade: 3 },
  { name: 'Ana', testGrade: 2 },
  { name: 'Julio', testGrade: 10 },
];

const aprovados = students.map(alunos =>{
  return {
    name: alunos.name,
    aprovados: alunos.testGrade > 5 ? 'aprovado(a)' : 'reprovado(a)' 
  }
})

console.log(aprovados)