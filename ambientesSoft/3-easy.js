function celsiusToFahrenheit(celsius) {
  const farenheit =(celsius * 9 / 5) + 32;
  return farenheit;
}

function fahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5 / 9;
  return celsius;
}

function celsiusToKelvin(celsius) {
  const kelvin = celsius + 273.15;
  return kelvin;
}

function kelvinToCelsius(kelvin) {
  const celsius = kelvin - 273.15;
  return celsius;
}

function isBoilingPoint(celsius) {
  const pontoDeEbulicao = celsius >= 100;
  return pontoDeEbulicao;
}

function isFreezingPoint(celsius) {
  const pontoDeSolidificacao = celsius <= 0;
  return pontoDeSolidificacao;
}
