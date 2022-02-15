import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import AboutASOC from './pages/about_asoc/AboutAsoc';
import ContactPage from './pages/contact/contact';
import Home from './pages/home/home';
import Team from './pages/team/Team';

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<p>About</p>} />
        <Route path="about/team" element={<Team />} />
        <Route path="about/ASOC" element={<AboutASOC />} />
        <Route path="downloads" element={<p>Downloads</p>} />
        <Route path="careers" element={<p>careers</p>} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="sponsors" element={<p>sponsors</p>} />
        <Route path="join" element={<p>join</p>} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
