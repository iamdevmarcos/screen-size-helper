import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useScreenSize } from '../src'

const App = () => {
  const { currentWidth, isTablet, isMobile } = useScreenSize({})

  return (
    <div>
      <h1>Current Width is: {currentWidth}</h1>

      {isTablet && <p>Only show on Tablet</p>}
      {isMobile && <p>Only show on Mobile</p>}
      {!isMobile && <p>Only show on Desktop</p>}
      {!isTablet && <p>Only show on Desktop</p>}
      {!isMobile && !isTablet && <p>Only show on Desktop</p>}
      {isMobile || isTablet ? (
        <p>Only show on Mobile or Tablet</p>
      ) : (
        <p>Only show on Desktop</p>
      )}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
