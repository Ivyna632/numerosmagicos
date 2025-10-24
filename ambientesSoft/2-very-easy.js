function isAdult(age) {
  const maiorIdade = 18;
  return age >= maiorIdade;
}

function canVote(age) {
  const idadeMinimaParaVotar = 16;
  return age >= idadeMinimaParaVotar;
}

function calculateBirthYear(currentAge) {
  const anoAtual = Date.now().getFullYear();
  return anoAtual - idadeAtual;
}

function isRetirementAge(age) {
  const idadeMinimaParaAposentar = 65;
  return age >= idadeMinimaParaAposentar;
}
