import React from 'react';
import styled from 'styled-components';

const Element = styled.div`
  background-color: red;
`;

const App: React.FC = () => {
  return <Element>this is the app root</Element>
}

export default App;