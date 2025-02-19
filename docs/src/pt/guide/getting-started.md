# Primeiros Passos

## Instalação

Para instalar o DsacJs:

::: code-group

```bash [npm]
npm install dsacjs
```

```bash [yarn]
yarn add dsacjs
```

```bash [pnpm]
pnpm add dsacjs
```

```bash [bun]
bun add dsacjs
```

:::

## Uso

Aqui está um exemplo de como você pode usar o DsacJs para criar uma estrutura de dados de pilha (stack) simples:

```typescript
import { Stack } from "dsacjs";

const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // 3
```
