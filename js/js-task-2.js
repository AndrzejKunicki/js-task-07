const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const indgredintsRef = document.querySelector('#ingredients');

const createTags = (value) => {
  const item = document.createElement('li');
  item.textContent = value;
    return item;
}

const itemsMarkup = ingredients.map(value => createTags(value));
console.log(itemsMarkup);

indgredintsRef.append(...itemsMarkup);