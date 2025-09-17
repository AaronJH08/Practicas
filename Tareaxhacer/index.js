const texto = document.getElementById('texto');
const btnAgregar = document.getElementById('agregar');
const lista = document.getElementById('lista');
const total = document.getElementById('total');
const hechas = document.getElementById('hechas');
const faltantes = document.getElementById('faltantes');

let idGrupo = 0;

btnAgregar.addEventListener('click', agregar);
texto.addEventListener('keydown', e => { if (e.key === 'Enter') agregar(); });

function agregar() {
  const t = texto.value.trim();
  if (t === '') return;
  idGrupo++;

  const li = document.createElement('li');
  li.className = 'item';
  li.dataset.estado = 'pendiente';
  li.innerHTML = `
    <span class="texto">${t}</span>
    <div>
      <input type="radio" name="g${idGrupo}" value="pendiente" checked>
      <label>Pendiente</label>
      <input type="radio" name="g${idGrupo}" value="hecha">
      <label>Hecha</label>
    </div>
    <button class="borrar">Borrar</button>
  `;

  const radios = li.querySelectorAll('input[type="radio"]');
  const spanTexto = li.querySelector('.texto');
  radios[0].addEventListener('change', () => {
    li.dataset.estado = 'pendiente';
    spanTexto.classList.remove('hecha');
    contar();
  });
  radios[1].addEventListener('change', () => {
    li.dataset.estado = 'hecha';
    spanTexto.classList.add('hecha');
    contar();
  });

  li.querySelector('.borrar').addEventListener('click', () => {
    li.remove();
    contar();
  });

  lista.appendChild(li);
  texto.value = '';
  contar();
}

function contar() {
  const items = lista.querySelectorAll('.item');
  const hechasNum = Array.from(items).filter(i => i.dataset.estado === 'hecha').length;
  total.textContent = items.length;
  hechas.textContent = hechasNum;
  faltantes.textContent = items.length - hechasNum;
}
