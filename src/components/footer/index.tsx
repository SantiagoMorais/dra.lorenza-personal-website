import { Button } from "@components/button";
import {
  IconDefinition,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  emailLink,
  googleMapsLink,
  instagramLink,
  websiteCreatorsLink,
  whatsAppLink,
} from "@utils/variables";
import styled from "styled-components";
import horizontalLogo from "@assets/imgs/homeAndNavBar/horizontalLogo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { fontSize, fontStyle, style } from "@styles/style";
import data from "@json/data.json";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

interface ILinks {
  icon?: IconDefinition;
  image?: string;
  link: string;
}

export const Footer = () => {
  const [currentLink, setCurrentLink] = useState<string>("");
  const location = useLocation();

  const handlePageChange = (link: string) => {
    setCurrentLink(link);
  };

  const links: ILinks[] = [
    { icon: faInstagram, link: instagramLink },
    { icon: faAt, link: emailLink },
    { icon: faWhatsapp, link: whatsAppLink },
    // { image: doctoraliaLogo, link: scheduleAnAppointmentLink },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  useEffect(() => {
    const pathName = location.pathname;
    const pathString = pathName.slice(1).split("/")[0];

    const handleCurrentLocation = () => {
      return pathName === "/"
        ? setCurrentLink("home")
        : setCurrentLink(pathString);
    };

    handleCurrentLocation();
  }, [location]);

  return (
    <Container>
      <div className="contact">
        <p className="text">
          Agende sua consulta comigo diretamente pelo WhatsApp
        </p>
        <Button
          href={whatsAppLink}
          icon={faWhatsapp}
          content="Falar no WhatsApp"
          buttonColor="#25D366"
        />
      </div>
      <div className="content">
        <div className="imageContainer">
          <img src={horizontalLogo} alt="logo" className="logo" />
        </div>
        <div className="info">
          <p className="about">
            A Dra. Lorenza Arruda é uma médica nutróloga dedicada a oferecer um
            atendimento de qualidade, individualizado e com empatia. Ela se
            empenha em entender as necessidades dos pacientes, abordando cada
            caso de forma holística. Dra. Lorenza busca tratar, educar e
            capacitar seus pacientes, proporcionando uma experiência médica
            única, com confiança, conforto e excelência.
          </p>
          <div className="social">
            <p className="follow">Entre em contato pelas redes sociais:</p>
            <ul className="socialList">
              {links.map((item, index) => (
                <li className="listItem" key={index}>
                  <a href={item.link} className="button" target="_blank">
                    {item.image && (
                      <img
                        className="icon image"
                        src={item.image}
                        alt="ícone da doctoralia"
                      />
                    )}
                    {item.icon && (
                      <FontAwesomeIcon icon={item.icon} className="icon" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="navigation">
          {data.links.map((item) => (
            <div key={item.name} className="link">
              {item.name !== "como chegar" ? (
                <Link
                  className={`section ${currentLink === item.name || location.pathname.startsWith(`/${item.name}`) ? "pageSelected" : ""}`}
                  to={item.link}
                  onClick={() => {
                    handlePageChange(item.name), scrollToTop();
                  }}
                >
                  {item.name}
                </Link>
              ) : (
                <a href={googleMapsLink} target="_blank" className="section">
                  Como chegar
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="websiteCreator">
        <a
          href={websiteCreatorsLink}
          target="_blank"
          className="creator"
          data-testid="websiteCreatorsLink"
        >
          <p className="logo">
            <span className="first-letter">F</span>
            <span className="second-letter">S</span>
          </p>
          Criado por:
          <span className="name">Felipe Santiago Morais</span>
        </a>
      </div>
    </Container>
  );
};

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  overflow: hidden;

  .contact {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100dvw;
    background: linear-gradient(
      90deg,
      ${style.primaryColor} 0%,
      ${style.tertiaryColor} 100%
    );
    align-items: center;
    gap: 0.5rem 2rem;
    padding: 0.5rem;

    .text {
      color: ${style.textColor};
      font-size: ${fontSize.fontSizeSmall};
      min-width: fit-content;
      font-weight: ${fontStyle.mediumWeight};
      text-align: center;
    }
  }

  .content {
    display: flex;
    padding: 2rem 2rem 3rem;
    gap: 2rem;
    align-items: center;

    .imageContainer {
      flex: 1;

      .logo {
        width: 100%;
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      flex: 1;

      .about {
        max-width: 50rem;
        font-size: ${fontSize.fontSizeSmall};
        text-align: justify;
      }

      .social {
        max-width: 50rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;

        .follow {
          font-size: ${fontSize.fontSizeBase};
          font-weight: ${fontStyle.mediumWeight};
          text-align: center;
        }

        .socialList {
          display: flex;
          gap: 2rem;

          .listItem {
            .button {
              padding: 0.5rem;
              background: none;
              border: none;
              cursor: pointer;

              &:hover > .icon {
                scale: 1.1;
                opacity: 1;
                filter: drop-shadow(0 0 1rem ${style.primaryColor});
              }

              .icon {
                transition: 0.3s;
                font-size: ${fontSize.fontSizeLarge};
                color: ${style.primaryColor};
                opacity: 0.8;

                &.image {
                  filter: hue-rotate(180deg) brightness(55%);
                  width: auto;
                  height: 3.2rem;
                }
              }
            }
          }
        }
      }
    }

    .navigation {
      flex: 0.5;
      display: flex;
      flex-direction: column;
      align-self: baseline;
      align-items: end;
      gap: 0.5rem;

      .link {
        position: relative;

        .section {
          min-width: fit-content;
          font-size: ${fontSize.fontSizeBase};
          font-weight: ${fontStyle.boldWeight};
          transition: 0.3s;
          text-transform: capitalize;

          &.pageSelected::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 0.1rem;
            background: ${style.secondaryTextColor};
            transform: scaleX(1);
            transform-origin: left;
            transition: transform 0.5s;
          }
        }

        &:hover {
          color: ${style.primaryColor};
        }

        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0.1rem;
          background: ${style.primaryColor};
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s;
        }

        &:hover::after {
          transform: scaleX(1);
        }

        &:not(:hover)::after {
          transform: scaleX(0);
          transform-origin: right;
        }
      }
    }
  }

  .websiteCreator {
    width: 100dvw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      to right,
      ${style.secondaryTextColor},
      ${style.primaryColor}
    );

    .creator {
      color: ${style.textColor};
      font-weight: ${fontStyle.lightWeight};
      font-size: ${fontSize.fontSizeSmall};
      transition: 0.3s;
      opacity: 0.8;
      display: flex;
      align-items: center;

      .logo {
        font-size: ${fontSize.fontSizeBase};
        margin-right: 1rem;
        display: flex;
        justify-content: center;
        align-items: baseline;

        .first-letter {
          font-size: ${fontSize.fontSizeBase};
        }

        .second-letter {
          font-size: ${fontSize.fontSizeSmall};
          position: relative;

          &::after {
            content: "";
            height: 0.4rem;
            width: 0.4rem;
            background: orange;
            display: inline-block;
            border-radius: 50%;
            margin-left: 0.1rem;
          }
        }
      }

      .name {
        margin-left: 0.5rem;
        font-weight: ${fontStyle.mediumWeight};
      }

      &:hover {
        opacity: 1;
        letter-spacing: 0.1rem;
      }
    }
  }

  @media (max-width: 768px) {
    .content {
      flex-direction: column;

      .imageContainer {
        width: 90%;
      }

      .navigation {
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 2rem;

        .section {
          padding: 0 0 0.2rem;
        }
      }
    }
  }
`;
