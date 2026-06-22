import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ItemCarrinho, Produto } from '../../models/Produto'

type CarrinhoState = {
  itens: ItemCarrinho[]
}

const initialState: CarrinhoState = {
  itens: [],
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const itemExistente = state.itens.find(
        (item) => item.id === action.payload.id
      )
      if (itemExistente) {
        itemExistente.quantidade += 1
      } else {
        state.itens.push({ ...action.payload, quantidade: 1 })
      }
    },
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    },
    alterarQuantidade: (
      state,
      action: PayloadAction<{ id: number; quantidade: number }>
    ) => {
      const item = state.itens.find((i) => i.id === action.payload.id)
      if (item) {
        item.quantidade = action.payload.quantidade
      }
    },
    limparCarrinho: (state) => {
      state.itens = []
    },
  },
})

export const {
  adicionarAoCarrinho,
  removerDoCarrinho,
  alterarQuantidade,
  limparCarrinho,
} = carrinhoSlice.actions

export default carrinhoSlice.reducer
