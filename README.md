# React Screen Size Helper

React-size-hook is a React hook designed to calculate the screen size. It's helpful to identify what kind o device the page is being rendered and conditionally render something based on that info.

## Installation

React Screen Size Helper is available as an [npm package](https://www.npmjs.com/package/react-screen-size-helper)

```bash
# using npm
npm install react-size-screen-helper

# using yarn
yarn add react-size-screen-helper
```

## Usage

```ts
import React from 'react'
import { useScreenSize } from 'react-screen-size-helper'

const {
  currentWidth,
  isLargeDesktop,
  isDesktop,
  isTablet,
  isMobile
} = useScreenSize({})

<h1>Current Width is: {currentWidth}</h1>

{isLargeDesktop && <p>Only show on Large Desktop</p>}
{isDesktop && <p>Only show on Desktop</p>}
{isTablet && <p>Only show on Tablet</p>}
{isMobile && <p>Only show on Mobile</p>}
```
