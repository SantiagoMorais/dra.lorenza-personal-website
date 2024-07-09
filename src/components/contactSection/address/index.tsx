import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import location from "@assets/imgs/contactImages/location.jpg"
import mapImage from "@assets/imgs/contactImages/mapAddress.jpg"
import { fontSize, style } from "@styles/style"
import { address, googleMapsLink } from "@styles/variables"

export const Address = () => {
    return (
        <Container id="address">
            <h2 className="title">Como chegar ao consultório</h2>
            <div className="address">
                <FontAwesomeIcon icon={faMapLocationDot} className="icon" />
                <p className="text">{address}</p>
            </div>
            <div className="location">
                <div className="clinic">
                    <img src={location} alt="Consultório" className="clinicImage" />
                </div>
                <div className="map">
                    <a className="seeLocation" href={googleMapsLink} target="_blank" >
                        <h3 className="message">
                            Clique e veja o endereço no Google Maps
                        </h3>
                    </a>
                    <img src={mapImage} alt="Imagem do mapa" className="mapImage" />
                </div>
            </div>
        </Container>
    )
}

const Container = styled.section`
    max-width: 144rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;

    .title {
        font-size: ${fontSize.fontSizeMedium};
        color: ${style.primaryColor};
        text-align: center;
    }

    .address {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: ${fontSize.fontSizeBase};
        margin-bottom: 1.5rem;
        
        .icon {
            font-size: ${fontSize.fontSizeMedium};
            color: ${style.primaryColor};
        }
    }

    .location {
        display: flex;
        gap: 2rem;
        width: 100%;
        height: 35rem;

        .clinic {
            flex: 1;
            width: 100%;

            .clinicImage {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 1rem;
                filter: drop-shadow(.5rem .5rem .5rem ${style.tertiaryColor});
                object-position: top;
            }
        }
            
        .map {
            width: 100%;
            flex: 1;
            border-radius: 1rem;
            overflow: hidden;
            position: relative;
            filter: drop-shadow(.5rem .5rem .5rem ${style.tertiaryColor});

            .seeLocation {
                position: absolute;
                width: 100%;
                display: flex;
                height: 100%;
                background-color: rgba(0,0,0,.6);
                opacity: 0;
                transition: .3s;
                cursor: pointer;
                align-items: center;
                justify-content: center;
                padding: 2rem;
                
                .message {
                    color: ${style.textColor};
                    font-size: ${fontSize.fontSizeMedium};
                    text-align: center;
                }

                &:hover {
                    opacity: 1;
                }
            }
            
            .mapImage {
                width: 100%;
                height: 100%;
                object-fit: cover;
                cursor: pointer;
                object-position: center center;
            }
        }
    }

    @media (max-width: 768px) {
        .location {
            flex-direction: column;
            height: auto;

            .clinic {
                order: 2;
                height: 30rem;
                flex: auto;
            }
            
            .map {
                order: 1;
                flex: auto;
                height: 30rem;
            }
        }
    }
`