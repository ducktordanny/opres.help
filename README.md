# Opres

> Aims to help learning and calculating problems of operation research like transportation and assignment problems.

## Available features

Currently, the transportation problem has implemented features like: first phase with North-West/Table-Minimum/Vogel-Korda methods. The second phase is under construction and will be available soon both on API and UI. Other operation research problems are on the way.

## Project setup

> The project is a Nx monorepo with two main apps frontend (Angular) and backend (NestJS) and some libs like: tables and several shared libs.

### Clone repo:

```shell
git clone git@github.com:ducktordanny/opres.help.git
```

### Install dependencies via yarn:

```shell
yarn
```

### Start the project (frontend and api):

```shell
yarn start
```

### If you only want to start one of the apps:

Though if you do so and only start the frontend then you can change the proxy in the `apps/frontend/proxy.conf.json` file.

```shell
yarn start:frontend
```

or

```shell
yarn start:backend
```

### Run unit tests:

All:

```shell
yarn test:all
```

Affected:

```shell
yarn test
```

## Github actions

Currently, there are two types of actions in the repo, one for running tests when we are pushing something into a pull request and one to deploy to production when drafting a new release on GitHub.

## Other

### Commit messages:

[https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-commit-message-format](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-commit-message-format)

### Changelog: [CHANGELOG.md](https://github.com/ducktordanny/opres.help/blob/master/CHANGELOG.md)

### Husky:

- pre-commit: `yarn format:staged`
- pre-push: `yarn lint`
