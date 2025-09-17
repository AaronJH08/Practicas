function aPesos(n) {
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(n);
}
console.log('1)', aPesos(1234567));