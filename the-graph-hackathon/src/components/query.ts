// queries.ts
import { gql } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';



export function getPunkDetails(punkID: string) {
  console.log(punkID);
  const client = new ApolloClient({
    uri: 'https://gateway-arbitrum.network.thegraph.com/api/d1357ccb340846b7365b0da4215c44ee/subgraphs/id/2hTKKMwLsdfJm9N7gUeajkgg8sdJwky56Zpkvg8ZcyP8', // replace with your GraphQL server URI
    cache: new InMemoryCache()
  });
  const GET_PUNK_DETAILS = gql`
  query GetPunkDetails($punkID: ID!) {
    punk(id: $punkID) {
      id
      tokenId
      owner {
        id
      }
      numberOfTransfers
      numberOfSales
      events {
        id
        type
        from {
          id
        }
        to {
          id
        }
        amount
        blockNumber
        timestamp
      }
      currentAsk {
        amount
      }
      currentBid {
        amount
      }
    }
  }   
`;
return client.query({
    query: GET_PUNK_DETAILS,
    variables: { punkID },
})
.then(response => response.data)
.catch(error => console.error(error));
}