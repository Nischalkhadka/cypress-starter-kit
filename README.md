# Introduction
## End-to-End (e2e) tests
In React, unit tests and functional tests are the most popular testing options as its easier to test components in isolation and as a functional units. Performing e2e tests, we can make assrtions about how the application renders and the way it responds during user's interacts with it.

## Why Cypress
Cypress is a JavaScript end-to-end testing framework that makes it easy to setup, write, run and debug tests in the browser. It comes with its own dashboard that gives control over the status of our tests, and, because Cypress works in the actual browser, you can use the browser’s dev tools side-by-side.

You can time-travel with snapshots, automatically reload test changes and await assertions, and easily debug your code. With built-in parallelization and load balancing, Debugging tests in CI becomes much that easier too. However, you can’t use Cypress to drive two browsers at the same time, which might hurt. While not as popular as Puppeteer, Cypress can be useful for end-to-end testing your React applications. This library was even built to make it easier.

https://www.cypress.io/

## Things to keep in mind
1) Javascript only
2) Chrome only
3) Testing only
4) Mocha only as a Test runner
5) Fast as test code runs in the browser just like the application code.

# Installation
## Prerequisites
Install NodeJS and NPM

## Go to the folder where you want to install the cypress
1. Create a package.json file
Run:
npm inti -y
2. Run:
npm install cypress
## Run Cypress to verify it is successfully installed
npx cypress open
## **Add screenshot**
## Folder Srucutre
- Fixtures
- Integration
- Plugins
- Support

# Writing the First test
## Lets look at the application under test
## Creating a test file
## Making the test fail
## Stop running the test after each file change

# Accessing Elements and interacting with them
## Finding the element
## Wait
Waits for the element to find in the page
## Docs

# Validations
## should
## Making the validation faile

# Grouping Tests with Mocha
## describe
## using hooks (beforeEach, before,afterEach,after)
## running only one test

# Cypress CLI
## npm cypress run

# Page Objects in Cypress
# Visual Validations
