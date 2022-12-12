import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useScreenSize } from '../src'

const App = () => {
  const { currentWidth } = useScreenSize()

  return (
    <div>
      <h1>Current Width is: {currentWidth}</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
