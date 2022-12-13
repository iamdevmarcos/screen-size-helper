import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useScreenSize } from '../src'

const App = () => {
  const { currentWidth, isMobile } = useScreenSize()

  return (
    <div>
      <h1>Current Width is: {currentWidth}</h1>
      {isMobile && (
        <p>Only Mobile</p>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
