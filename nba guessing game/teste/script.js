const searchInput = document.getElementById('search-input');
const resultsList = document.getElementById('results-list');

searchInput.addEventListener('input', handleSearch);

async function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase();

  // Fetch JSON data
  
  const response = await fetch("http://127.0.0.1:5500/players.json");
  const data = await response.json();

  // Clear previous results
  resultsList.innerHTML = '';

  // Filter and display matching results
  const matchingItems = data.filter(item =>
    item.PName.toLowerCase().includes(searchTerm)
  );

  matchingItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.PName;
    resultsList.appendChild(li);
  });
}
