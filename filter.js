
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




 const pedidosConcluidos = list =>{
  if(list.status == 'Concluído'){
    return true
  }else{
     return false
  }
}

const Totalpedidos = (pedido)=>{
  return {
    orderId: pedido.orderId,
    totalPedido: pedido.items.reduce((valor,item )=>{
      return valor + item.price * item.quantity
    },0)

  }
}

const faturamento = (Faturamento, Valorpedido)=>{
      return Faturamento + Valorpedido.totalPedido
}

const Concluidos = orders
.filter(pedidosConcluidos)
.map(Totalpedidos)
.reduce(faturamento,0)

console.log(`faturamento mês: ${Concluidos}`)
 
orders.push({
  orderId: 'A006', 
  customerName: 'João Oliveira',
  items: [
    { productId: 'P012', name: 'Monitor LED 24 polegadas', category: 'Eletrônicos', price: 750.00, quantity: 2 },
    { productId: 'P001', name: 'Teclado Mecânico', category: 'Periféricos', price: 180.00, quantity: 1 }
  ],
  status: 'Concluído',
  orderDate: '2025-07-15',
});

const Newconcluidos = orders
.filter(pedidosConcluidos)
.map(Totalpedidos)
.reduce(faturamento,0)

console.log(`faturamento mês: ${Newconcluidos}`)
