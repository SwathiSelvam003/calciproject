const input = process.argv.slice(2).join(" ");

if (!input) {
  console.log("Please provide a question. For example: 'What is 5 plus 7?'");
  process.exit(1);
}

// Define the function to calculate the result
function calculate(question) {
  // Extract the numbers and operator
  const match = question.match(/What is (\d+)\s(plus|minus|multiplied by|divided by)\s(\d+)\?/);
  if (!match) {
    return "Invalid question format. Please use 'What is [number] [operator] [number]?'";
  }

  const [, num1, operator, num2] = match;
  const a = parseFloat(num1);
  const b = parseFloat(num2);

  let result;

  // Perform the operation based on the operator
  switch (operator) {
    case "plus":
      result = a + b;
      break;
    case "minus":
      result = a - b;
      break;
    case "multiplied by":
      result = a * b;
      break;
    case "divided by":
      if (b === 0) {
        return "Division by zero is not allowed.";
      }
      result = a / b;
      break;
    default:
      return "Unknown operator. Supported operators are: plus, minus, multiplied by, divided by.";
  }

  return `${a} ${operator} ${b} is ${result}`; // Corrected this line
}

// Calculate and print the result
console.log(calculate(input));
