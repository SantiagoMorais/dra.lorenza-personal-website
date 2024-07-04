import { fontSize, fontStyle, style } from "@styles/style"
import styled from "styled-components"
import scheduleImage from "@assets/imgs/contactImages/scheduleAppointment.jpg"
import { Button } from "@components/button"
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { instagramLink, phoneNumberInString, scheduleAnAppointmentLink } from "@styles/variables"

export const ScheduleAppointment = () => {
    return (
        <Container id="contact" >
            <div className="content">
                <div className="info instagram">
                    <h2 className="title">
                        Gostaria de explorar uma variedade maior de conteúdos sobre nutrologia?
                    </h2>
                    <p className="text instagram">
                        Me siga no instagram!
                        <br />
                        @dralorenzaarruda
                    </p>
                    <Button icon={faInstagram} content="Instagram" href={instagramLink} />
                    <div className="breakLine"></div>
                </div>
                <div className="imageContainer">
                    <img src={scheduleImage} alt="Marque a sua consulta" className="scheduleImage" />
                </div>
                <div className="info">
                    <h2 className="title">Pronto para transformar sua vida?</h2>
                    <p className="text">
                    Agende uma consulta hoje mesmo e descubra como podemos ajudar você a alcançar uma vida plena e saudável
                    </p>
                    <p className="text">
                        Entre em contato: <br />{phoneNumberInString} ou faça sua reserva aqui mesmo.
                    </p>
                    <Button href={scheduleAnAppointmentLink} icon={faCalendarDays} content="Agendar consulta" />
                </div>
            </div>
        </Container>
    )
}

const Container = styled.section`
    width: 100%;
    background-color: ${style.secondaryColor};
    display: flex;
    justify-content: center;

    .content {
        max-width: 120rem;
        width: 100%;
        display: flex;
        gap: 3rem;
        align-items: center;
        justify-content: center;
        padding: 0 2rem;

        .imageContainer {
            max-width: 40rem;
            height: 50rem;
            overflow: hidden; 
            position: relative;
            flex: 2;

            .scheduleImage {
                width: 100%;
                height: 100%;
                object-fit: cover;

                mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            }
        }

        .info {
            max-width: 50rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: center;
            flex: 1;

            .title {
                font-size: ${fontSize.fontSizeMedium};
                color: ${style.primaryColor};
            }

            .text {
                font-size: ${fontSize.fontSizeBase};
                font-weight: ${fontStyle.mediumWeight};

                &.instagram {
                    text-align: right;
                }
            }
        }

        .info.instagram {
            align-items: flex-end;

            .title {
                text-align: end;
            }

            .breakLine {
                width: 100%;
                height: .2rem;
                background: linear-gradient(to left, rgba(0,0,0,0), ${style.primaryColor}, rgba(0,0,0,0));
                opacity: .6;
                display: none;
            }
        }
    }

    @media (max-width: 768px) {
        .content {
            flex-direction: column;
            padding: 0 0 2rem;
            gap: 1rem;
    
            .imageContainer {
                max-width: 100%;
                width: 100%;
                height: 40rem;
                order: 1;
                flex: auto;
                
                .scheduleImage {
                    mask-image: linear-gradient(to bottom, black, black 90%, transparent 100%);
                    -webkit-mask-image: linear-gradient(to bottom, black, black 90%, transparent 100%);
                }
            }
    
            .info {
                max-width: 100%;
                text-align: center;
                align-items: center;
                padding: 0 2rem;
                order: 2;
            }

            .info.instagram {
                align-items: center;

                .title {
                    text-align: center;
                }

                .breakLine {
                    display: block;
                }
            }
        }
    }
`
