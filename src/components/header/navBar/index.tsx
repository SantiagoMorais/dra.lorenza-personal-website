import { fontSize, fontStyle, style } from "@styles/style";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import data from "@json/data.json";
import { useEffect, useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { googleMapsLink } from "@utils/variables";

export const NavBar = () => {
  const [accordionOppened, setAccordionOppened] = useState<boolean>(false);
  const [currentLink, setCurrentLink] = useState<string>("");
  const location = useLocation();

  const handleOpenAccordion = () => {
    if (window.innerWidth < 768) setAccordionOppened(!accordionOppened);
  };

  const handlePageChange = (link: string) => {
    setCurrentLink(link);
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
    <Container data-testid="navBar">
      <button
        onClick={handleOpenAccordion}
        className={`accordionButton ${accordionOppened && "buttonFixed"}`}
        data-testid="openWindowButton"
      >
        <FontAwesomeIcon
          data-testid="accordionIcon"
          icon={accordionOppened ? faTimes : faBars}
          className={`accordionIcon ${accordionOppened ? "accordionOppened" : ""}`}
        />
      </button>

      <div className={`${accordionOppened && "shadow"}`}></div>

      <div className="pagesContainer">
        <ul className={`pages ${accordionOppened && "pagesOppened"}`}>
          {data.links.map((page) => (
            <li
              key={page.name}
              className="page"
              onClick={() => {
                handleOpenAccordion(),
                  page.name !== "como chegar"
                    ? handlePageChange(page.name)
                    : "";
              }}
            >
              {page.name !== "como chegar" ? (
                <Link
                  to={page.link}
                  className={`name ${currentLink === page.name || location.pathname.startsWith(`/${page.name}`) ? "pageSelected" : ""}`}
                >
                  {page.name}
                </Link>
              ) : (
                <a href={googleMapsLink} target="_blank" className="name">
                  Como chegar
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

const Container = styled.section`
  .accordionButton {
    border: none;
    cursor: pointer;
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: ${fontSize.fontSizeMedium};
    background: none;
    z-index: 3;
    display: none;

    .accordionIcon {
      display: flex;
      border-radius: 0.5rem;
      font-size: ${fontSize.fontSizeMedium};
      padding: 0.5rem;
      transition: 0.3s ease-out;

      &.accordionOppened {
        transform: rotate(180deg);
      }
    }
  }

  .pagesContainer {
    position: relative;
    z-index: 1;

    .pages {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 3rem;
      background: linear-gradient(
        90deg,
        ${style.primaryColor} 0%,
        ${style.tertiaryColor} 100%
      );
      margin: 0;
      padding: 0.6rem 0 0.5rem;

      .page {
        text-transform: capitalize;
        color: ${style.textColor};
        transition: 0.3s;
        position: relative;

        .name {
          font-size: ${fontSize.fontSizeBase};
          display: flex;
          gap: 0.5rem;
          align-items: center;
          position: relative;

          &.pageSelected::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 0.1rem;
            background: ${style.textColor};
            transform: scaleX(1);
            transform-origin: left;
            transition: transform 0.5s;
          }

          .homeSections {
            z-index: 2;
            position: absolute;
            top: 3.5rem;
            left: 50%;
            transform: translateX(-50%);
            width: max-content;
            border-radius: 1rem;
            background-color: ${style.textColor};
            color: ${style.primaryColor};
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 0;
            transition:
              height 0.5s,
              padding 0.5s;
            overflow: hidden;
            padding: 0 1rem;

            &.showSections {
              height: 15rem;
              padding: 0.5rem 1rem;
            }

            li {
              position: relative;

              a {
                cursor: pointer;
                text-align: center;
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
                transform-origin: right;
              }
            }
          }
        }

        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0.1rem;
          background: ${style.textColor};
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

  @media (max-width: 768px) {
    .accordionButton {
      display: block;

      &.buttonFixed {
        position: fixed;
      }
    }

    .shadow {
      position: fixed;
      width: 100dvw;
      height: 100dvh;
      background: black;
      opacity: 0.6;
      z-index: 2;
      transition: 0.3s;
      top: 0;
      left: 0;
    }

    .pagesContainer {
      position: fixed;
      right: 0;
      bottom: 0;
      z-index: 2;

      .pages {
        flex-direction: column;
        width: 0;
        height: 100dvh;
        overflow: hidden;
        transition:
          width 0.5s,
          padding 0.5s;
        border-style: solid;
        border-width: 0 0 0 0.1rem;
        border-color: transparent;
        background: none;
        gap: 2rem;
        opacity: 0;
        justify-content: start;

        .page {
          color: ${style.primaryColor};
          text-align: left;
          width: 100%;

          .name {
            font-size: ${fontSize.fontSizeBase};
            display: inline-block;
            font-weight: ${fontStyle.boldWeight};
            line-height: 120%;
          }

          &::after {
            background: ${style.primaryColor};
          }
        }

        &.pagesOppened {
          opacity: 1;
          background: ${style.textColor};
          border-color: ${style.primaryColor};
          width: 20rem;
          padding: 5rem 2rem;
        }
      }
    }
  }
`;
