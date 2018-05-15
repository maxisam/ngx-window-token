[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![travis build](https://img.shields.io/travis/maxisam/ngx-window-token.svg?style=flat-square)](https://travis-ci.org/maxisam/ngx-window-token)
[![npm](https://img.shields.io/npm/dt/ngx-window-token.svg?style=flat-square)](https://www.npmjs.com/package/ngx-window-token)
[![GitHub release](https://img.shields.io/github/release/maxisam/ngx-window-token.svg?style=flat-square)](https://github.com/maxisam/ngx-window-token/releases)
[![npm](https://img.shields.io/npm/l/ngx-window-token.svg?style=flat-square)]()

# LibraryHost

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

# ngx-window-token

It is the same way how angular handle document. With this module, you can use WINDOW token just like DOCUMENT token.

# Breaking Change version < 1.0.0

change `WindowTokenModule` -> `NgxWindowTokenModule`

## Dependencies

* Angular >=6.0.0

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

In your module

```
 imports: [ BrowserModule, NgxWindowTokenModule ]
```

In your component

```
  constructor(@Inject(WINDOW) _window) { }
```

For webpack / Angular CLI, it works as any other libraries. Please check demo folder for more help.

## Example

[plunker](https://plnkr.co/edit/uy2UfN0sD5I2qoNotGu7?p=preview)

or clone this repo and run `ng serve`

## Contributing

1.  Your commits conform to the conventions established [here](https://github.com/conventional-changelog/conventional-changelog-angular/blob/master/convention.md)
