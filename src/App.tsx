import { Provider } from 'react-redux'
import { store } from './store'
import Loja from './containers/Loja'
import GlobalCss from './styles'

function App() {
  return (
    // ── Provider: fornece a store Redux para toda a aplicação ──
    <Provider store={store}>
      <GlobalCss />
      <div className="App">
        <Loja />
      </div>
    </Provider>
  )
}

export default App
