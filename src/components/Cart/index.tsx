import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  removerDoCarrinho,
  alterarQuantidade,
  limparCarrinho,
} from '../../store/reducers/carrinho'

const Aside = styled.aside`
  width: 320px;
  background: #fff;
  border-left: 1px solid #e0e0e0;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 100vh;
`

const Titulo = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  color: #1a1a2e;
  border-bottom: 2px solid #e63946;
  padding-bottom: 8px;
`

const ItemLista = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 12px;
`

const NomeItem = styled.p`
  font-size: 0.8rem;
  color: #333;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const PrecoItem = styled.p`
  font-size: 0.9rem;
  font-weight: 700;
  color: #e63946;
`

const Controles = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const BotaoQtd = styled.button`
  width: 28px;
  height: 28px;
  border: 1px solid #ccc;
  background: #f5f5f5;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #e0e0e0;
  }
`

const Quantidade = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  min-width: 20px;
  text-align: center;
`

const BotaoRemover = styled.button`
  font-size: 0.75rem;
  color: #999;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;

  &:hover {
    color: #e63946;
  }
`

const Total = styled.div`
  margin-top: auto;
  border-top: 2px solid #e0e0e0;
  padding-top: 16px;
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
`

const BotaoFinalizar = styled.button`
  background-color: #e63946;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #c1121f;
  }
`

const BotaoLimpar = styled.button`
  background: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  font-size: 0.85rem;
  cursor: pointer;
  color: #666;

  &:hover {
    border-color: #e63946;
    color: #e63946;
  }
`

const Vazio = styled.p`
  color: #aaa;
  font-size: 0.9rem;
  text-align: center;
  margin-top: 32px;
`

const Cart = () => {
  const dispatch = useAppDispatch()
  const itens = useAppSelector((state) => state.carrinho.itens)

  const total = itens.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  )

  return (
    <Aside>
      <Titulo>🛒 Carrinho</Titulo>

      {itens.length === 0 ? (
        <Vazio>Seu carrinho está vazio.</Vazio>
      ) : (
        <>
          {itens.map((item) => (
            <ItemLista key={item.id}>
              <NomeItem>{item.nome}</NomeItem>
              <PrecoItem>R$ {(item.preco * item.quantidade).toFixed(2)}</PrecoItem>
              <Controles>
                <BotaoQtd
                  onClick={() =>
                    item.quantidade > 1
                      ? dispatch(
                          alterarQuantidade({
                            id: item.id,
                            quantidade: item.quantidade - 1,
                          })
                        )
                      : dispatch(removerDoCarrinho(item.id))
                  }
                >
                  −
                </BotaoQtd>
                <Quantidade>{item.quantidade}</Quantidade>
                <BotaoQtd
                  onClick={() =>
                    dispatch(
                      alterarQuantidade({
                        id: item.id,
                        quantidade: item.quantidade + 1,
                      })
                    )
                  }
                >
                  +
                </BotaoQtd>
                <BotaoRemover onClick={() => dispatch(removerDoCarrinho(item.id))}>
                  remover
                </BotaoRemover>
              </Controles>
            </ItemLista>
          ))}

          <Total>
            <span>Total:</span>
            <span>R$ {total.toFixed(2)}</span>
          </Total>
          <BotaoFinalizar>Finalizar compra</BotaoFinalizar>
          <BotaoLimpar onClick={() => dispatch(limparCarrinho())}>
            Limpar carrinho
          </BotaoLimpar>
        </>
      )}
    </Aside>
  )
}

export default Cart
