<div align="center">
<h1>React Screen Size Helper</h1>

<a href="https://www.emojione.com/emoji/1f410">
  <img
    height="80"
    width="80"
    alt="notebook"
    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/laptop_1f4bb.png"
  />
  <img
    height="80"
    width="80"
    alt="smartphone"
    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/mobile-phone_1f4f1.png"
  />
</a><br /><br />

<p>Simple React Hook utility for identifying and working with screen sizes.</p><br />
</div>

<hr />


## Installation

This module is distributed via [npm](https://www.npmjs.com/package/react-screen-size-helper) which is bundled with [node]() and
should be installed as one of your project's `dependencies`:

```
npm install react-screen-size-helper
```

or

for installation via [yarn](https://yarnpkg.com/)

```
yarn add react-screen-size-helper
```

## Examples

```jsx
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


## Issues

Looking to contribute? Look for the [Good First Issue](https://github.com/iamdevmarcos/React-Screen-Size-Helper/issues) label.

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

### 💡 Feature Requests

Please file an issue to suggest new features. Vote on feature requests by adding
a 👍. This helps maintainers prioritize what to work on.

## Contributors

Thanks goes to these people:
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://www.linkedin.com/in/iamdevmarcos/"><img src="https://avatars.githubusercontent.com/u/92524722?v=4" width="100px;" alt="Marcos Mendes"/><br /><sub><b>Marcos Mendes</b></sub></a><br /><a href="https://github.com/iamdevmarcos" title="Code">💻</a> <a href="https://www.linkedin.com/in/iamdevmarcos/" title="Linkedin">💼</a></td>
      <td align="center"><a href="https://www.linkedin.com/in/felipealves-/"><img src="https://avatars.githubusercontent.com/u/78622458?v=4" width="100px;" alt="Marcos Mendes"/><br /><sub><b>Felipe Alves</b></sub></a><br /><a href="https://github.com/felpsalvs" title="Code">💻</a> <a href="https://www.linkedin.com/in/felipealves-/" title="Linkedin">💼</a></td>
    </tr>
  </tbody>
  <tfoot>

  </tfoot>
</table>

Contributions of any kind welcome!

## LICENSE

[MIT](LICENSE)
