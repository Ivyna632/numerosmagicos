function calculateSalesTax(amount) {
  const imposto = 0.15
  return amount * imposto;
}

function applyDiscount(amount) {
  const desconto = 0.90;
  return amount * desconto;
}

function calculateTotal(baseAmount) {
  const imposto = 0.15;
  const desconto = 0.10;
  const tax = baseAmount * imposto;
  const discount = baseAmount * desconto;
  return baseAmount + tax - discount;
}
