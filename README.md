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
npm login --scope=@github-username-or-org --registry=https://npm.pkg.github.com

> Username: GITHUB_USERNAME
> Password: GITHUB_PERSONAL_ACCESS_TOKEN
> Email: GITHUB_EMAIL_ADDRESS
```

Install lerna globally:
```bash
npm i -g lerna
```

Install dependencies mentioned in root `package.json` file:
```bash
npm install
```

Install dependencies for each of the `packages/` and create symlinks:
```bash
lerna bootstrap
```

## Creating packages

Create a package:
```bash
lerna create package_name_here

> name: @github-username-or-org/package-name
```

## Versioning packages

Lerna provides a mechanism for versioning packages without the need to manually update them ourselves. How the command works:

1. Identifies packages that have been updated since the previous tagged release.
2. Prompts for a new version.
3. Modifies package metadata to reflect new release, running appropriate lifecycle scripts in root and per-package.
4. Commits those changes and tags the commit.
5. Pushes to the git remote.

Version packages:
```bash
lerna version [major | minor | patch | premajor | preminor | prepatch | prerelease]
# uses the next semantic version(s) value and this skips `Select a new version for...` prompt
```

## Publishing packages

Lerna provides to methods of publishing packages to the Github package registry:
- `from-git`: Identifies packages tagged by lerna version and publishes them to npm.
- `from-package`: The list of packages to publish is determined by inspecting each `package.json` and determining if any package version is not present in the registry. Any versions not present in the registry will be published.

It is not possible to publish individual packages, however Lerna will only publish packages that have changed.

Publish packages:
```bash
lerna publish from-package
```

## Cleaning packages

Lerna provides a way of cleaning all packages removing all node_modules folders in a single command.

Clean packages:
```bash
lerna clean
```

## Running scripts

Lerna provides a way to run scripts defined in the `package.json` within each package via the `run` command.

**Hint:** Append the commands with `--scope @github-username-or-org/package-name` to run a script for a specific package.

### Build
```bash
lerna run build
```

### Run tests

Lerna provides a way of building packages:
```bash
lerna run test
```

## Resources

https://github.com/lerna/lerna/tree/main/commands/version#readme

https://github.com/lerna/lerna/tree/main/commands/publish#readme

https://docs.github.com/en/free-pro-team@latest/packages/publishing-and-managing-packages/about-github-packages#about-scopes-and-permissions-for-github-container-registry

https://docs.github.com/en/free-pro-team@latest/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages

https://itnext.io/how-to-deploy-only-changed-packages-in-a-lerna-monorepo-7e5fb234b32a

https://github.com/dwyl/aws-sdk-mock
