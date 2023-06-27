

async function getMovies() {
  let response = await fetch ('https://api.themoviedb.org/3/trending/all/day?language=en-US'); 
  let data = await response.json();
  return data;
}

getMovies().then(response=> {
  console.log(response);
  const apiResponse = document.getElementsByClassName("apiResponse")[0];
  apiResponse.textContent = JSON.stringify (response);
})





   
