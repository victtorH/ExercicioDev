 let Numbers = [1, 2, 3, 4, 5];
 let alphabet = ['a', 'b', 'c', 'd', 'e'];
 let objects = [
  { name: 'Adriana', age: 30 },
  { name: 'Carlos', age: 25 },
  { name: 'Beatriz', age: 28 }
];

// Metodo push acrescenta um elemento ao final do array
    Numbers.push(6);
    console.log(Numbers);
// Metodo legth mostra o tamanho do array
    console.log(alphabet.length);
// Metodo sort ordena os elementos do array
    console.log(objects.sort((a, b) => a.name - b.name));
// Metodo delete remove um ou mais caracteres do array
    delete alphabet[4];
    console.log(alphabet);  
// Metodo every verifica se todos os elementos do array atendem a uma condição
    objects.every(obj => obj.age > 20) ? console.log('Todos são maiores de 20') : console.log('Nem todos são maiores de 20');