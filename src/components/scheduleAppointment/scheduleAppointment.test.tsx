import { render, screen } from "@testing-library/react"
import { ScheduleAppointment } from "."
import scheduleImage from "@assets/imgs/scheduleAppointment.jpg"

describe("<ScheduleAppointment />", () => {
    it("should render the component correctly", () => {
        render(<ScheduleAppointment />);
        const title = screen.getByText(/agende agora sua consulta/i);
        expect(title).toBeInTheDocument();
    });

    it("should render the image correctly", () => {
        render(<ScheduleAppointment />);
        const image = screen.getByRole("img");
        expect(image).toHaveAttribute("src", scheduleImage);
    });

    it("should render the button to schedule the appointment", () => {
        render(<ScheduleAppointment />);
        const button = screen.getByText(/agende a sua consulta/i);
        expect(button).toBeInTheDocument();
    })
})