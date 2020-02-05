# Shell Welcome Quote :: API

## Quick start

1. `git clone git@github.com:Shell-Welcome-Quote/swq-api.git`
2. `cd swq-api`
3. `yarn install`

## How to

### How to use NodeJS version from the `.nvmrc`

1. Install NVM
2. Use `.nvmrc` file one of the next ways:

    * Execute `nvm use` in the project root directory
    * Install [NVM Loader](https://github.com/korniychuk/ankor-shell) and your .nvmrc will be loaded automatically when you open the terminal.
      ![NVM Loader demo](readme/readme.nvm-loader.png)
      
### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# debug mode
$ npm run start:debug

# production mode
$ npm run build:prod
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# watch mode
$ npm run test:watch

# specific tests
npm run test -- src/my.spec.ts
npm run test:watch -- src/my.spec.ts

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### Lint

```bash
# Just show problems
$ npm run lint

# Fix problems if it is possible
$ npm run lint:fix
```

### Technical features

* TypeScript [Path Aliases](/tsconfig.json#L29) configured
  * You can make imports like `import { ... } from '@app/...;`
  * You can add your own aliases
  * Aliases configuration in the one place [tsconfig.json](tsconfig.json#L29).
  * Jest & `module-alias` imports `paths` config using [ts-paths-fix](/src/ts-paths-fix-apply.ts)
* Yarn for packages installation and [`check-yarn`](/tools/check-yarn.js) utility to prevent packages installation via `npm`
* Additional Jest matchers from [`jest-extended`](https://github.com/jest-community/jest-extended) configured
* [ESLint](https://eslint.org) for linting JS & TS files ([TSLint is deprecated in 2019](https://github.com/palantir/tslint#tslint)).
* Very strict linting [config](/src/.eslintrc.js) ([airbnb](https://www.npmjs.com/package/eslint-config-airbnb-base) + [unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn) + [some other plugins](/src/.eslintrc.js#L11))
* [`.nvmrc`](https://github.com/nvm-sh/nvm#nvmrc)
* Git hooks via [husky](https://www.npmjs.com/package/husky)
* [Utility](/tools/merge-with-repository-template.sh) to automatically pull updates from this template repository (`npm run tpl-repo:merge`)

**Other features:**

* Wallaby JS works out of the box without any additional config  
  Notice: How to run in "Without Configuration" mode ([Official Wallaby JS Guide](https://wallabyjs.com/docs/intro/config.html#automatic-configuration))

## Author

| [<img src="https://www.korniychuk.pro/avatar.jpg" width="100px;"/><br /><sub>Anton Korniychuk</sub>](https://korniychuk.pro) |
| :---: |
