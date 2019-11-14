# An Example Bit Powered Project

[Bit](https://bit.dev) is a tool for sharing code components across teams and projects.

It runs within an existing projects, so instead of sharing your hole project as you do with git you can just share useful aspects of it.

You can track changes to, tag and import components via NPM into other projects. Please read the [Quick Start guide](https://docs.bit.dev/docs/quick-start) for further information.  

## Details

This project provides an example of how a Bit powered project works. Components are tracked via the `.bitmap` file. 

There are two tracked Typescript components: 

- [Appender](https://bit.dev/robw-es/test-one/appender)
- [Counter](https://bit.dev/robw-es/test-one/counter)

They are stored locally in the `src/components` [directory](https://github.com/RobW-ES/bit-playground/tree/master/src/components) and this is where they can be edited.

You can see an example of the Counter component being pulled into another project [here](https://github.com/RobW-ES/bit-project).

## Setup and Usage

To get started clone this project and install Bit.

```
npm install bit-bin -g
```

Install the NPM dependencies.

```
npm install
```

Import the Bit components.

```
bit login

bit import
```

You can then make edits to the components locally and they will be tracked. 

You can check the state of things by running the following commands:

```
bit status

// and or

bit list
```

For more information please read the Bit [documentation](https://docs.bit.dev/).

### Run the Code

The code is Typescript so it can be run as follows once `npm install` has been run:

```
tsc && node src/app.js
```

The Mocha and Chai test suite can be run as follows:

```
npm run test
```

