function fizzBuzz(num) {
    let returnValue = "";
    if (num % 3 == 0 || hasNum(num,3)){
        returnValue += "Fizz";
    }
    if (num % 5 == 0 || hasNum(num,5)){
        returnValue += "Buzz";
    }

    return returnValue ? returnValue : num;
}
export default fizzBuzz;

function hasNum(initalNumber,num){

    return initalNumber.toString().includes(num)

}
