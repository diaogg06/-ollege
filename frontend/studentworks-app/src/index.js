import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.jsx';
import Works from './components/works/works.jsx';
import Footer from "./components/footer/footer.jsx"
import BtnPages from './components/pages/pages.jsx';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Works />
    <BtnPages />
    <Footer />
  </React.StrictMode>
)

