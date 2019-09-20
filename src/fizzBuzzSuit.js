import fizzBuzz from "./fizzBuzz";
function fizzBuzzSuit(nbValues) {
    let fizzBuzzSuit = [];
    for (let i = 0; i < nbValues; i++){
      fizzBuzzSuit[i] = fizzBuzz(i + 1);
  }
    return fizzBuzzSuit;
}

export default fizzBuzzSuit;