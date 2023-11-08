const movies = document.getElementById("movies");

movies.addEventListener(
  "change",
  function () {
    if (this.value === "popularity.desc") {
      getMovies(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
      ).then((data) => renderMovies(data.results));
    } else if (this.value === "popularity-asc") {
      getMovies(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.asc"
      ).then((data) => renderMovies(data.results));
    } else if (this.value === "revenue-desc") {
      getMovies(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=revenue.desc"
      ).then((data) => renderMovies(data.results));
    } else if (this.value === "revenue-asc") {
      getMovies(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=revenue.asc"
      ).then((data) => renderMovies(data.results));
    } else if (this.value === "primary_release_date.asc") {
      getMovies(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=primary_release_date.asc"
      ).then((data) => renderMovies(data.results));
    } else if (this.value === "primary_release_date.asc") {
      getMovies(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=primary_release_date.asc"
      ).then((data) => renderMovies(data.results));
    } else if (this.value === "primary_release_date.desc") {
      getMovies(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=primary_release_date.desc"
      ).then((data) => renderMovies(data.results));
    } else if (this.value === "vote_average.asc") {
      getMovies(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.asc"
      ).then((data) => renderMovies(data.results));
    } else if (this.value === "vote_average.desc") {
      getMovies(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc"
      ).then((data) => renderMovies(data.results));
    } else if (this.value === "vote_count.asc") {
      getMovies(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.asc"
      ).then((data) => renderMovies(data.results));
    } else if (this.value === "vote_count.desc") {
      getMovies(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc"
      ).then((data) => renderMovies(data.results));
    } else {
      getMovies(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
      ).then((data) => renderMovies(data.results));
    }
  },
  false
);
