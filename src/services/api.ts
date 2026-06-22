import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../models/Produto'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => '/products',
      transformResponse: (response: any[]) =>
        response.map((item) => ({
          id: item.id,
          nome: item.title,
          preco: item.price,
          imagem: item.image,
          categoria: item.category,
        })),
    }),
    getProduto: builder.query<Produto, number>({
      query: (id) => `/products/${id}`,
      transformResponse: (item: any) => ({
        id: item.id,
        nome: item.title,
        preco: item.price,
        imagem: item.image,
        categoria: item.category,
      }),
    }),
  }),
})

export const { useGetProdutosQuery, useGetProdutoQuery } = api
