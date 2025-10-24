function calculateCompoundInterest(principal, annualRate, years) {
  const jurosComposto = principal * Math.pow(1 + annualRate / 12, 12 * years);
  return jurosComposto;
}

function calculateInvestmentReturn(initialAmount, monthlyContribution, annualRate, years) {
  const qntdMeses = 12;
  let balance = initialAmount;
  const monthlyRate = annualRate / qntdMeses;
  
  for (let month = 0; month < years * qntdMeses; month++) {
    balance = balance * (1 + monthlyRate) + monthlyContribution;
  }
  
  return balance;
}

function calculateInflationAdjustedValue(currentValue, inflationRate, years) {
  return currentValue / Math.pow(1 + inflationRate, years);
}

function isHighRiskInvestment(volatility) {
  const valorRisco = 0.25;
  return volatility > valorRisco;;
}

function calculatePortfolioAllocation(totalAmount, riskLevel) {
  let alocarAcoes;
  let alocarTitulos;
  
  if (riskLevel === 1) {
    alocarAcoes = 0.20;
    alocarTitulos = 0.80;
    return { stocks: totalAmount * alocarAcoes, bonds: totalAmount * alocarTitulos };
  }
  if (riskLevel === 2) {
    alocarAcoes = 0.50;
    alocarTitulos = 0.50; 
    return { stocks: totalAmount * alocarAcoes, bonds: totalAmount * alocarTitulos };
  }
  if (riskLevel === 3) {
    alocarAcoes = 0.80;
    alocarTitulos = 0.20;
    return { stocks: totalAmount * alocarAcoes, bonds: totalAmount * alocarTitulos };
  }
}
