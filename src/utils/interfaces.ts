export interface IPostNode {
  id: string;
  titulo: string;
  subtitulo?: string;
  data: string;
  imagem?: {
    url: string;
  };
  videoUrl?: string;
  texto: {
    html: string;
  };
  autor: {
    nome: string;
    descricao: string;
    avatar?: {
      url: string;
    };
    crm?: number;
    rqe?: number;
  };
}

export interface IPostEdge {
  edges: IPostNode[];
}

export interface IPageInfo {
  hasNextPage: boolean;
  endCursor: string;
}

export interface IPostsConnection {
  pageInfo: IPageInfo;
  edged: IPostEdge;
}

export interface IPostsData {
  postsConnection: IPostsConnection;
}
