export default function factorial(n: number): number {
  if (n < 0) {
    throw new Error("Factorial of negative number is not defined");
  }

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}
