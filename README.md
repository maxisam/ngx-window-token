[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![ngx-window-token](https://github.com/maxisam/ngx-window-token/actions/workflows/ngx-window-token.yml/badge.svg)](https://github.com/maxisam/ngx-window-token/actions/workflows/ngx-window-token.yml)
[![npm](https://img.shields.io/npm/dt/ngx-window-token.svg?style=flat-square)](https://www.npmjs.com/package/ngx-window-token)
[![GitHub release](https://img.shields.io/github/release/maxisam/ngx-window-token.svg?style=flat-square)](https://github.com/maxisam/ngx-window-token/releases)
[![npm](https://img.shields.io/npm/l/ngx-window-token.svg?style=flat-square)]()

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.

# ngx-window-token

It is the same way how angular handle document. With this module, you can use WINDOW token just like DOCUMENT token.

# Breaking Change after version 7.0.0

BREAKING CHANGE: Support Angular >= 15 only

# Breaking Change after version 6.0.0

BREAKING CHANGE: Support Angular >= 13 only

# Breaking Change after version 5.0.0

return undefine if window is undefine. Before, it doesn't even inject WindowToken.

# Breaking Change after version 1.0.2

removed now-unnecessary `NgxWindowTokenModule`, it will be inject into root module

# Breaking Change after version 1.0.0

change `WindowTokenModule` -> `NgxWindowTokenModule`

## Dependencies

- Angular >=6.0.0

## Install

You can get it on npm.

```
npm install ngx-window-token --save
```

## Build project

```
1. npm i

2. npm run build
```

## Usage

If you use SystemJS to load your files, you might have to update your config:

```js
System.config({
  map: {
    'ngx-window-token': 'node_modules/ngx-window-token'
  }
});
```

In your component

```
  constructor(@Inject(WINDOW) _window) { }
```

For webpack / Angular CLI, it works as any other libraries. Please check demo folder for more help.

## Example

[stackblitz.com](https://stackblitz.com/github/maxisam/ngx-window-token)

or clone this repo and run `ng serve`

## Contributing

1. Your commits conform to the conventions established [here](https://github.com/conventional-changelog/conventional-changelog-angular/blob/master/convention.md)
