export const isValidCPF = (cpf: string) => {
  const cleanCPF = cpf.replace(/\D/g, "");

  if (
    cleanCPF.length !== 11 ||
    cleanCPF === "00000000000" ||
    cleanCPF === "11111111111" ||
    cleanCPF === "22222222222" ||
    cleanCPF === "33333333333" ||
    cleanCPF === "44444444444" ||
    cleanCPF === "55555555555" ||
    cleanCPF === "66666666666" ||
    cleanCPF === "77777777777" ||
    cleanCPF === "88888888888" ||
    cleanCPF === "99999999999"
  ) {
    return false;
  }

  let sum = 0;
  let remainder;

  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cleanCPF.substring(i - 1, i)) * (11 - i);
  }

  remainder = (sum * 10) % 11;

  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(cleanCPF.substring(9, 10))) {
    return false;
  }

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cleanCPF.substring(i - 1, i)) * (12 - i);
  }

  remainder = (sum * 10) % 11;

  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(cleanCPF.substring(10, 11))) {
    return false;
  }

  return true;
};
