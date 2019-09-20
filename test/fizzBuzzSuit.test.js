import fizzBuzzSuit from "../src/fizzBuzzSuit";

test('fizzBuzz number value test', () => {
    expect(fizzBuzzSuit(15).length).toBe(15);
});
test('fizzBuzz value ok  test', () => {
    const expectedValues = [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',11,'Fizz','Fizz',14,'FizzBuzz'];
    expect(fizzBuzzSuit(15)).toStrictEqual(expectedValues);
});