const carrinho = [
  { productName: 'Abóbora', valuePerKg: 5, kg: 1 },
  { productName: 'Pepino', valuePerKg: 3.55, kg: 1.3 },
  { productName: 'Limão', valuePerKg: 1.2, kg: 2 },
  { productName: 'Abacate', valuePerKg: 5.4, kg: 1.67 },
  { productName: 'Morango', valuePerKg: 11.9, kg: 3 },
];

const Pagamento = carrinho.reduce((result, produto)=>{
const ValorProduto = produto.valuePerKg  * produto.kg
return result + ValorProduto
},0)

console.log(`A compra no total está em: ${Pagamento.toFixed(2)}`)

const orders = [
  {
    orderId: 'A001',
    customerName: 'Ana Silva',
    items: [
      { productId: 'P001', name: 'Notebook Pro X', category: 'Eletrônicos', price: 1500.00, quantity: 1 },
      { productId: 'P005', name: 'Mouse Gamer', category: 'Eletrônicos', price: 75.50, quantity: 2 }
    ],
    status: 'Concluído',
    orderDate: '2024-06-10'
  },
  {
    orderId: 'A002',
    customerName: 'Bruno Costa',
    items: [
      { productId: 'P003', name: 'Cadeira Ergonômica', category: 'Móveis', price: 300.00, quantity: 1 },
      { productId: 'P002', name: 'Monitor Ultrawide', category: 'Eletrônicos', price: 800.00, quantity: 1 }
    ],
    status: 'Pendente',
    orderDate: '2024-06-12'
  },
  {
    orderId: 'A003',
    customerName: 'Carla Dias',
    items: [
      { productId: 'P004', name: 'Teclado Mecânico', category: 'Eletrônicos', price: 120.00, quantity: 1 },
      { productId: 'P001', name: 'Notebook Pro X', category: 'Eletrônicos', price: 1500.00, quantity: 1 }
    ],
    status: 'Concluído',
    orderDate: '2024-06-15'
  },
  {
    orderId: 'A004',
    customerName: 'Daniel Rocha',
    items: [
      { productId: 'P006', name: 'Webcam HD', category: 'Eletrônicos', price: 50.00, quantity: 3 },
      { productId: 'P007', name: 'Fone de Ouvido', category: 'Eletrônicos', price: 90.00, quantity: 1 }
    ],
    status: 'Cancelado',
    orderDate: '2024-06-18'
  },
  {
    orderId: 'A005',
    customerName: 'Eva Souza',
    items: [
      { productId: 'P008', name: 'Mesa para Escritório', category: 'Móveis', price: 250.00, quantity: 1 }
    ],
    status: 'Concluído',
    orderDate: '2024-06-20'
  }
];

