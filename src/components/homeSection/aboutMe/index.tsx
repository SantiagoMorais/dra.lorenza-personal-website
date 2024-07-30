import styled from "styled-components"
import image from "@assets/imgs/homeAndNavBar/aboutMeImage.jpg"
import { Button } from "@components/button"
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons"
import { fontSize, fontStyle, style } from "@styles/style"
import data from "@json/data.json"
import { whatsAppLink } from "@utils/variables"

export const AboutMe = () => {
    return (
        <Container id="about">
            <div className="content">
                <img src={image} alt="Imagem profissional" className="aboutMeImage" />
                <div className="aboutMe">
                    <h2 className="title">Conheça a Dra. Lorenza</h2>
                    <p className="description">{data.aboutMeInfo.title}</p>
                    <ul className="curriculum">
                        {data.aboutMeInfo.academy.map(item =>
                            <li key={item} className="element">
                                {item}
                            </li>
                        )}
                    </ul>
                    <p className="description additionalInfo">Outras formações</p>
                    <ul className="curriculum">
                        {data.aboutMeInfo.otherStudies.map(item =>
                            <li key={item} className="element">
                                {item}
                            </li>
                        )}
                    </ul>
                    <Button href={whatsAppLink} icon={faCalendarDays} content="Agende a sua consulta" />
                </div>
            </div>
        </Container>
    )
}

const Container = styled.section`  
    width: 100%;
    display: flex;
    justify-content: center;

    .content {
        padding: 4rem 2rem;
        max-width: 120rem;
        width: 100%;
        display: flex;
        gap: 3rem;
        align-items: center;
        justify-content: center;

        .aboutMeImage {
            object-fit: cover;
            filter: drop-shadow(.5rem .5rem .5rem ${style.tertiaryColor});
            width: 40rem;
            max-width: 45dvw;
            border-radius: .5rem;
        }
            
        .aboutMe {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: center;
            max-width: 80rem;

            .title {
                font-size: ${fontSize.fontSizeLarge};
                color: ${style.primaryColor};
            }
            
            .description {
                font-size: ${fontSize.fontSizeBase};
                
                &.additionalInfo {
                    font-weight: ${fontStyle.boldWeight};
                    color: ${style.primaryColor};
                }
            }

            .curriculum {
                display: flex;
                flex-direction: column;
                gap: .5rem;
                padding-right: 2rem;
                text-align: justify;
                margin: 1rem 0;
                width: 100%;

                .element {
                    list-style: inside;
                    font-size: ${fontSize.fontSizeSmall};
                }
            }
        }
    }

    @media (max-width: 768px) {
        .content {
            flex-direction: column;

            .aboutMeImage {
                width: 100%;
                max-width: 90%;
            }

            .aboutMe {
                text-align: center;
                align-items: center;
            }
        }
    }
`