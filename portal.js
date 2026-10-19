const search = document.querySelector('#disciplineSearch');
const cards = [...document.querySelectorAll('.discipline-card')];
const count = document.querySelector('#catalogCount');
const empty = document.querySelector('#searchEmpty');
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
function filterCatalog() {
  const term = normalize(search.value.trim());
  let visible = 0;
  cards.forEach(card => {
    const match = normalize(card.dataset.search + ' ' + card.textContent).includes(term);
    card.hidden = !match;
    if (match) visible += 1;
  });
  count.textContent = term ? `${visible} ${visible === 1 ? 'trilha encontrada' : 'trilhas encontradas'}` : '1 disciplina disponível';
  empty.hidden = visible !== 0;
}
search.addEventListener('input', filterCatalog);
document.addEventListener('keydown', event => {
  if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
    event.preventDefault();
    search.focus();
  }
  if (event.key === 'Escape' && document.activeElement === search) {
    search.value = '';
    filterCatalog();
    search.blur();
  }
});