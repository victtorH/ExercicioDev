const companies = [
  { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
  { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
  { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
  { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
  { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
  { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }
];

const DesPorcento = companies.map(list =>{
 return {
    name: list.name,
    marketValue:  list.marketValue - list.marketValue * 0.10,
    CEO: list.CEO,
    foundedOn: list.foundedOn
 }
})
 const Recentes = DesPorcento.filter(list => list.foundedOn > 1990 ? true : false)

 const ValorDoMercado = DesPorcento.reduce((soma, lista)=>{
    return soma + lista.marketValue
 },0)
console.log(DesPorcento)
console.log(Recentes)
console.log(ValorDoMercado)