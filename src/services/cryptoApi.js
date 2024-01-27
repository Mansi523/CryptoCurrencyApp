import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
          'X-RapidAPI-Key': 'de8d5033e5mshafdd720f567ed05p1ecbedjsn6e2fe1e14632',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest =(url) =>({
    url,headers:cryptoApiHeaders
})

 export const cryptoApi = createApi({
   reducerPath: 'cryptoApi',
   baseQuery:fetchBaseQuery({baseUrl}),
   endpoints:(builder)=>({

    getCryptos: builder.query({
        query: (count) => createRequest(`/coins?limit=${count}`),
      }),

          // Note: To access this endpoint you need premium plan
    getExchanges: builder.query({
        query: () => createRequest('/exchanges'),
      }),
      getCryptoDetails:builder.query({
        query: (coinId) => createRequest(`/coin/${coinId}`),
      }),
      getCryptoHistory: builder.query({
        query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
      }),

   })
});

export const {
    useGetCryptosQuery,
    useGetExchangesQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
} =cryptoApi;

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       limit: '50',
//       offset: '0',
//       orderBy: '24hVolume',
//       orderDirection: 'desc'
//     },
//     headers: {
//       'X-RapidAPI-Key': 'de8d5033e5mshafdd720f567ed05p1ecbedjsn6e2fe1e14632',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };