const apiKey = "YOUR_API_KEY";
const movieContainer = document.querySelector("section");

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
  .then(res => res.json())
  .then(data => {
    movieContainer.innerHTML = data.results.map(movie => `
      <div class="bg-white bg-opacity-10 backdrop-blur rounded-2xl shadow-lg p-4 animate-fade-in">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="rounded-xl mb-2">
        <h2 class="text-xl font-bold">${movie.title}</h2>
        <p class="text-sm text-gray-300">${movie.release_date}</p>
      </div>
    `).join('');
  });
