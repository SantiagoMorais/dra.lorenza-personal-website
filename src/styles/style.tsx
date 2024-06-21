interface IStyle {
    primaryColor: string,
    secondaryColor: string,
    tertiaryColor: string,
    textColor: string,
    secondaryTextColor: string
}

interface ITipography {
    lightWeight: number,
    mediumWeight: number,
    boldWeight: number
}

interface IFontSize {
    fontSizeSmall: string,
    fontSizeBase: string,
    fontSizeMedium: string,
    fontSizeLarge: string,
    fontSizeExtraLarge: string,
}

export const style: IStyle = {
    primaryColor: "#73243C",
    secondaryColor: "#EDDDD6",
    tertiaryColor: "#B68C8A",
    textColor: "#ffffff",
    secondaryTextColor: "#000000"
}

export const fontStyle: ITipography = {
    lightWeight: 300,
    mediumWeight: 500,
    boldWeight: 700
}

export const fontSize: IFontSize = {
    fontSizeSmall: "1.2rem",
    fontSizeBase: "1.6rem",
    fontSizeMedium: "2.2rem",
    fontSizeLarge: "2.8rem",
    fontSizeExtraLarge: "3.5rem"
}

export const faqBreakPoints = () => `
        @media (max-width: 1024px) {
            .faqs {
                .faq {
                    .answer {
                        &.selected {
                            height: 12rem;
                        }
                    }
                }
            }
        }

        @media (max-width: 768px) {
            .faqs {
                .faq {
                    .answer {
                        &.selected {
                            height: 20rem;
                        }
                    }
                }
            }
        }

        @media (max-width: 480px) {
            .faqs {
                .faq {
                    .answer {
                        &.selected {
                            height: 32rem;
                        }
                    }
                }
            }
        }

        @media (max-width: 320px) {
            .faqs {
                .faq {
                    .answer {
                        &.selected {
                            height: 42rem;
                            max-height: min-content;
                        }
                    }
                }
            }
        }

        @media (max-width: 280px) {
            .faqs {
                .faq {
                    .answer {
                        &.selected {
                            height: 48rem;
                            max-height: min-content;
                        }
                    }
                }
            }
        }
    )
`