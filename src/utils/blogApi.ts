import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client"

export const client = new ApolloClient({
    uri: import.meta.env.VITE_HYGRAPH_API_URL,
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: import.meta.env.VITE_HYGRAPH_API_URL,
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_HYGRAPH_API_TOKEN}`
        }
    })
})

export const GET_POSTS_QUERY = gql`
    {
        posts {
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
`;

export interface IPost {
    id: string;
    titulo: string;
    subtitulo?: string;
    data: string;
    imagem: {
        url: string;
    };
    videoUrl?: string;
    texto: {
        html: string
    },
    autor: {
        nome: string;
        descricao: string;
        avatar: {
            url: string;
        };
        crm?: number;
        rqe?: number
    };
}

export interface IPostsData {
    posts: IPost[];
}

