import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

//import all spanish texts
import header_es from './translations/es/header.json';
import presentation_es from './translations/es/presentation.json';
import aboutMe_es from './translations/es/aboutMe.json';
import project_es from './translations/es/project.json';

//import all english texts
import header_en from './translations/en/header.json';
import presentation_en from './translations/en/presentation.json';
import aboutMe_en from './translations/en/aboutMe.json';
import project_en from './translations/en/project.json';

i18next.init({
  interpolation: { escapeValue: false},
  lng: "en",
  resources: {
    es: {
      header: header_es,
      presentation: presentation_es,
      aboutMe: aboutMe_es,
      project: project_es
    },
    en: {
      header: header_en,
      presentation: presentation_en,
      aboutMe: aboutMe_en,
      project: project_en
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
