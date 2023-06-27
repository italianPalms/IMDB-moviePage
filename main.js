


async function getMovies() {
  let response = await fetch('https://api.themoviedb.org/3/trending/all/week?language=en-US&api_key=ccecc2f5025505f3a623778fa7831646');
  let data = await response.json();
  return data;
}


getMovies().then(response => {
  const apiResponse = document.querySelector(".apiResponse");
  console.log(response);

  response.results.forEach(movie => {
    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movie");

    const imageUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
    const title = movie.original_title || movie.original_name;

    const image = document.createElement("img");
    image.src = imageUrl;
    image.alt = "Movie Poster";

    const heading = document.createElement("h3");
    heading.textContent = title;

    movieContainer.appendChild(image);
    movieContainer.appendChild(heading);

    apiResponse.appendChild(movieContainer);
  });
  
});




