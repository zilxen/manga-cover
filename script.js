// Replace these with your actual manga titles and last update dates
const mangaData = [
  { title: 'Boku_no_Hero_Academia', lastUpdated: '2023-08-01' },
  { title: 'One_Piece', lastUpdated: '2023-07-15' },
  // Add more manga data here
];

const mangaTable = document.getElementById('mangaTable').getElementsByTagName('tbody')[0];

mangaData.forEach(manga => {
  const row = document.createElement('tr');
  const titleCell = document.createElement('td');
  const titleLink = document.createElement('a');
  titleLink.href = `/${manga.title}`;
  titleLink.textContent = manga.title.replace(/_/g, ' ');
  titleCell.appendChild(titleLink);
  row.appendChild(titleCell);
  const lastUpdatedCell = document.createElement('td');
  lastUpdatedCell.textContent = manga.lastUpdated;
  row.appendChild(lastUpdatedCell);
  mangaTable.appendChild(row);
});
