# [node-modules-linker](https://www.npmjs.com/package/node-modules-linker)

Simple cli tool to create a symbolic link in the current working directory that points to the nearest parent `node_modules` folder.

## Installation

Install globally:

```sh
$ npm i -g node-modules-linker
```

## Usage

Move to the desired directory and execute the `nml` command:

```sh
$ cd ./path/to/child
$ nml
```

## Result

```
[NML]: Linked C:/parent/path/to/child/node_modules to parent C:/parent/node_modules.
```
