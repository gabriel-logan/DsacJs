# DsacJs - Data Structures - Algorithm - Toolkit Collection

## Introduction

A high-performance JavaScript and TypeScript library offering a comprehensive set of efficient data structures. Simplify your algorithm implementation and data manipulation with optimized, easy-to-use tools.

[![npm](https://img.shields.io/npm/v/dsacjs)](https://www.npmjs.com/package/dsacjs)

## Features

- **High Performance**: Utilizes the latest JavaScript and TypeScript features to provide optimized data structures.

- **Comprehensive Toolkit**: Offers a wide range of data structures and algorithms to simplify your development process.

- **Easy to Use**: Provides a simple, intuitive API that makes it easy to work with complex data structures.

- **TypeScript Support**: Fully supports TypeScript, providing type safety and improved code quality.

- **Modular Design**: Each data structure is implemented as a separate module, allowing you to import only what you need.

## Installation

To install DsacJs

```bash
npm install dsacjs
```
```bash
yarn add dsacjs
```
```bash
pnpm add dsacjs
```
```bash
bun add dsacjs
```

## Usage

Here's an example of how you can use DsacJs to create a simple stack data structure:

```typescript
import { Stack } from 'dsacjs';

const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // 3
```

## Documentation

For more information on how to use DsacJs, check out the [documentation](https://gabriel-logan.github.io/DsacJs/guide/introduction.html).

## Contributing

If you'd like to contribute to DsacJs, please read our [contributing guidelines](https://github.com/gabriel-logan/DsacJs/blob/main/CONTRIBUTING.md)

## License

DsacJs is [MIT licensed](https://github.com/gabriel-logan/DsacJs/blob/main/LICENSE)
