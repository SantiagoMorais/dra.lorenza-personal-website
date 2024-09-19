// Post fetched by id

export interface ICurrentlyPost {
  post: {
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
  };
}

// All posts fetched

export interface IPostNode {
  node: {
    id: string;
    titulo: string;
    subtitulo?: string;
    imagem?: {
      url: string;
    };
    autor: {
      nome: string;
    };
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
  edges: IPostNode[];
}

export interface IPostsData {
  postsConnection: IPostsConnection;
}
