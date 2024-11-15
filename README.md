# IN DEVELOPMENT

# DsacJs

## Data Structures - Algorithm - Toolkit Collection

A high-performance JavaScript and TypeScript library offering a comprehensive set of efficient data structures. Simplify your algorithm implementation and data manipulation with optimized, easy-to-use tools.

[![npm](https://img.shields.io/npm/v/dsacjs)](https://www.npmjs.com/package/dsacjs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dm/dsacjs.svg?style=flat-square)](https://npm-stat.com/charts.html?package=dsacjs)

## Documentation

- [Website Documentation](https://gabriel-logan.github.io/DsacJs/)
- [NPM Package](https://www.npmjs.com/package/dsacjs)

## CDN

```html
<script type="module">
  import { LinkedList } from "https://cdn.jsdelivr.net/npm/dsacjs@0.0.1/+esm";

  const linkedList = new LinkedList();

  linkedList.add(1);
  linkedList.add(2);
  linkedList.add(3);

  console.log(linkedList.toArray());
</script>
```

## Installation

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

```javascript
import { LinkedList } from "dsacjs";

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);

console.log(list.toArray()); // [1, 2, 3]
```

## Features

- **Data Structures**: A comprehensive set of data structures including linked lists, stacks, queues, trees, graphs, and more.

- **Algorithms**: A collection of algorithms for sorting, searching, and other common tasks.

- **Toolkit**: A set of utility functions for working with data structures and algorithms.

## Why DsacJs?

- **Performance**: High-performance implementations with optimized algorithms and data structures.

- **Ease of Use**: Simplify your algorithm implementation and data manipulation with easy-to-use tools.

- **Comprehensive**: A comprehensive set of data structures, algorithms, and utility functions for all your needs.

## Contributing

Contributions are welcome! For feature requests and bug reports, please submit an issue. For code contributions, please follow the [contribution guidelines](CONTRIBUTING.md).

## License

DsacJs is [MIT licensed](LICENSE).

## Contributing

Thank you for considering contributing to DsacJs! We welcome all contributions, including bug reports, feature requests, and code contributions.

## Code of Conduct

This project and everyone participating in it is governed by the [DsacJs Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Authors

- [Gabriel Logan](https://github.com/gabriel-logan/)
