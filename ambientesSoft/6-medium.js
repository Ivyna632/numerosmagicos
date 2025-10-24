const { version } = require("react");

function calculateShippingCost(weight, distance) {
  const taxaPeso = 2.5;
  const taxaDistancia = 0.05;
  const weightCost = weight * taxaPeso;
  const distanceCost = distance * taxaDistancia;
  const valorFixo = 10;
  const frete = valorFixo+ weightCost + distanceCost;
  return frete;
}

function applyWeightSurcharge(cost, weight) {
  const limitePesoAlto = 50;
  const limitePesoMedio = 30;
  const TaxaPesoAlto = 1.25;
  const TaxaPesoMedio = 1.15;
    if (weight > limitePesoAlto) {
    return cost * TaxaPesoAlto;
  }
  if (weight > limitePesoMedio) {
    return cost * TaxaPesoMedio;
  }
  return cost;
}

function applyDistanceSurcharge(cost, distance) {
  const limiteDistanciaAlta = 1000;
  const limiteDistanciaMedia = 500;
  const taxaDistanciaAlta = 1.30;
  const taxaDistanciaMedia = 1.15;
  if (distance > limiteDistanciaAlta) {
    return cost * taxaDistanciaAlta;
  }
  if (distance > limiteDistanciaMedia) {
    return cost * taxaDistanciaMedia;
  }
  return cost;
}

function calculateDeliveryTime(distance) {
  const velocidadeMediakmph = 80;
  const horasDoDia = 24;
  const hours = distance / velocidadeMediakmph;
  const days = Math.ceil(hours / horasDoDia);
  return days;
}

function isExpressDelivery(distance) {
  const limiteDistanciaExpressa = 200;
  return distance <= limiteDistanciaExpressa;
}
