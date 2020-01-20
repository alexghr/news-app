import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../app';
import template from './template';

export function render() {
  const body = renderToString(<App />);

  return template({
    app: 'app.js',
    body
  });
}