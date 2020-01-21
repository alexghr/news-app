import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import App from '../app';
import template from './template';

export function render() {
  const stylesheet = new ServerStyleSheet();
  const body = renderToString(stylesheet.collectStyles(<App />));

  return template({
    app: 'app.js',
    body,
    style: stylesheet.getStyleTags()
  });
}