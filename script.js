import { API_KEY, BASE_URL, IMG_URL, LANGUAGE } from './env.js';

const changeMovie = document.querySelector('#change-movie');
changeMovie.addEventListener('click', () => {
  document.querySelector('.content').classList.add('active');
  getMovie();
});

async function getMovie() {
  const id = Math.floor(Math.random() * 1000) + 1;
  const url = `${BASE_URL}${id}?${API_KEY}&${LANGUAGE}`;
  const creditsUrl = `${BASE_URL}${id}/credits?${API_KEY}&${LANGUAGE}`;

  const elements = {
    poster: document.getElementById('poster'),
    title: document.getElementById('title'),
    rating: document.getElementById('rating'),
    releaseDate: document.getElementById('release-date'),
    overview: document.getElementById('overview'),
    castList: document.getElementById('cast')
  };

  try {
    const [response, creditsResponse] = await Promise.all([fetch(url), fetch(creditsUrl)]);
    const [data, castData] = await Promise.all([response.json(), creditsResponse.json()]);

    elements.poster.src = `${IMG_URL}/${data.poster_path}`;
    elements.rating.textContent = `Nota: ${data.vote_average.toFixed(1)}`;
    elements.title.classList.remove('not-padding');
    elements.title.textContent = data.title;
    elements.overview.textContent = data.overview || 'Ops, me desculpe mas esse filme não tem sinopse.';
    elements.releaseDate.textContent = `Data de Lançamento: ${new Date(data.release_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })}`;

    elements.castList.innerHTML = '';
    castData.cast.slice(0, 5).forEach(member => {
      const listItem = document.createElement('li');
      listItem.textContent = member.name;
      elements.castList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Erro:', error);
    elements.poster.src = 'assets/Not.png';
    elements.rating.textContent = '';
    elements.title.classList.add('not-padding');
    elements.title.textContent = 'Ops, hoje não é dia de assistir filme. Bora codar! 🚀';
    elements.overview.textContent = '';
    elements.releaseDate.textContent = '';
    elements.castList.innerHTML = '';
  }
}