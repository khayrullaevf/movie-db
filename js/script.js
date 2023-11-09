const moviesWrapper = document.querySelector(".movies__container");
const loading = document.querySelector(".loading");
const notFoundMessage = document.querySelector(".notFoundMessage");
const movieSearchForm = document.querySelector(".search-box");
const movieSearchInput = document.querySelector(".search-movie");
const pages = document.querySelector(".pages");
const apiKey = "a70c974fcd840149adb03bda918ed1d7";
const apiAccessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzBjOTc0ZmNkODQwMTQ5YWRiMDNiZGE5MThlZDFkNyIsInN1YiI6IjY1NGE1OWRiNmJlYWVhMDE0YjY5YjU1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._4moZnrhiJI_qfVRB_7O2_PgpwAfIP5hMSDzUgyDCwM";
const moviesTrendingAllURL =
  "https://api.themoviedb.org/3/trending/all/day?language=en-US";
let page = 1;
const moviesDiscoverURL = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;
const imageURL = "https://image.tmdb.org/t/p/w500";
const moviesSearchURL = "https://api.themoviedb.org/3/search/movie?query=";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzBjOTc0ZmNkODQwMTQ5YWRiMDNiZGE5MThlZDFkNyIsInN1YiI6IjY1NGE1OWRiNmJlYWVhMDE0YjY5YjU1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._4moZnrhiJI_qfVRB_7O2_PgpwAfIP5hMSDzUgyDCwM",
  },
};
// fetch(
//   "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// const mypromise=new Promise((resolve,reject)=>{
//     const num=10
//     if (num>9) {
//         resolve('success')
//     }else{
//         reject('error')
//     }
// })

// console.log(mypromise);
async function getMovies(url) {
  try {
    const response = await fetch(url, options);
    if (response.status !== 200) {
      console.log(`Response status error ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

movieSearchForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const searchValue = movieSearchInput.value.trim().toLowerCase();
  const apiSearchedMovies = await getMovies(`${moviesSearchURL}${searchValue}`);
  renderMovies(apiSearchedMovies.results);
  movieSearchForm.reset();
});

function renderMovies(url) {
  moviesWrapper.innerHTML = "";
  let found = false;
  url.forEach((movie) => {
    console.log(movie);
    const {
      overview,
      vote_average,
      original_title,
      backdrop_path,
      vote_count,
    } = movie;
    const movieBox = document.createElement("div");
    movieBox.classList.add("movie__box");

    const image = document.createElement("img");
    image.alt = overview;
    if (backdrop_path && backdrop_path !== null) {
      image.src = imageURL + backdrop_path;
    } else {
      image.src = "https://stimul-site.ru/images/site/noimage.jpeg";
    }

    const name = document.createElement("h2");
    name.classList.add("movie__name");
    name.textContent = original_title;

    const description = document.createElement("p");
    description.classList.add("movie__desc");
    const desc = overview.substring(0, 100);
    description.textContent = desc;
    const readMore = document.createElement("button");
    readMore.classList.add("read-more");
    readMore.textContent = "...read more";
    description.appendChild(readMore);
    readMore.addEventListener("click", () => {
      description.textContent = overview;
    });
    const rating = document.createElement("h3");
    rating.classList.add("movie__rating");
    const vote = document.createElement("h3");
    vote.classList.add("movie__vote");
    vote.textContent = "votes: ";
    const voteSpan = document.createElement("span");
    if (vote_count && vote_count !== null) {
      voteSpan.textContent = vote_count;
    } else {
      voteSpan.textContent = 0;
    }
    vote.appendChild(voteSpan);
    rating.textContent = vote_average;
    if (vote_average <= 4) {
      rating.style.color = "red";
    } else if (vote_average > 4 && vote_average < 7.5) {
      rating.style.color = "yellow";
    } else if (vote_average > 7.5) {
      rating.style.color = "green";
    }

    movieBox.appendChild(image);
    movieBox.appendChild(name);
    movieBox.appendChild(description);
    movieBox.appendChild(rating);
    movieBox.appendChild(vote);

    moviesWrapper.appendChild(movieBox);
    loading.style.display = "none";

    found = true;
  });
  loading.style.display = "none";

  if (!found) {
    notFoundMessage.style.display = "block";
    notFoundMessage.style.position = "fixed";
    notFoundMessage.style.top = "70%";
    notFoundMessage.style.left = "50%";
    notFoundMessage.style.fontSize = "20px";
    notFoundMessage.style.transform = "translate(-50%, 0%)";
    notFoundMessage.style.display = "block";
  } else {
    notFoundMessage.style.display = "none";
    loading.style.display = "none";

  }
}

getMovies(moviesDiscoverURL).then((data) => renderMovies(data.results));
