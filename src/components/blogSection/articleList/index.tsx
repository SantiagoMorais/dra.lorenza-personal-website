import { fontSize, fontStyle, style } from "@styles/style"
import { articles } from "articles"
import { Link } from "react-router-dom"
import styled from "styled-components"

export const ArticleList = () => {

    return (
        <List>
            {articles.length > 0 && articles.map((article, index) =>
                <li className="articleContainer">
                    <Link to={`/${index}`} >
                        <img src={article.image} alt="Imagem do artigo" className="articleImage" />
                    </Link>
                    <div className="content">
                        <Link to={`/${index}`} className="link" >
                            <h2 className="title">
                                {article.title}
                            </h2>
                        </Link>
                        {article.subtitle &&
                            <h3 className="subtitle">
                                {article.subtitle}
                            </h3>
                        }
                        <Link to={`/${index}`} className="link" >
                            Ler publicação
                        </Link>
                    </div>

                    <h4 className="author">
                        Dra.Lorenza Arruda oi
                    </h4>
                </li>
            )}
        </List>
    )
}

const List = styled.ul`
    width: 100%;
    max-width: 144rem;
    flex-wrap: wrap;
    display: flex;
    padding: 2rem;
    gap: 2rem;

    .articleContainer {
        flex: 1;
        min-width: 35rem;
        width: calc(33% - 2rem);
        height: fit-content;
        border-radius: 1rem;
        border: .2rem solid ${style.tertiaryColor};
        overflow: hidden;
        
        .articleImage {
            width: 100%;
            height: 100%;
            max-height: 40rem;
            object-fit: cover;
            object-position: center;
        }


        .content {
            padding: 1rem;
            display: flex;
            flex-direction: column;

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

                &:hover {
                    opacity: .6;
                }
            }
        }

        .author {
            padding: 1rem;
            border-top: .1rem solid ${style.tertiaryColor};
            font-size: ${fontSize.fontSizeSmall};
            opacity: .6;
            cursor: pointer;
        }
    }

`