// queries.ts
import { gql } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';



export function getPunkDetails(id: string) {
  const client = new ApolloClient({
    uri: 'https://gateway-arbitrum.network.thegraph.com/api/d1357ccb340846b7365b0da4215c44ee/subgraphs/id/2hTKKMwLsdfJm9N7gUeajkgg8sdJwky56Zpkvg8ZcyP8', // replace with your GraphQL server URI
    cache: new InMemoryCache()
  });
  const GET_PUNK_DETAILS = gql`
  query GetPunkDetails($id: String! = "2hTKKMwLsdfJm9N7gUeajkgg8sdJwky56Zpkvg8ZcyP8") {
    punk(id: "2hTKKMwLsdfJm9N7gUeajkgg8sdJwky56Zpkvg8ZcyP8") {
        id
        tokenId
        owner {
          id
        }
        metadata {
          image
          svg
        }
        numberOfTransfers
        numberOfSales
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
    variables: { id },
})
.then(response => response.data)
.catch(error => console.error(error));
}