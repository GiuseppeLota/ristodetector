# Contributing Guide

Contributions are welcome and are greatly appreciated!. 
I'm available to discuss every changes and integrate any improvement.



## Setting up your environment

After forking this repo to your own github org, do the following steps to get started:

```bash
# clone your fork to your local machine
git clone https://github.com/GiuseppeLota/ristodetector.git

# step into local repo
cd ristodetector

# install dependencies
npm install 
```


### Running Tests

```bash
# run tests on whatever version of React is currently installed
npm test
```

```bash
# run tests on all supported versions of React
npm run test:all
```

```bash
# faster feedback for TDD
npm run test:watch
```

### Style & Linting

For linting this codebase is used [ESLint](http://eslint.org/).

It is recommended that you install an eslint plugin for your editor of choice when working on this
codebase, however you can always check to see if the source code is compliant by running:

```bash
npm run lint
```

### Pull Request Guidelines

A valid contribution should:

* not broke the existing tests
* accompain a component test for every new react component
* accompain a reducer and action
* pass the linting rule of the `.eslint.rc`

Please rebase and resolve all conflicts before submitting.

