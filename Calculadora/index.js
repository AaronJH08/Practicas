const pantalla = document.getElementById('pantalla');
const teclas = document.querySelector('.teclas');
const btnIgual = document.getElementById('btn-igual');
const btnBorrar = document.getElementById('btn-borrar');

let expr = '';

teclas.addEventListener('click', (e) => {
  const btn = e.target;
  const v = btn.dataset.v;
  if (!v) return;
  expr += v;
  pantalla.value = expr;
});

btnIgual.addEventListener('click', () => {
  if (expr !== '') {
    const res = eval(expr);
    pantalla.value = res;
    expr = String(res);
  }
});

btnBorrar.addEventListener('click', () => {
  expr = '';
  pantalla.value = '';
});
