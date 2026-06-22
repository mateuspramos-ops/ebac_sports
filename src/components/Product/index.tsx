import styled from 'styled-components'
import { Produto } from '../../models/Produto'
import { useAppDispatch } from '../../store/hooks'
import { adicionarAoCarrinho } from '../../store/reducers/carrinho'

const Card = styled.div`
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
`

const Imagem = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
`

const Nome = styled.h3`
  font-size: 0.85rem;
  text-align: center;
  color: #333;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const Preco = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a1a2e;
`

const Botao = styled.button`
  background-color: #e63946;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.2s;

  &:hover {
    background-color: #c1121f;
  }
`

type Props = {
  produto: Produto
}

const Product = ({ produto }: Props) => {
  const dispatch = useAppDispatch()

  return (
    <Card>
      <Imagem src={produto.imagem} alt={produto.nome} />
      <Nome>{produto.nome}</Nome>
      <Preco>R$ {produto.preco.toFixed(2)}</Preco>
      <Botao onClick={() => dispatch(adicionarAoCarrinho(produto))}>
        Adicionar ao carrinho
      </Botao>
    </Card>
  )
}

export default Product
