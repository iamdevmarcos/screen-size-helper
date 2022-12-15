import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useScreenSize } from '../src'

const App = () => {
  const { currentWidth, isLargeDesktop, isDesktop, isTablet, isMobile } = useScreenSize({})

  return (
    <div>
      <h1>Current Width is: {currentWidth}</h1>

      {isLargeDesktop && <p>Only show on Large Desktop</p>}
      {isDesktop && <p>Only show on Desktop</p>}
      {isTablet && <p>Only show on Tablet</p>}
      {isMobile && <p>Only show on Mobile</p>}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
