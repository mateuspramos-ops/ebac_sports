export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
  categoria: string
}

export type ItemCarrinho = Produto & {
  quantidade: number
}
