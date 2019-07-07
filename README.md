# Zenrez Typescript Template

Use this project as a base for typescript services

## Pre-reqs
To build and run this app locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/)


## Development mode:
* Set your shell's environment variable `NPM_TOKEN` to your npm token. Do this
  in `~/.bash_profile` so it is set every time
* Install dependencies: `npm install`
* Set your shell's environment variables (get from Heroku config: `heroku config --app <service name>`)
* Start server in watch mode `npm run watch`
* Visit [localhost:3001](http://localhost:3001/). This app has hotloading enabled.

## Testing
* `npm run test` runs server-side tests.

## Linting
* `npm run lint` runs server-side linter.
  Configure lint rules in [tslint.json](tslint.json).

## Tools
* [npm](https://nodejs.org/) for package management
* [typescript](http://www.typescriptlang.org/) for development
