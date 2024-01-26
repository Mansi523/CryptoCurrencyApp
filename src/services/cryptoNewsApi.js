import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'X-RapidAPI-Key': 'de8d5033e5mshafdd720f567ed05p1ecbedjsn6e2fe1e14632',
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com',
};

const baseUrl =  'https://cryptocurrency-news2.p.rapidapi.com';


const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl}),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory }) => createRequest(`/v1/${newsCategory}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
