export const ValidaCpf = (cpf) => {
  // Para substituir os simbolos por espaços vazios.
  const noSpaceCpf = cpf.replace(/\D+/g, '');
  const cpfValidator = CpfCheck(noSpaceCpf);

  if (!cpfValidator) {
    return false;
  }

  return true;
};

const CpfCheck = (noSpaceCpf) => {
  if (typeof noSpaceCpf === 'undefined') return false;
  if (noSpaceCpf.length !== 11) return false;
  if (noSpaceCpf[0].repeat(noSpaceCpf.length) === noSpaceCpf) return false;

  // Para pegar os 9 primeiros dígitos do cpf
  const cpfParcial = noSpaceCpf.slice(0, -2);
  const FirstDigit = criaDigito(cpfParcial);
  const SecondDigit = criaDigito(cpfParcial + FirstDigit);

  const newCpf = cpfParcial + FirstDigit + SecondDigit;
  return newCpf === noSpaceCpf;
};

const criaDigito = (ParcialCPF) => {
    // criando um array com os 9 dígitos->
    const cpfArray = Array.from(ParcialCPF);
    // criando o contador para usar no reduce()
    let counter = cpfArray.length + 1;

    // Fazendo a soma ->
    const total = cpfArray.reduce((ac: number, value) => {
        ac += (counter * Number(value));
        counter--;
        return ac;
    }, 0);

    // Para encontrar o dígito->
    const digit = 11 - (total % 11);

    // "Se o dígito for maior que 9 retorna 0, se não retorna o dígito"
    return digit > 9 ? '0' : String(digit);
};