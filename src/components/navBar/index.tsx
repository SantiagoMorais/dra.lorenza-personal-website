import { Button } from "@components/button"
import { faBars, faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fontSize, fontStyle, style } from "@styles/style"
import { useContext, useState } from "react"
import styled from "styled-components"
import verticalLogo from "@assets/imgs/verticalLogo.jpg"
import horizontalLogo from "@assets/imgs/horizontalLogo.jpg"
import { Link } from "react-router-dom"
import { navBarButtons, } from "@styles/variables"
import data from "@json/data.json"
import { NavBarContext } from "@contexts/navBarContext"

export const NavBar = () => {
    const [accordionOppened, setAccordionOppened] = useState<boolean>(false)
    const [showHomeSections, setShowHomeSections] = useState<boolean>(false)
    const { currentLink, setCurrentLink } = useContext(NavBarContext);

    const handleOpenAccordion = () => {
        if (window.innerWidth < 768) setAccordionOppened(!accordionOppened)
    }

    const handlePageChange = (link: string) => {
        setCurrentLink(link);
    }

    const handleShowSections = () => {
        setShowHomeSections(!showHomeSections)
    }

    interface IHomeSections {
        name: string,
        link: string
    }

    const homeSections: IHomeSections[] = [
        { name: "sobre mim", link: "#aboutMe" },
        { name: "cuidar além", link: "#caringBeyond" },
        { name: "serviços", link: "#services" },
        { name: "depoimentos", link: "#depositions" },
        { name: "perguntas frequentes", link: "#faqs" }
    ]

    return (
        <Container data-testid="navBar" id="home" $showHomeSections={showHomeSections}>
            <div className="scheduleAppointment">
                <Link to={"/"}>
                    <img src={horizontalLogo} alt="logo" className="logo horizontal" />
                    <img src={verticalLogo} alt="logo" className="logo vertical" />
                </Link>
                <div className="navigation">
                    <div className="list">
                        {navBarButtons.map(item =>
                            <Button key={item.text} content={item.text} href={item.href} icon={item.icon} />
                        )}
                    </div>
                </div>
            </div>

            <button
                onClick={handleOpenAccordion}
                className={`accordionButton ${accordionOppened && "buttonFixed"}`}
                data-testid="openWindowButton"
            >
                <FontAwesomeIcon data-testid="accordionIcon" icon={accordionOppened ? faTimes : faBars} className={`accordionIcon ${accordionOppened ? "accordionOppened" : ""}`} />
            </button>

            <div className={`${accordionOppened && "shadow"}`}></div>

            <div className="pagesContainer">
                <ul className={`pages ${accordionOppened && "pagesOppened"}`}>
                    {data.links.map(page =>
                        <li
                            key={page.name}
                            className="page"
                            onClick={() => {
                                handleOpenAccordion(),
                                    handlePageChange(page.name)
                            }}
                        >
                            <Link to={page.link} className={`name ${currentLink === page.name ? "pageSelected" : ""}`}>
                                {page.name}
                                {page.name === "home" &&
                                    <>
                                        <button className={`homeButton ${currentLink === "home" && "homeSection"}`} onClick={() => handleShowSections()}>
                                            <FontAwesomeIcon icon={faChevronDown} className={`icon ${showHomeSections && "buttonSelected"}`} />
                                        </button>
                                        <ul className={`homeSections ${showHomeSections && "showSections"}`}>
                                            {homeSections && homeSections.map(section =>
                                                <li key={section.name} className="section">
                                                    <a href={section.link}>{section.name}</a>
                                                </li>
                                            )}
                                        </ul>
                                    </>
                                }
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </Container>
    )
}

const Container = styled.section<{ $showHomeSections: boolean }>`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    z-index: 2;

    .scheduleAppointment {
        align-self: center;
        width: 100%;
        max-width: 144rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;

        .logo {
            width: 30rem;
        }

        .logo.vertical {
            display: none;
        }
        
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
                    color: ${style.textColor};
                    text-transform: capitalize;
                    font-size: ${fontSize.fontSizeBase};
                    cursor: pointer;
                    padding: .25rem 1rem;
                    border-radius: 50px;
                    transition: .3s;
                    background-color: ${style.primaryColor};
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
            border-radius: .5rem;
            font-size: ${fontSize.fontSizeMedium};
            padding: .5rem;
            transition: .3s ease-out;

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
            background: linear-gradient(90deg, ${style.primaryColor} 0%, ${style.tertiaryColor} 100%);
            margin: 0;
            padding: .6rem 0 .5rem;
    
            .page {
                text-transform: capitalize;
                color: ${style.textColor};
                transition: .3s;
                position: relative;

                .name {
                    font-size: ${fontSize.fontSizeBase};
                    display: flex;
                    gap: .5rem;
                    align-items: center;
                    position: relative;
                    
                    &.pageSelected::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: .1rem;
                        background: ${style.textColor};
                        transform: scaleX(1);
                        transform-origin: left;
                        transition: transform .5s;
                    }

                    .homeButton {
                        padding: .5rem 0;
                        border: none;
                        background: none;
                        color: ${style.textColor};
                        font-size: ${fontSize.fontSizeBase};
                        cursor: pointer;
                        display: flex;
                        transform: scaleX(0);
                        width: 0;
                        height: 2rem;
                        display: flex;
                        align-items: center;
                        
                        &.homeSection {
                            transform: scaleX(1);
                            width: 2rem;
                        }

                        .icon {
                            transition: rotate .5s;
                            display: flex;

                            &.buttonSelected {
                                rotate: 180deg;
                            }
                        }
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
                        transition: height .5s, padding .5s;
                        overflow: hidden;
                        padding: 0 1rem;

                        &.showSections {
                            height: 15rem;
                            padding: .5rem 1rem;
                        }

                        li {
                            position: relative;

                            a {
                                cursor: pointer;
                                text-align: center;
                            }
                            
                            &::after {
                                content: '';
                                position: absolute;
                                bottom: 0;
                                left: 0;
                                width: 100%;
                                height: .1rem;
                                background: ${style.primaryColor};
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

                &::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: .1rem;
                    background: ${style.textColor};
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

            .logo {
                width: 20rem;
            }

            .logo.horizontal {
                display: none;
            }

            .logo.vertical {
                display: block;
            }

            .navigation {
                .list {
                    .listItem {
                        font-size: ${fontSize.fontSizeSmall};
                    }
                }
            }
        }
        
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
            opacity: .6;
            z-index: 2;
            transition: .3s;
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
                transition: width .5s, padding .5s;
                border-style: solid;
                border-width: 0 0 0 .1rem;
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
`