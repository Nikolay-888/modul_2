const expr= prompt("что вы хотите сделать: вычитание, сложение, умножение, деление?")

const firstNumber = window.prompt('Enter first number', 0);

const secondNumber = prompt('Enter second number', 0);

const sub = firstNumber - secondNumber;

const add = Number(firstNumber) + Number(secondNumber);

const mult = firstNumber * secondNumber;

const div = firstNumber / secondNumber;

switch (expr) {
  case "вычитание":
    alert(`Diff betwen  ${firstNumber} and ${secondNumber} is ${sub}`);
    break;
  case "сложение":
     console.log(`Diff betwen  ${firstNumber} and ${secondNumber} is ${add}`);
    break;
  case "умножение":
    console.log(`Diff betwen  ${firstNumber} and ${secondNumber} is ${mult}`);
    break;
  case "деление":
  console.log(`Diff betwen  ${firstNumber} and ${secondNumber} is ${div}`);
    break;
  default:
    console.log("Sorry, we are out of ");
}
