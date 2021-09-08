const interestCalculator = (value: String, uf: String, months: String): Array<String>  => {

  let installmentsValue = Number(value)/Number(months);
  const ufUpper = uf.toUpperCase();

  if (ufUpper === "MG") {
    installmentsValue += installmentsValue * (1 / 100);
    const fee = "1.00";
    return [installmentsValue.toFixed(2), fee];
  } if (ufUpper === "SP") {
    installmentsValue += installmentsValue * (0.8 / 100);
    const fee = "0.80";
    return [installmentsValue.toFixed(2), fee];
  } if (ufUpper === "RJ") {
    installmentsValue += installmentsValue * (0.119 / 100);
    const fee = "0.90";
    return [installmentsValue.toFixed(2), fee];
  } if (ufUpper === "ES") {
    installmentsValue += installmentsValue * (1.11 / 100);
    const fee = "1.11";
    return [installmentsValue.toFixed(2), fee];
  } else{
    const installmentsValue = "Nan"
    const fee = "Nan"
    return [installmentsValue, fee];

  };
}; 

export {interestCalculator}