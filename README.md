# chrome-app

Sample application for evaluating the use of Electron and React for desktop application development.

## Environment

The project was developed with:

* [Visual Studio Code](https://code.visualstudio.com/) v1.6.1
* [Node](https://nodejs.org/en/) v6.4.0
* [NPM](https://www.npmjs.com/) v3.10.3

### Dependencies

The backbone of the application is made up of:

* [Electron](http://electron.atom.io/), for distribution as a desktop application 
* [React](https://facebook.github.io/react/), for layout
* [Webpack](https://webpack.github.io/), for source and asset bundling
* [Babel](https://babeljs.io/), for ES2015 support
* [Typings](https://github.com/typings/typings), for VSCode's intellisense

## Installation

1. Clone or fork repository
2. Navigate to project root
3. Run `npm install` 

## Execution

The application can be executed in different ways, depending on the environment: development, or production. _Note that these are not actually used as environment variables._

### Development

Development scripts are prefixed with `dev`. The build (bundling) result is located in the `dev` directory, and uses the `webpack.config.dev.js` configuration.

Available scripts:

* `dev:build`, creates a development build of the application
* `dev:watch`, keeps watch of source file changes and rebuilds
* `dev:start`, starts development build of Electron application

### Production scripts

Production scripts are prefixed with `app`. The build (bundling) result is located in the `app` directory, and uses the `webpack.config.app.js` configuration. The packaging result is located in the `build` directory.

Available scripts:

* `app:build`, creates a production build of the application
* `app:start`, starts production build of Electron application
* `app:package`, repackages project as Electron application (overwrites previous package)
* `app:distribute`, rebuilds and repackages project as Electron application (overwrites previous package)

## Future

Proposed project improvements include:

* Setting up a testing framework
* Writing a script file for distribution to multiple platforms 
* Creating a base Webpack configuration
* Setting up a linter
* Generating API documentation from comments
* Hook up VSCode's debugger to the Electron process for more robust debugging
