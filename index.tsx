import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  // removed strickmode to fix doubled editor bug
  // see source for more details:
  // https://stackoverflow.com/questions/72464452/codemirror-editor-duplicating
  // <StrictMode>
  <App />
  // </StrictMode>
);
