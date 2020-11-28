# Mono-Repo demo

A mono-repo that stores multiple shared libraries in the form of npm packages in a single repository. Packages are managed and deployed to the Github package registry using Lerna.

## Initial setup

Create a Github Personal Access Token with the following permissions:
- `read:packages`
- `write:packages`
- `delete:packages`

Follow these [instructions](https://docs.github.com/en/free-pro-team@latest/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages) to configure NPM for use with Github packages.

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

Login to NPM:
```bash
npm login --scope=@GITHUB_USERNAME_OR_ORGANISATION --registry=https://npm.pkg.github.com

> Username: GITHUB_USERNAME
> Password: GITHUB_PERSONAL_ACCESS_TOKEN
> Email: GITHUB_EMAIL_ADDRESS
```

Run below commands to make this code working
Install lerna globally
npm i -g lerna

Install dependencies of this project. Note it will only install dependencies mentioned in root package.json file
npm install

Install dependencies for packages and create symlinks. Read more here
lerna bootstrap


## Creating packages

```bash
lerna create package_name_here
```

## Publishing packages

Publishing packages to the Github package registry requires:

```bash
lerna publish from-git
```

## Deleting packages

## Resources

https://github.com/lerna/lerna/tree/main/commands/publish#readme

https://docs.github.com/en/free-pro-team@latest/packages/publishing-and-managing-packages/about-github-packages#about-scopes-and-permissions-for-github-container-registry

https://docs.github.com/en/free-pro-team@latest/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages

https://itnext.io/how-to-deploy-only-changed-packages-in-a-lerna-monorepo-7e5fb234b32a
