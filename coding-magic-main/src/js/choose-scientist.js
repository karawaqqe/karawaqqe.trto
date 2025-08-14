import {scientists} from "../data/scientists-data"

const born19Ceuntry = document.getElementById('born-19-century');
const einsteinBirthYear = document.getElementById('einstein-birth-year');
const sortAlphabet = document.getElementById('sort-alphabet');
const startsC = document.getElementById('starts-c');
const removeStartsA = document.getElementById('remove-starts-a');
const sortByLifespan = document.getElementById('sort-by-lifespan');
const youngestScientist = document.getElementById('youngest-scientist');
const longestShortestLife = document.getElementById('longest-shortest-life');
const sameLetters = document.getElementById('same-letters');

born19Ceuntry.addEventListener('click', () => {
  for (let i = 0; i < scientists.length; i++) {
    const scientist = scientists[i];
    const card = document.getElementById(scientist.id);

    if (scientist.born >= 1801 && scientist.born <= 1900) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  }
});

einsteinBirthYear.addEventListener('click', () => {
  const einstein = scientists.find(
    scientist => scientist.name === 'Albert' && scientist.surname === 'Einstein'
  );
  alert(`Albert Einstein was born in ${einstein.born}`);
});

sortAlphabet.addEventListener('click', () => {
  const container = document.querySelector('.scientists__container');
  const sorted = scientists
    .slice()
    .sort((a, b) => a.surname.localeCompare(b.surname));

  for (let i = 0; i < sorted.length; i++) {
    const card = document.getElementById(sorted[i].id);
    container.appendChild(card);
  }
});

startsC.addEventListener('click', () => {
  for (let i = 0; i < scientists.length; i++) {
    const scientist = scientists[i];
    const card = document.getElementById(scientist.id);
    card.style.display = scientist.surname.startsWith('C') ? 'block' : 'none';
  }
});

removeStartsA.addEventListener('click', () => {
  for (let i = 0; i < scientists.length; i++) {
    const scientist = scientists[i];
    const card = document.getElementById(scientist.id);
    if (scientist.name.startsWith('A')) {
      card.style.display = 'none';
    }
  }
});

sortByLifespan.addEventListener('click', () => {
  const container = document.querySelector('.scientists__container');

  scientists
    .sort((a, b) => a.surname.localeCompare(b.surname))
    .forEach(s => {
      container.appendChild(document.getElementById(s.id));
    });
});

youngestScientist.addEventListener('click', () => {
  let youngest = scientists[0];

  for (let i = 1; i < scientists.length; i++) {
    if (scientists[i].born > youngest.born) {
      youngest = scientists[i];
    }
  }

  for (let i = 0; i < scientists.length; i++) {
    const card = document.getElementById(scientists[i].id);
    if (scientists[i].id === youngest.id) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  }
});

longestShortestLife.addEventListener('click', () => {
  let longest = scientists[0];
  let shortest = scientists[0];

  scientists.forEach(scientist => {
    const age = scientist.dead - scientist.born;
    const longestAge = longest.dead - longest.born;
    const shortestAge = shortest.dead - shortest.born;

    if (age > longestAge) longest = scientist;
    if (age < shortestAge) shortest = scientist;
  });

  scientists.forEach(scientist => {
    const card = document.getElementById(scientist.id);
    card.style.display =
      scientist.id === longest.id || scientist.id === shortest.id
        ? 'block'
        : 'none';
  });
});

sameLetters.addEventListener('click', () => {
  const match = scientists.filter(scientist => {
    const nameFirst = scientist.name[0];
    const surnameFirst = scientist.surname[0];
    return nameFirst === surnameFirst;
  });

  scientists.forEach(scientist => {
    const card = document.getElementById(scientist.id);
    card.style.display = match.includes(scientist) ? 'block' : 'none';
  });
});
