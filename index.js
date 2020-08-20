const OperatorOrder = {
  '*': 3,
  '/': 3,
  '+': 2,
  '-': 2,
  '(': 1,
}

const toPostfixNotation = (prefixNotationArray) => {
  const operatorStack = [];
  const result = [];

  for (let i = 0; i < prefixNotationArray.length; i += 1) {
    const value = prefixNotationArray[i];

    if (value === ')') {
      while (true) {
        if (operatorStack[operatorStack.length - 1] === '(') {
          operatorStack.pop();
          break;
        } else {
          result.push(operatorStack.pop());
        }
      }

      continue;
    }

    if (!OperatorOrder[value]) {
      result.push(value);
    } else {
      if (operatorStack.length > 0 && value !== '(') {
        if (OperatorOrder[value] > OperatorOrder[operatorStack[operatorStack.length - 1]]) {
          operatorStack.push(value);
        } else {
          result.push(operatorStack.pop());
          operatorStack.push(value);
        }
      } else {
        operatorStack.push(value);
      }
    }
  }

  while (operatorStack.length > 0) {
    result.push(operatorStack.pop());
  }

  return result;
}

exports.toPostfixNotation = toPostfixNotation;
