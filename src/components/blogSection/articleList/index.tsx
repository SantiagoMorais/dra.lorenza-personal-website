import { faAdd } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fontSize, fontStyle, style } from "@styles/style"
import { articles } from "articles"
import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

export const ArticleList = () => {
    const [articlesPerPage, setArticlesPerPage] = useState<number>(10);

    const handleLoadMoreArticles = () => {
        setArticlesPerPage((prev) => Math.min(prev + 10, articles.length));
    }

    return (
        <>
            <List data-testid="articleList">
                {articles.slice(0, articlesPerPage).map((article, index) =>
                    <li className="articleContainer">
                        <Link to={`/blog/${index}`} className="imageContainer" >
                            <img src={article.image} alt="Imagem do artigo" className="articleImage" />
                        </Link>
                        <div className="content">
                            <Link to={`/blog/${index}`} className="link" >
                                <h2 className="title">
                                    {article.title}
                                </h2>
                            </Link>
                            {article.subtitle &&
                                <h3 className="subtitle">
                                    {article.subtitle}
                                </h3>
                            }
                            <Link to={`/blog/${index}`} className="link" >
                                Ler publicação
                            </Link>
                        </div>
                        <h4 className="author">
                            Dra.Lorenza Arruda
                        </h4>
                    </li>
                )
                }
            </List>
            <LoadMoreButton onClick={handleLoadMoreArticles} disabled={articlesPerPage >= articles.length}>
                <FontAwesomeIcon icon={faAdd} />
                Carregar mais
            </LoadMoreButton>
        </>
    )
}

const List = styled.ul`
    width: 100%;
    max-width: 144rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(25rem, 1fr));
    padding: 2rem;
    gap: 2rem;

    .articleContainer {
        flex: 1;
        width: 100%;
        height: auto;
        border-radius: 1rem;
        border: .2rem solid ${style.tertiaryColor};
        overflow: hidden;
        display: flex;
        flex-direction: column;
        transition: .3s;
        
        .articleImage {
            width: 100%;
            height: 30rem;
            object-fit: cover;
            object-position: center;
            border-bottom: .1rem solid ${style.tertiaryColor};
        }

        .content {
            padding: 1rem;
            display: flex;
            flex-direction: column;
            width: 100%;

            .title {
                font-size: ${fontSize.fontSizeBase};
                text-transform: uppercase;
                color: ${style.primaryColor};
            }
            
            .subtitle {
                font-size: ${fontSize.fontSizeSmall};
                margin-bottom: 1rem;
                cursor: pointer;
                
                &::first-letter {
                    text-transform: capitalize;
                }
            }
            
            .link {
                font-size: ${fontSize.fontSizeSmall};
                color: ${style.tertiaryColor};
                font-weight: ${fontStyle.boldWeight};
                text-transform: uppercase;
                transition: opacity .3s;
                display: inline-block;
            }            
        }

        .author {
            padding: 1rem 0rem;
            margin: auto 1rem 0;
            border-top: .1rem solid ${style.tertiaryColor};
            font-size: ${fontSize.fontSizeSmall};
            opacity: .6;
            cursor: pointer;
        }

        &:hover {
            background-color: ${style.secondaryColor};
            opacity: .8;
        }
    }
    
    @media(max-width: 900px) {
        grid-template-columns: repeat(2, minmax(25rem, 1fr));
    }

    @media(max-width: 600px) {
        grid-template-columns: minmax(0rem, 1fr);
    }
`

const LoadMoreButton = styled.button`
    display: flex;
    padding: .5rem 2rem;
    align-items: center;
    gap: 1rem;
    font-size: ${fontSize.fontSizeBase};
    border-radius: 50rem;
    margin: 0 2rem 2rem;
    border: none;
    background-color: ${style.primaryColor};
    color: ${style.textColor};
    cursor: pointer;
    transition: .3s;

    &:hover {
        opacity: .8;
        scale: 1.15;
    }
`