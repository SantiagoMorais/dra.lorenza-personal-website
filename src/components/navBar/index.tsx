import { Button } from "@components/button"
import { fontSize, style } from "@styles/style"
import styled from "styled-components"
import verticalLogo from "@assets/imgs/verticalLogo.jpg"
import horizontalLogo from "@assets/imgs/horizontalLogo.jpg"
import { Link } from "react-router-dom"
import { navBarButtons, } from "@styles/variables"
import { NavBar } from "./navBar"

export const Header = () => {
    return (
        <Container data-testid="header" id="home">
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
            <NavBar />
        </Container>
    )
}

const Container = styled.section`
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
    }
`