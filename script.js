// Get unique types
const $types = [...new Set(pokedex.flatMap(pokemon => pokemon.type))];
 
// Sort $types alphabetically
$types.sort();
 
// Create navigation bar HTML
const nav = document.createElement('nav');
const ul = document.createElement('ul');
$types.forEach(type => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = `#${type}`;
  a.textContent = type;
  li.appendChild(a);
  ul.appendChild(li);
});
nav.appendChild(ul);
document.getElementById('pokedex').appendChild(nav);
 
// Create type sections
$types.forEach(type => {
  // Filter Pokémon with this type
  const TypeofPokemon = pokedex.filter(pokemon => pokemon.type.includes(type));

  
 
  //sort by alphabetically order
  TypeofPokemon.sort((a, b) => a.name.localeCompare(b.name));


 
  // Calculate total HP and Attack
  const totalHP = TypeofPokemon.reduce((sum, pokemon) => sum + pokemon.base.HP, 0);
  const totalAttack = TypeofPokemon.reduce((sum, pokemon) => sum + pokemon.base.Attack, 0);

  
 
  // Create type section HTML
  const section = document.createElement('section');
  section.className = 'type';
  section.id = type;

 
  // Create header with total HP and total Attack
  const header = document.createElement('header');
  header.innerHTML = `<center><div><b>Total HP: ${totalHP} | Total Attack: ${totalAttack}</b></div></center>`;
  section.appendChild(header);
 


 // creating h2 element
  const h2 = document.createElement('h2');
  h2.textContent = `${type} (${TypeofPokemon.length} Pokémon)`;
  section.appendChild(h2);
 
  const ul = document.createElement('ul');
  TypeofPokemon.forEach(pokemon => {
    const li = document.createElement('li');
    li.className = 'entry';
    const a = document.createElement('a');
    a.href = pokemon.url;
    a.target = '_blank';
    const img = document.createElement('img');
    img.src = pokemon.sprite;
    img.alt = `${pokemon.name} sprite`;
    a.appendChild(img);
    const div = document.createElement('div');

    // creating h3 element
    const h3 = document.createElement('h3');
    h3.textContent = pokemon.name;
    div.appendChild(h3);
    // creating p1 element
    const p1 = document.createElement('p');
    p1.textContent = `Type: ${pokemon.type.join(", ")}`;
    div.appendChild(p1);
    // craeting p2 element
    const p2 = document.createElement('p');
    p2.textContent = `Base HP: ${pokemon.base.HP}`;
    div.appendChild(p2);
    // craeting p3 element
    const p3 = document.createElement('p');
    p3.textContent = `Base Attack: ${pokemon.base.Attack}`;
    div.appendChild(p3);
    // creating p4 element
    const p4 = document.createElement('p');
    p4.textContent = `Base Defense: ${pokemon.base.Defense}`;
    div.appendChild(p4);
    //creating p5 element
    const p5 = document.createElement('p');
    p5.textContent = `Special Attack: ${pokemon.base["Sp. Attack"]}`;
    div.appendChild(p5);
    // creating p6 element
    const p6 = document.createElement('p');
    p6.textContent = `Special Defense: ${pokemon.base["Sp. Defense"]}`;
    div.appendChild(p6);
    // crareting p7 element
    const p7 = document.createElement('p');
    p7.textContent = `Base Speed: ${pokemon.base.Speed}`;
    div.appendChild(p7);
    a.appendChild(div);
    li.appendChild(a);
    ul.appendChild(li);
  });
  section.appendChild(ul);
  const div = document.createElement('div');
  div.className = 'totals';
  div.innerHTML = `Total HP: ${totalHP}<br>Total Attack: ${totalAttack}`;
  section.appendChild(div);
  document.getElementById('pokedex').appendChild(section);
});
 
 