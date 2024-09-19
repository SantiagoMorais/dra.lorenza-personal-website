import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./homePage";
import { ContactPage } from "./contactPage";
import { BlogPage } from "./blogPage";
import { ArticlePage } from "./articlePage";
import { ContentNotFoundPage } from "./contentNotFoundPage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<ArticlePage />} />
        <Route path="/*" element={<ContentNotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
