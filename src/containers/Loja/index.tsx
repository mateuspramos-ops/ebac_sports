import { useState } from 'react'

// ── Redux Toolkit Query ──
import { useGetProdutosQuery } from '../../services/api'

// ── useSelector e useDispatch (via hooks tipados) ──
import { useAppDispatch, useAppSelector } from '../../store/hooks'

// ── Actions do slice do carrinho ──
import {
  adicionarAoCarrinho,
  removerDoCarrinho,
  alterarQuantidade
} from '../../store/reducers/carrinho'

import { Produto } from '../../models/Produto'
import ProdutoComponent from '../../components/Produto'
import Carrinho from '../../components/Carrinho'
import * as S from './styles'

const Loja = () => {
  const [carrinhoAberto, setCarrinhoAberto] = useState(false)

  // ── RTK Query: busca produtos da API ──
  const { data: produtos, isLoading, isError } = useGetProdutosQuery()

  // ── useSelector: lê o estado do carrinho da store ──
  const itensCarrinho = useAppSelector((state) => state.carrinho.itens)

  // ── useDispatch: dispara actions para a store ──
  const dispatch = useAppDispatch()

  // Total de itens no carrinho
  const totalItens = itensCarrinho.reduce(
    (total, item) => total + item.quantidade,
    0
  )

  // Valor total do carrinho
  const valorTotal = itensCarrinho.reduce(
    (total, item) => total + item.produto.preco * item.quantidade,
    0
  )

  // ── Handlers ──
  const handleAdicionarAoCarrinho = (produto: Produto) => {
    dispatch(adicionarAoCarrinho(produto))
  }

  const handleRemoverDoCarrinho = (id: number) => {
    dispatch(removerDoCarrinho(id))
  }

  const handleAlterarQuantidade = (id: number, quantidade: number) => {
    if (quantidade <= 0) {
      dispatch(removerDoCarrinho(id))
    } else {
      dispatch(alterarQuantidade({ id, quantidade }))
    }
  }

  if (isLoading) return <S.LoadingMensagem>Carregando produtos...</S.LoadingMensagem>
  if (isError) return <S.ErroMensagem>Erro ao carregar produtos. Tente novamente.</S.ErroMensagem>

  return (
    <S.Container>
      {/* Header */}
      <S.Header>
        <S.Logo>EBAC Sports</S.Logo>
        <S.BotaoCarrinho onClick={() => setCarrinhoAberto(!carrinhoAberto)}>
          🛒 Carrinho ({totalItens})
        </S.BotaoCarrinho>
      </S.Header>

      {/* Carrinho lateral */}
      {carrinhoAberto && (
        <Carrinho
          itens={itensCarrinho}
          valorTotal={valorTotal}
          onRemover={handleRemoverDoCarrinho}
          onAlterarQuantidade={handleAlterarQuantidade}
          onFechar={() => setCarrinhoAberto(false)}
        />
      )}

      {/* Grid de produtos */}
      <S.ProdutosGrid>
        {produtos?.map((produto) => (
          <ProdutoComponent
            key={produto.id}
            produto={produto}
            onAdicionarAoCarrinho={handleAdicionarAoCarrinho}
          />
        ))}
      </S.ProdutosGrid>
    </S.Container>
  )
}

export default Loja

