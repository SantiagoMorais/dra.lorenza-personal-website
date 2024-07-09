import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./homePage"
import { ContactPage } from "./contactPage"
import { BlogPage } from "./blogPage"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/contato" element={<ContactPage />} />
                <Route path="/blog" element={<BlogPage />} />
            </Routes>
        </BrowserRouter>
    )
}