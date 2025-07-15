const carrinho = [
  { productName: 'Abóbora', valuePerKg: 5, kg: 1 },
  { productName: 'Pepino', valuePerKg: 3.55, kg: 1.3 },
  { productName: 'Limão', valuePerKg: 1.2, kg: 2 },
  { productName: 'Abacate', valuePerKg: 5.4, kg: 1.67 },
  { productName: 'Morango', valuePerKg: 11.9, kg: 3 },
];

const Pagamento = carrinho.reduce((result, produto) => {
  const ValorProduto = produto.valuePerKg * produto.kg
  return result + ValorProduto
}, 0)

console.log(`A compra no total está em: ${Pagamento.toFixed(2)}`)



const productsInStock = [
  { id: 'P001', name: 'Caneta Esferográfica', category: 'Papelaria', price: 2.50, stock: 150, lastSold: '2025-07-10' },
  { id: 'P002', name: 'Caderno Universitário', category: 'Papelaria', price: 15.00, stock: 80, lastSold: '2025-07-12' },
  { id: 'P003', name: 'Mouse Sem Fio', category: 'Eletrônicos', price: 45.90, stock: 50, lastSold: '2025-07-08' },
  { id: 'P004', name: 'Teclado Mecânico', category: 'Eletrônicos', price: 180.00, stock: 20, lastSold: '2025-07-14' },
  { id: 'P005', name: 'Bolsa para Notebook', category: 'Acessórios', price: 70.00, stock: 30, lastSold: '2025-07-05' },
  { id: 'P006', name: 'Fone de Ouvido Bluetooth', category: 'Eletrônicos', price: 120.00, stock: 65, lastSold: '2025-07-13' },
  { id: 'P007', name: 'Mochila Escolar', category: 'Acessórios', price: 95.00, stock: 40, lastSold: '2025-07-11' },
  { id: 'P008', name: 'Marcador de Texto', category: 'Papelaria', price: 4.00, stock: 200, lastSold: '2025-07-09' },
];

const ValorTotal = productsInStock.reduce((ValorStock, Stock) => {
  return ValorStock + (Stock.price * Stock.stock)
}, 0)

const ValorPapelaria = productsInStock.reduce((ValorStock, Stock) => {
  if (Stock.category == 'Papelaria') {
    papelaria = ValorStock +  Stock.stock
  }
  return papelaria
}, 0);

const ValorEletronico = productsInStock.reduce((ValorStock,Stock) =>{
  if (Stock.category !='Eletrônicos'){
    return ValorStock + 0
  }else{
    return ValorStock +  Stock.stock
  }
  
},0)

const ValorAcessorios = productsInStock.reduce((ValorStock,Stock) =>{
  if (Stock.category !='Acessórios'){
    return ValorStock + 0
  }else{
    return ValorStock +  Stock.stock
  }
  
},0)

function MaiorValor(){
 if(ValorPapelaria > ValorAcessorios && ValorPapelaria > ValorEletronico ){
    return ValorPapelaria
 }else if(ValorEletronico > ValorPapelaria && ValorEletronico > ValorAcessorios){
  return ValorEletronico
 }else if(ValorAcessorios > ValorPapelaria && ValorAcessorios > ValorEletronico){
   return ValorAcessorios
 }
}
console.log(`O valor total em estoque é de: ${ValorTotal}`)
console.log(`No estoque Papelaria temos: ${ValorPapelaria}`)
console.log(`No estoque Eletronico temos: ${ValorEletronico}`)
console.log(`No estoque Acessorios temos: ${ValorAcessorios}`)
console.log(`O maior valor é de ${MaiorValor()}`)