# Getting Started

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
import { Stack } from "dsacjs";

const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // 3
```
