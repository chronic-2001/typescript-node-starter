export default function fib(n: number, a: number, b: number): number {
  if (n === 0) {
    return a;
  }
  if (n === 1) {
    return b;
  }
  return fib(n - 1, b, a + b);
}
