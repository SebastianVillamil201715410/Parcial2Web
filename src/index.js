import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./es";
import localeEnMessages from "./en";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import Spaces from "../src/Components/Spaces";
const userLang = navigator.language || navigator.userLanguage;
const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <IntlProvider locale={userLang} messages={userLang.includes("spaces")?localeEsMessages:localeEnMessages}>
      <Spaces />
  </IntlProvider>
);

serviceWorkerRegistration.register();