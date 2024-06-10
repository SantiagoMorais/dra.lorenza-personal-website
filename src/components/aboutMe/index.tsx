import styled from "styled-components"
import image from "@assets/imgs/aboutMeImage.jpg"
import { Button } from "@components/button"
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons"
import { fontSize, style } from "@styles/style"

export const AboutMe = () => {
    const curriculumItems: string[] = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae vehicula nulla.",
        "Pellentesque volutpat euismod risus, ut posuere mi dapibus sed. Aliquam erat volutpat.",
        "Sed fringilla, velit ut consectetur tempor, nibh ex tincidunt nisl, ut varius nulla.",
        "Nulla facilisi. Sed non justo ac eros fermentum convallis. Praesent convallis dapibus.",
        "Nam ac enim dapibus, efficitur tortor eget, pellentesque magna. Nullam eget lacus.",
    ];
    
    

    return (
        <Container theme={style}>
            <div className="content">
                <img src={image} alt="Imagem profissional" className="aboutMeImage" />
                <div className="aboutMe">
                    <h2 className="title">Quem é a Dra.Lorenza Arruda</h2>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id amet odio suscipit sit officiis quis, tenetur neque fugit dolore tempore reiciendis dolorum consequuntur culpa aspernatur beatae, iusto exercitationem, nihil tempora!</p>
                    <ul className="curriculum">
                        {curriculumItems.map(item =>
                            <li key={item} className="element">
                                {item}
                            </li>
                        )}
                    </ul>
                    <Button href="" icon={faCalendarDays} content="Agende a sua consulta" />
                </div>
            </div>
        </Container>
    )
}

const Container = styled.section`  
    background: ${({theme}) => theme.secondaryColor};
    width: 100%;
    display: flex;
    justify-content: center;

    .content {
        padding: 2rem;
        max-width: 120rem;
        width: 100%;
        display: flex;
        gap: 3rem;
        align-items: center;
        justify-content: center;

        .aboutMeImage {
            object-fit: cover;
            background-color: red;
            filter: drop-shadow(.5rem .5rem .5rem ${({theme}) => theme.tertiaryColor});
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
                color: ${({theme}) => theme.primaryColor};
            }

            .description {
                font-size: ${fontSize.fontSizeBase};
            }

            .curriculum {
                display: flex;
                flex-direction: column;
                gap: .5rem;
                padding-right: 2rem;
                text-align: justify;
                margin: 1rem 0;

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