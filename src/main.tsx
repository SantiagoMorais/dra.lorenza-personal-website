import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyles } from '@styles/globalStyles.tsx'
import { register } from 'swiper/element/bundle';

register()
import "swiper/swiper-bundle.css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
)
