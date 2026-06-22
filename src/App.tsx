import { Provider } from 'react-redux'
import { store } from './store'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f5f5f5;
  }
`

const Layout = () => (
  <div style={{ display: 'flex', minHeight: '100vh' }}>
    <div style={{ flex: 1 }}>
      <ProductList />
    </div>
    <Cart />
  </div>
)

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <Layout />
    </Provider>
  )
}

export default App
