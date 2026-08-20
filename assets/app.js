const overlay = document.getElementById('contact-overlay');
const openContact = document.getElementById('contact-open');
const closeContact = document.getElementById('contact-close');
const header = document.getElementById('site-header');
const navLinks = [...document.querySelectorAll('[data-section]')];

function setContact(open) {
  overlay.classList.toggle('open', open);
  overlay.setAttribute('aria-hidden', String(!open));
  document.body.classList.toggle('locked', open);
}

openContact.addEventListener('click', () => setContact(true));
closeContact.addEventListener('click', () => setContact(false));
overlay.addEventListener('click', (event) => {
  if (event.target === overlay) setContact(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setContact(false);
});

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

const sections = navLinks
  .map(link => ({ link, section: document.getElementById(link.dataset.section) }))
  .filter(x => x.section);

const observer = new IntersectionObserver((entries) => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navLinks.forEach(link => link.classList.toggle('active', link.dataset.section === visible.target.id));
}, { rootMargin: '-20% 0px -65% 0px', threshold: [0, .15, .35, .65] });

sections.forEach(({ section }) => observer.observe(section));

// Add your own project URLs here later.
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const project = card.dataset.project;
    console.log(`Open project ${project}`);
  });
});
