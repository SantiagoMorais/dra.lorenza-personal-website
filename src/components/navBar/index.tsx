import { IconDefinition, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fontSize, style } from "@styles/style"
import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

interface IListItems {
    text: string,
    icon: IconDefinition,
    href: string
}

interface IPagesList {
    name: string,
    link: string
}

export const NavBar = () => {
    const [accordionOppened, setAccordionOppened] = useState<boolean>(false)

    const listItems: IListItems[] = [
        { text: "agendar consulta", icon: faCalendarDays, href: "" },
        { text: "WhatsApp", icon: faWhatsapp, href: "" }
    ]

    const pages: IPagesList[] = [
        {name: "home", link: "/"},
        {name: "blog", link: "/blog"},
        {name: "contato", link: "/contato"},
        {name: "como chegar", link: "/como-chegar"},
    ]

    const handleOpenAccordion = () => {
        setAccordionOppened(!accordionOppened)
    }

    return (
        <Container theme={style} data-testid="navBar">
            <div className="scheduleAppointment">
                <img src="" alt="logo" className="logo" />
                <div className="navigation">
                    <ul className="list">
                        {listItems.map(item =>
                            <li key={item.text} className="listItem">
                                <a href={item.href} className="link">
                                    <FontAwesomeIcon icon={item.icon} className="icon" />
                                    {item.text}
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            <div className="accordionBackground">
                <button
                    onClick={handleOpenAccordion}
                    className="accordionButton">
                    <FontAwesomeIcon data-testid="accordionIcon" icon={accordionOppened ? faTimes : faBars} className={`accordionIcon ${accordionOppened ? "accordionOppened" : ""}`} />
                </button>
            </div>

            <div className="pagesContainer">
                <ul className={`pages ${accordionOppened && "pagesOppened"}`}>
                    {pages.map(page =>
                        <li key={page.name} className="page">
                            <Link to={page.link} className="name">
                                {page.name}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </Container>
    )
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;

    .scheduleAppointment {
        align-self: center;
        width: 100%;
        max-width: 144rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        
        .navigation {
            display: flex;
    
            .list {
                display: flex;
                gap: 1rem 2rem;
                flex-wrap: wrap;
                justify-content: center;
    
                .listItem {
                    display: flex;
                    max-width: 20rem;
                    flex: 1;
                    align-items: center;
                    justify-content: center;
                    color: ${({ theme }) => theme.textColor};
                    text-transform: capitalize;
                    font-size: ${fontSize.fontSizeBase};
                    cursor: pointer;
                    padding: .25rem 1rem;
                    border-radius: 50px;
                    transition: .3s;
                    background-color: ${({ theme }) => theme.primaryColor};
                    min-width: fit-content;
                    word-break: break-all;
    
                    &:hover {
                        opacity: .9;
                        scale: 1.15;
                    }
                    
                    .link {
                        .icon {
                            margin-right: .5rem;
                        }
                    }
                }
            }
        }
    }

    .accordionBackground {
        width: 100%;
        display: none;
        justify-content: center;
        background: linear-gradient(90deg, ${({ theme }) => theme.primaryColor} 0%, ${({ theme }) => theme.tertiaryColor} 100%);

        .accordionButton {
            background: none;
            border: none;
            cursor: pointer;
            
            .accordionIcon {
                display: flex;
                border-radius: .5rem;
                color: ${({ theme }) => theme.textColor};
                font-size: ${fontSize.fontSizeMedium};
                padding: .5rem;
                transition: .3s ease-out;

                &.accordionOppened {
                    transform: rotate(180deg);
                }
            }
        }
    }

    .pagesContainer {
        position: relative;

        .pages {
            width: 100%;
            display: flex;
            justify-content: center;
            gap: 3rem;
            background: linear-gradient(90deg, ${({ theme }) => theme.primaryColor} 0%, ${({ theme }) => theme.tertiaryColor} 100%);
            margin: 0;
            padding: .6rem 0 .5rem;
    
            .page {
                text-transform: capitalize;
                color: ${({ theme }) => theme.textColor};
                transition: .3s;
                position: relative;
                padding: 0 0rem .2rem;

                .name {
                    font-size: ${fontSize.fontSizeBase};
                }
            
                &::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: .1rem;
                    background: ${({ theme }) => theme.textColor};
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform .5s;
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
        .scheduleAppointment {
            flex-direction: column;
            gap: 1rem;

            .navigation {
                .list {
                    .listItem {
                        font-size: ${fontSize.fontSizeSmall};
                    }
                }
            }
        }
        
        .accordionBackground {
            display: flex;
            .accordionButton {
                display: block;
            }
        }

        .pagesContainer {
            display: flex;
            width: 100%;
            justify-content: center;

            .pages {
                position: absolute;
                flex-direction: column;
                width: max-content;
                padding: 0 1rem;
                max-height: 0;
                overflow: hidden;
                transition: .5s;
                border-radius: 0 0 1rem 1rem;
                border-style: solid;
                border-width: 0 1px 1px 1px;
                border-color: transparent;
                background: none;
                gap: 2rem;

                .page {
                    color: ${({ theme }) => theme.primaryColor};
                    text-align: center;

                    .name {
                        font-size: ${fontSize.fontSizeSmall};
                    }
    
                    &::after {
                        background: ${({ theme }) => theme.primaryColor};
                    }
                }

                &.pagesOppened {
                    max-height: 15rem;
                    padding: 1rem;
                    background: ${({ theme }) => theme.secondaryColor};
                    border-color: ${({ theme }) => theme.primaryColor};
                }
            }
        }
    }
`