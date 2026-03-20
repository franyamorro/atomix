const moviesContainer = document.getElementById("movies-container");

const movies = [
  {
    title: "Inception",
    image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg"
  },
  {
    title: "Interstellar",
    image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
  },
  {
    title: "The Dark Knight",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  }
];

function displayMovies(data) {
  moviesContainer.innerHTML = "";

  data.forEach(movie => {
    const div = document.createElement("div");
    div.classList.add("movie");

    div.innerHTML = `
      <img src="${movie.image}">
      <h3>${movie.title}</h3>
    `;

    moviesContainer.appendChild(div);
  });
}

displayMovies(movies);

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const filtered = movies.filter(movie =>
    movie.title.toLowerCase().includes(value)
  );

  displayMovies(filtered);
});