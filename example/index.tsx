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
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
