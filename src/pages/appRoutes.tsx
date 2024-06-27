import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./homePage"
import { ContactPage } from "./contactPage"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </BrowserRouter>
    )
}