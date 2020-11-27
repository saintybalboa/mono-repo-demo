# Mono-Repo demo

A basic project to show how monorepo works using lerna and npm

**

Crea

Run below commands to make this code working
Install lerna globally
npm i -g lerna

Install dependencies of this project. Note it will only install dependencies mentioned in root package.json file
npm install

Install dependencies for packages and create symlinks. Read more here
lerna bootstrap


## Publishing packages

Follow the [instructions](https://docs.github.com/en/free-pro-team@latest/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages) for configuring NPM for use with Github packages.

Configure Lerna to use the Github package registry.
```json
{
  ...
  "command": {
    "publish": {
      "registry": "https://npm.pkg.github.com"
    }
  }
}
```

```bash
lerna publish from-git
```
