interface IStyle {
    primaryColor: string,
    secondaryColor: string,
    tertiaryColor: string,
    textColor: string,
    secondaryTextColor: string
}

interface IFontStyle {
    fontWeight: number,
    fontStyle: string
}

interface ITipography {
    light: IFontStyle,
    lightItalic: IFontStyle,
    medium: IFontStyle,
    mediumItalic: IFontStyle,
    bold: IFontStyle,
    boldItalic: IFontStyle,
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
    light: {fontWeight: 300, fontStyle: "normal"},
    lightItalic: {fontWeight: 300, fontStyle: "italic"},
    medium: {fontWeight: 500, fontStyle: "normal"},
    mediumItalic: {fontWeight: 500, fontStyle: "italic"},
    bold: {fontWeight: 700, fontStyle: "normal"},
    boldItalic: {fontWeight: 700, fontStyle: "italic"},
}

export const fontSize: IFontSize = {
    fontSizeSmall: "1.2rem",
    fontSizeBase: "1.6rem",
    fontSizeMedium: "2.4rem",
    fontSizeLarge: "3rem",
    fontSizeExtraLarge: "4.5rem"
}