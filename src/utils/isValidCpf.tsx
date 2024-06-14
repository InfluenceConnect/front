function isValidCpf(cpfStr: String): Boolean {
  if (cpfStr.length != 11) return false;

  let countIdenticalDigits = 1;
  let startWith = cpfStr.charAt(0);
  for (let i = 1; i < 11; ++i) {
    if (cpfStr[i] == startWith) ++countIdenticalDigits;
  }
  if (countIdenticalDigits == 11) return false;

  const arrCpfCharacter = cpfStr.split("");
  const arrNumber = arrCpfCharacter.map((char) => Number(char));

  let sum = 0;
  for (let i = 0; i < 9; ++i) {
    sum += (10 - i) * arrNumber[i];
  }
  const firstVerifyDigitor = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  sum = 0;
  for (let i = 0; i < 10; ++i) {
    sum += (11 - i) * arrNumber[i];
  }
  const secondVerifyDigitor = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  if (
    secondVerifyDigitor != arrNumber[10] ||
    firstVerifyDigitor != arrNumber[9]
  )
    return false;

  return true;
}

export default isValidCpf