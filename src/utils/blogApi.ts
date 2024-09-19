import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { env } from "env";

export const client = new ApolloClient({
  uri: env.VITE_HYGRAPH_API_URL,
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: env.VITE_HYGRAPH_API_URL,
    headers: {
      Authorization: `Bearer ${env.VITE_HYGRAPH_API_TOKEN}`,
    },
  }),
});

export const GET_POSTS_QUERY = gql`
  query getPostsQuery($after: String, $first: Int!) {
    postsConnection(after: $after, first: $first) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          titulo
          subtitulo
          data
          imagem {
            url
          }
          videoUrl
          texto {
            html
          }
          autor {
            nome
            descricao
            avatar {
              url
            }
            crm
            rqe
          }
        }
      }
    }
  }
`;
