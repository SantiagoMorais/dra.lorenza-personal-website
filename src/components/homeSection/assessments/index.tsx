import styled from "styled-components"
import assessment1 from "@assets/imgs/assessmentsImages/assessment-1.jpg"
import assessment2 from "@assets/imgs/assessmentsImages/assessment-2.jpg"
import assessment3 from "@assets/imgs/assessmentsImages/assessment-3.jpg"
import assessment4 from "@assets/imgs/assessmentsImages/assessment-4.jpg"
import assessment5 from "@assets/imgs/assessmentsImages/assessment-5.jpg"
import assessment6 from "@assets/imgs/assessmentsImages/assessment-6.jpg"
import doctoraliaIcon from "@assets/imgs/homeAndNavBar/doctoralia-icon.png"
import { doctoraliaReviewsLink } from "@utils/variables"
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
        <Container >
            <div className="container">
                <h3 className="title">O que nossos pacientes dizem:</h3>
                <CarouselSlides info={assessments} slidesNumber={1} />
                <p className="message">
                    Veja mais depoimentos!
                    <a className="link" href={doctoraliaReviewsLink} target="_blank" >
                        <img src={doctoraliaIcon} alt="ícone doctoralia" className="icon" />
                        Clique aqui!
                    </a>
                </p>
            </div>
        </Container>
    )
}

const Container = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${style.secondaryColor};

    .container {
        max-width: 144rem;
        width: 100%;
        padding: 3rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        .title {
            color: ${style.primaryColor};
            font-size: ${fontSize.fontSizeLarge};
            text-align: center;
        }
        
        .message {
            font-size: ${fontSize.fontSizeBase};
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
                transition: .3s;
                width: fit-content;
                padding: 0 1rem;
                border: .1rem solid ${style.secondaryTextColor};
                padding: .5rem 1.5rem;
                border-radius: 50rem;
                
                .icon {
                    width: 3rem;
                }
                
                &:hover {
                    scale: 1.1;
                    background-color: ${style.textColor};
                    color: ${style.tertiaryColor};
                    border-color: ${style.tertiaryColor};
                }
            }
        }    
    }
`