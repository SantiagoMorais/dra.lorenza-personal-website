interface IArticle {
    paragraph?: string;
    topicTitle?: string;
}

export interface IArticleFormat {
    title: string,
    image: string,
    subtitle?: string,
    article: IArticle[]
}