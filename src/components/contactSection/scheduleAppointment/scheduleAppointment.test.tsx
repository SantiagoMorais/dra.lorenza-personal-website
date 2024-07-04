import { render, screen } from "@testing-library/react"
import { ScheduleAppointment } from "."
import scheduleImage from "@assets/imgs/contactImages/scheduleAppointment.jpg"

describe("<ScheduleAppointment />", () => {
    it("should render the component correctly", () => {
        render(<ScheduleAppointment />);
        const title = screen.getByText(/Pronto para transformar sua vida?/i);
        expect(title).toBeInTheDocument();
    });

    it("should render the image correctly", () => {
        render(<ScheduleAppointment />);
        const image = screen.getByRole("img");
        expect(image).toHaveAttribute("src", scheduleImage);
    });

    it("should render the button to schedule the appointment", () => {
        render(<ScheduleAppointment />);
        const button = screen.getByText(/agendar consulta/i);
        expect(button).toBeInTheDocument();
    })
})