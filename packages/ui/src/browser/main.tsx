import React from 'react';
import { hydrate } from 'react-dom';

import App from '../app';

function main() {
  hydrate(<App />, document.getElementById('root'));
}

main();
