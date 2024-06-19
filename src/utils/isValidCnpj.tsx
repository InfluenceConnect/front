function isValidCnpj(cnpjStr: string): boolean {
  // Remover caracteres não numéricos
  cnpjStr = cnpjStr.replace(/\D/g, '');

  // Verificar se o tamanho está correto
  if (cnpjStr.length !== 14) return false;

  // Verificar se todos os dígitos são iguais
  if (/^(\d)\1{13}$/.test(cnpjStr)) return false;

  // Calcular primeiro dígito verificador
  let sum = 0;
  let weight = 5;
  for (let i = 0; i < 12; i++) {
    sum += parseInt(cnpjStr.charAt(i)) * weight;
    weight = weight === 2 ? 9 : weight - 1;
  }
  const firstDigit = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  // Calcular segundo dígito verificador
  sum = 0;
  weight = 6;
  for (let i = 0; i < 13; i++) {
    sum += parseInt(cnpjStr.charAt(i)) * weight;
    weight = weight === 2 ? 9 : weight - 1;
  }
  const secondDigit = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  // Verificar dígitos verificadores
  if (
    parseInt(cnpjStr.charAt(12)) !== firstDigit ||
    parseInt(cnpjStr.charAt(13)) !== secondDigit
  ) {
    return false;
  }

  return true;
}

export default isValidCnpj;
