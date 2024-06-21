import styled from "styled-components"
import assessment1 from "@assets/imgs/assessment-1.jpg"
import assessment2 from "@assets/imgs/assessment-2.jpg"
import assessment3 from "@assets/imgs/assessment-3.jpg"
import assessment4 from "@assets/imgs/assessment-4.jpg"
import assessment5 from "@assets/imgs/assessment-5.jpg"
import assessment6 from "@assets/imgs/assessment-6.jpg"
import doctoraliaIcon from "@assets/imgs/doctoralia-icon.png"
import { doctoraliaLink } from "@styles/variables"
import { fontSize, style } from "@styles/style"
import { CarouselSlides, ICarouselInfo } from "@components/carouselSlides"

export const Assessments = () => {
    const assessments: ICarouselInfo[] = [
        { id: 1, image: assessment1 },
        { id: 2, image: assessment2 },
        { id: 3, image: assessment3 },
        { id: 4, image: assessment4 },
        { id: 5, image: assessment5 },
        { id: 6, image: assessment6 },
    ]

    return (
        <Container theme={style}>
            <h3 className="title">Veja as avaliações da Dra.Lorenza Arruda!</h3>
            <CarouselSlides info={assessments} slidesNumber={1} />
            <p className="message">
                Veja todas as avaliações da Dra.Lorenza no portal da Doctoralia!
                <a className="link" href={doctoraliaLink} target="_blank" >
                    <img src={doctoraliaIcon} alt="ícone doctoralia" className="icon" />
                    Clique aqui!
                </a>
            </p>
        </Container>
    )
}

const Container = styled.section`
    max-width: 144rem;
    width: 100%;
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .title {
        color: ${style.textColor};
        font-size: ${fontSize.fontSizeBase};
        text-align: center;
    }
    
    .message {
        color: ${style.textColor};
        font-size: ${fontSize.fontSizeSmall};
        max-width: 90rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .5rem;

        .link {
            display: flex;
            align-items: center;
            gap: .5rem;
            justify-content: center;
            opacity: .8;
            transition: .3s;
            width: fit-content;
            padding: 0 1rem;

            .icon {
                width: 3rem;
            }

            &:hover {
                opacity: 1;
                scale: 1.1;
            }
        }
    }
`