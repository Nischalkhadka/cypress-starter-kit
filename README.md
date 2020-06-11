# Introduction
## End-to-End (e2e) tests
In React, unit tests and functional tests are the most popular testing options as its easier to test components in isolation and as a functional units. Performing e2e tests, we can make assrtions about how the application renders and the way it responds during user's interacts with it.

## Cypress

https://www.cypress.io/

Cypress is a JavaScript end-to-end testing framework that makes it easy to setup, write, run and debug tests in the browser. It comes with its own dashboard that gives control over the status of our tests, and, because Cypress works in the actual browser, you can use the browser’s dev tools side-by-side.

## Selenium v/s Cypress
| Selenium               | Cypress              |
| :----------------------| :------------------: |
| Supports Cross broswer | Only Chrome          |
| Cross language         | Only Javascript      |
| Cross test-runner      | Only Mocha           |
| Asynchronous           | Synchronous          |
| Slower                 | Fast                 |
| Mediocre docs          | Better documentation |

## Things to keep in mind
1) Frontend Testing Tool
2) Used by developers or QA engineers
3) Used to test the web application using Javascript framework
4) Mocha only as a Test runner
5) Fast as test code runs in the browser just like the application code.
6) Enables to write Unit, Integration and End-to-end tests

# Installation
## System Requirements
Cypress is a desktop application that supports these operating systems:
- macOS 10.9 and above (64-bit only)
- Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8 (64-bit only)
- Windows 7 and above

## Install using npm
It supports Node.js 8 and above

Step 1

```cd /your/project/path```

Step 2

```npm install cypress --save-dev```

You will see the following upon successful installation:

![Installation Complete](https://github.com/Nischalkhadka/cypress-starter-kit/blob/master/screenshots/Installation.png)

## Running Cypress

```./node_modules/.bin/cypress open```

You will be greeted with the following 'Getting Started' screen

![Getting Started](https://github.com/Nischalkhadka/cypress-starter-kit/blob/master/screenshots/Open_Cypress.png)

## Adding a Test file

Step 1: Setting up a base URL in your configuration file (cypress.json by default)

Step 2: Add a test file inside the ```integration``` folder

Create a ```sample_test.js``` file inside ```tests``` folder

## Writing tests

A test should generally cover three phases:
1. Set up the application state.
2. Take an action.
3. Make an assertion about the result application state.

Lets look into the test we have written. It covers the following steps:

1. Go to Google Search
2. Search for Leapfrog technology

![Test File](https://github.com/Nischalkhadka/cypress-starter-kit/blob/master/screenshots/sample_test.png)


## References
- API
- Best Practices
- Tradeoffs
