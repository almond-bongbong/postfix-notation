const { toPostfixNotation } = require('./index');

describe('Postfix notation test', () => {
  it('test1', () => {
    expect(toPostfixNotation('(A+B)*(C+D)'
      .split(''))
      .join('')
    ).toBe('AB+CD+*');

    expect(toPostfixNotation('A*B+C'
      .split(''))
      .join('')
    ).toBe('AB*C+');

    expect(toPostfixNotation('A+B*C'
      .split(''))
      .join('')
    ).toBe('ABC*+');

    expect(toPostfixNotation('A+B+C'
      .split(''))
      .join('')
    ).toBe('AB+C+');

    expect(toPostfixNotation('(A+B)*C'
      .split(''))
      .join('')
    ).toBe('AB+C*');

    expect(toPostfixNotation('A*(B+C)'
      .split(''))
      .join('')
    ).toBe('ABC+*');
  });
});