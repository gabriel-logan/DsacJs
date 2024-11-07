export default function factorial(n: number): number {
  if (n < 0) {
    throw new Error("Factorial of negative number is not defined");
  }

  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
