const apiurl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const imgpath='https://image.tmdb.org/t/p/w1280';
async function getMovies(){
  const resp = await fetch(apiurl);
  const respdata = await resp.json();

  respdata.results.forEach(movie=>{
    const movieEl = document.createElement('div');
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
    <img src=${imgpath+movie.poster_path} alt="">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <span style="color:${checkColor(movie.vote_average)}">${parseFloat(movie.vote_average).toFixed(2)}</span>
      </div>
      <div class="overview">
        <h3>Overview:</h3>
        ${movie.overview}
      </div>
    `
    document.body.appendChild(movieEl);
  })
}

function checkColor(x){
  if(x >=8){
    return "#32de84";
  }
  else if(x>=6){
    return "orange";
  }
  else{
    return "red";
  }
}

getMovies();