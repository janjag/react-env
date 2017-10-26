import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Hello from './hello/hello';

render(
  <AppContainer>
    <Hello name="Jan"/>
  </AppContainer>,
  document.body
);
