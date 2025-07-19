
const password = "fatbee123";

document.getElementById('adminPass').addEventListener('input', function() {
  if (this.value === password) {
    document.getElementById('adminPanel').style.display = 'block';
  } else {
    document.getElementById('adminPanel').style.display = 'none';
  }
});

function addDrink() {
  const name = document.getElementById('drinkName').value;
  const ingredients = document.getElementById('drinkIngredients').value;
  const price = document.getElementById('drinkPrice').value;
  const image = document.getElementById('drinkImage').value;

  const drink = { name, ingredients, price, image };
  const drinks = JSON.parse(localStorage.getItem('drinks') || '[]');
  drinks.push(drink);
  localStorage.setItem('drinks', JSON.stringify(drinks));
  renderDrinks();
}

function renderDrinks() {
  const drinks = JSON.parse(localStorage.getItem('drinks') || '[]');
  const container = document.getElementById('drinkList');
  container.innerHTML = '';
  drinks.forEach(d => {
    const card = document.createElement('div');
    card.className = 'drink-card';
    card.innerHTML = \`
      <img src="\${d.image}" alt="\${d.name}" />
      <h4>\${d.name}</h4>
      <p><strong>Ingredients:</strong> \${d.ingredients}</p>
      <p><strong>Price:</strong> \$\${d.price}</p>
    \`;
    container.appendChild(card);
  });
}

renderDrinks();
