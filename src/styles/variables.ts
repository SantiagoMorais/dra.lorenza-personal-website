import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons"

export const doctoraliaReviewsLink: string = "https://www.doctoralia.com.br/lorenza-arruda/nutrologo/belo-horizonte#profile-reviews";
export const phoneNumber: number = 31990757035;
export const phoneNumberInString: string = "(31) 9 9075-7035";
export const emailLink: string = "mailto:lorenzanutrologia@gmail.com";
export const address: string = "R. Paracatu, 1154 - sala 406 - Santo Agostinho, Belo Horizonte - MG";
export const instagramLink: string = "https://www.instagram.com/dralorenzaarruda/"
export const scheduleAnAppointmentLink: string = "https://www.doctoralia.com.br/lorenza-arruda/nutrologo/belo-horizonte"

interface IListItems {
    text: string,
    icon: IconDefinition,
    href: string
}

function formatMessageForWeb(message: string): string {
    return encodeURIComponent(message)
}

const defaultWhatsappMessage: string = "Olá, dra.Lorenza, eu encontrei o seu contato pelo seu site. Eu gostaria de agendar uma consulta.";
export const whatsAppLink: string = `https://api.whatsApp.com/send?phone=${phoneNumber}&text=${formatMessageForWeb(defaultWhatsappMessage)}`;
export const googleMapsLink: string = `https://www.google.com/maps/search/?api=1&query=${formatMessageForWeb(address)}`

export const navBarButtons: IListItems[] = [
    { text: "agendar consulta", icon: faCalendarDays, href: scheduleAnAppointmentLink },
    { text: "WhatsApp", icon: faWhatsapp, href: whatsAppLink }
];