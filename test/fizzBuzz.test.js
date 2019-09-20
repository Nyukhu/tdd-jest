import fizzBuzz from '../src/fizzBuzz';

test('fizzBuzz fizz test', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
});
test('fizzBuzz Buzz test', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
});
test('fizzBuzz FizzBuzz test', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
});
test('fizzBuzz FizzBuzz test', () => {
    expect(fizzBuzz(2)).toBe(2);
});
test('fizzBuzz has3 test', () => {
    expect(fizzBuzz(37)).toBe('Fizz');
});
test('fizzBuzz has5 test', () => {
    expect(fizzBuzz(52)).toBe('Buzz');
});