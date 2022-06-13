const alunos = [
  {
    nome: 'João',
    nota: 8,
    turma: '3C',
  },
  {
    nome: 'Sofia',
    nota: 9,
    turma: '3B',
  },
  {
    nome: 'Paulo',
    nota: 6,
    turma: '3A',
  },
  {
    nome: 'Miguel',
    nota: 3,
    turma: '3F',
  },
];

function alunosAprovados(arr, media) {
  let aprovados = [];

  for (let i = 0; i < arr.length; i++){

    const { nota, nome } = arr[i];


    if (nota >= media) {
      aprovados.push(nome);
    }  
  }

  return aprovados;
}

console.log(alunosAprovados(alunos, 5));