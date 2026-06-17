# EBAC Sports — Redux Toolkit

Fork do projeto [havokkmorands/ebac_sports](https://github.com/havokkmorands/ebac_sports) com o gerenciamento de estado migrado de `useState` para **Redux Toolkit**.

## ✅ O que foi alterado

| Antes | Depois |
|---|---|
| `useState` para o carrinho | **Redux Toolkit** com slice |
| Fetch manual com `useEffect` | **RTK Query** (`createApi`) |
| Estado local no componente | Estado global na **store** |

## 📁 Arquivos criados/alterados

```
src/
├── store/
│   ├── index.ts              → configureStore (store Redux)
│   ├── hooks.ts              → useAppDispatch e useAppSelector tipados
│   └── reducers/
│       └── carrinho.ts       → createSlice do carrinho
├── services/
│   └── api.ts                → createApi (RTK Query)
├── models/
│   └── Produto.ts            → tipo TypeScript
└── App.tsx                   → Provider do Redux
```

## ⚙️ Conceitos Redux utilizados

- **`configureStore`** — configura a store com o reducer do carrinho e o middleware do RTK Query
- **`createSlice`** — cria o slice do carrinho com actions: `adicionarAoCarrinho`, `removerDoCarrinho`, `alterarQuantidade`, `limparCarrinho`
- **`createApi`** (RTK Query) — busca produtos da API com cache automático
- **`useSelector`** — lê os itens do carrinho da store
- **`useDispatch`** — dispara actions para adicionar/remover produtos

## ▶️ Como rodar

```bash
npm install
npm start
```
