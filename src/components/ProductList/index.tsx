import styled from 'styled-components'
import { useGetProdutosQuery } from '../../services/api'
import Product from '../Product'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 32px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const Mensagem = styled.p`
  text-align: center;
  padding: 48px;
  font-size: 1.1rem;
  color: #666;
`

const ProductList = () => {
  const { data: produtos, isLoading, isError } = useGetProdutosQuery()

  if (isLoading) return <Mensagem>Carregando produtos...</Mensagem>
  if (isError) return <Mensagem>Erro ao carregar produtos.</Mensagem>

  return (
    <Grid>
      {produtos?.map((produto) => (
        <Product key={produto.id} produto={produto} />
      ))}
    </Grid>
  )
}

export default ProductList
