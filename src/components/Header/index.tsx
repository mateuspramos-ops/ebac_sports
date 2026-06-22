import styled from 'styled-components'
import { useAppSelector } from '../../store/hooks'

const HeaderContainer = styled.header`
  background-color: #1a1a2e;
  color: white;
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.h1`
  font-size: 1.4rem;
  font-weight: 700;
  span {
    color: #e63946;
  }
`

const BadgeCarrinho = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
`

const Badge = styled.span`
  background-color: #e63946;
  color: white;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
`

const Header = () => {
  const totalItens = useAppSelector((state) =>
    state.carrinho.itens.reduce((acc, item) => acc + item.quantidade, 0)
  )

  return (
    <HeaderContainer>
      <Logo>
        EBAC <span>Sports</span>
      </Logo>
      <BadgeCarrinho>
        🛒 Carrinho
        {totalItens > 0 && <Badge>{totalItens}</Badge>}
      </BadgeCarrinho>
    </HeaderContainer>
  )
}

export default Header
