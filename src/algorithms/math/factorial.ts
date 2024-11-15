export default function factorial(n: number): number {
  if (n < 0) {
    throw new Error("Factorial of negative number is not defined");
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  if (!Number.isInteger(n)) {
    return factorialOfFloat(n);
  }

  return factorialOfInteger(n);
}

function factorialOfInteger(n: number): number {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

function factorialOfFloat(n: number): number {
  return gamma(n + 1);
}

function gamma(n: number): number {
  const g = 7;

  n -= 1;

  const a = [
    0.99999999999980993, 676.5203681218851, -1259.1392167224028,
    771.32342877765313, -176.61502916214059, 12.507343278686905,
    -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7,
  ];

  let x = a[0];

  for (let i = 1; i < g + 2; i++) {
    x += a[i] / (n + i);
  }

  const t = n + g + 0.5;

  return Math.sqrt(2 * Math.PI) * Math.pow(t, n + 0.5) * Math.exp(-t) * x;
}
