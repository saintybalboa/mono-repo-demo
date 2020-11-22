# Mono-Repo demo

A basic project to show how monorepo works using lerna and npm

Run below commands to make this code working
Install lerna globally
npm i -g lerna

Install dependencies of this project. Note it will only install dependencies mentioned in root package.json file
npm install

Install dependencies for packages and create symlinks. Read more here
lerna bootstrap
