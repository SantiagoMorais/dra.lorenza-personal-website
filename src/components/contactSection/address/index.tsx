import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import location from "@assets/imgs/location.jpg"
import mapImage from "@assets/imgs/mapAddress.jpg"
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
                <img src={location} alt="Consultório" className="clinicImage" />
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
        flex-wrap: wrap;

        .clinicImage {
            width: 100%;
            flex: 1;
            min-width: 30rem;
            max-height: 35rem;
            object-fit: cover;
            border-radius: 1rem;
            filter: drop-shadow(.5rem .5rem .5rem ${style.tertiaryColor});
        }
            
        .map {
            width: 100%;
            flex: 1;
            min-width: 30rem;
            height: 35rem;
            background-color: black;
            border-radius: 1rem;
            overflow: hidden;
            position: relative;
            filter: drop-shadow(.5rem .5rem .5rem ${style.tertiaryColor});

            .seeLocation {
                position: absolute;
                width: 100%;
                padding: 0 2rem;
                display: flex;
                height: 100%;
                background-color: rgba(0,0,0,.6);
                opacity: 0;
                transition: .3s;
                cursor: pointer;
                align-items: center;
                
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
                transition: .3s;
                cursor: pointer;

                &:hover {
                    opacity: .6;
                }
            }
        }
    }
`