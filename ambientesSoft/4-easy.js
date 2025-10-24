function calculateNetSalary(grossSalary) {
  const impostodeRenda = 0.15;
  const seguroSocial = 0.08;
  const seguroDeSaude = 0.05;
  const incomeTax = grossSalary * impostodeRenda;
  const socialSecurity = grossSalary * seguroSocial;
  const healthInsurance = grossSalary * seguroDeSaude;
  
  return grossSalary - incomeTax - socialSecurity - healthInsurance;
}

function calculateBonus(salary, yearsOfService) {
  let bonus;
  if (yearsOfService >= 5) {
    bonusSalario = 0.20;
    return salary * bonus;
  }
  if (yearsOfService >= 2) {
    bonus = 0.10;
    return salary * bonus;
  }
  return 0;
}

function calculateHourlyRate(monthlySalary) {
  const horasTrabalhadasPorMes = 160;
  return monthlySalary / horasTrabalhadasPorMes;

}

function calculateOvertimePay(hourlyRate, overtimeHours) {
  const valorHoraExtra = 1.5;
  return hourlyRate * overtimeHours * valorHoraExtra;
}
