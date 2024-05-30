export function fizzBuzz(number: number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else return number;
}

export function fizzBuzzfrom1to100() {
  let array: any[] = [];
  for (let number = 1; number < 101; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
      array.push("FizzBuzz");
    } else if (number % 3 === 0) {
      array.push("Fizz");
    } else if (number % 5 === 0) {
      array.push("Buzz");
    } else array.push(number);
  }
  return array;
}
console.log(fizzBuzzfrom1to100());
