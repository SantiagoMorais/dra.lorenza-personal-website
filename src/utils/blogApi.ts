import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_HYGRAPH_API_URL,
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: import.meta.env.VITE_HYGRAPH_API_URL,
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_HYGRAPH_API_TOKEN}`,
    },
  }),
})

export const GET_POSTS_QUERY = gql`
  query getPostsQuery ($after: String, $first: Int!) {
    postsConnection (first: $first, after: $after) {
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


