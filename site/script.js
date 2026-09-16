const menu = document.querySelector('.menu-button');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => { const open = navigation.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menu.focus(); } });
const rows = [...document.querySelectorAll('.publication')];
const search = document.querySelector('#publication-search');
const filters = [...document.querySelectorAll('[data-filter]')];
let selected = 'All';
function updatePublications() {
  const query = search.value.trim().toLowerCase();
  let count = 0;
  rows.forEach(row => { const visible = (selected === 'All' || row.dataset.kind === selected) && row.textContent.toLowerCase().includes(query); row.hidden = !visible; if (visible) count++; });
  document.querySelector('#result-count').textContent = `${count} publication${count === 1 ? '' : 's'}`;
  document.querySelector('#no-results').hidden = count !== 0;
}
filters.forEach(button => button.addEventListener('click', () => { selected = button.dataset.filter; filters.forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); }); updatePublications(); }));
search.addEventListener('input', updatePublications);
document.querySelector('.publication-controls').hidden = false;
updatePublications();
