const moviesDiscoverURL_page2 = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc`;
const moviesDiscoverURL_page3 = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc`;
const moviesDiscoverURL_page4 = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=4&sort_by=popularity.desc`;
const moviesDiscoverURL_page5 = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=5&sort_by=popularity.desc`;
const moviesDiscoverURL_page6 = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=6&sort_by=popularity.desc`;
const moviesDiscoverURL_page7 = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=7&sort_by=popularity.desc`;
const moviesDiscoverURL_page8 = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=8&sort_by=popularity.desc`;
const moviesDiscoverURL_page9 = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=9&sort_by=popularity.desc`;
const moviesDiscoverURL_page10 = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=10&sort_by=popularity.desc`;

const pagination = document.querySelector(".pagination");
const page_1 = document.createElement("li");
page_1.textContent = 1;
const page_2 = document.createElement("li");
page_2.textContent = 2;

const page_3 = document.createElement("li");
page_3.textContent = 3;

const page_4 = document.createElement("li");
page_4.textContent = 4;

const page_5 = document.createElement("li");
page_5.textContent = 5;

const page_6 = document.createElement("li");
page_6.textContent = 6;

const page_7 = document.createElement("li");
page_7.textContent = 7;

const page_8 = document.createElement("li");
page_8.textContent = 8;

const page_9 = document.createElement("li");
page_9.textContent = 9;

const page_10 = document.createElement("li");
page_10.textContent = 10;

pagination.appendChild(page_1);
pagination.appendChild(page_2);
pagination.appendChild(page_3);
pagination.appendChild(page_4);
pagination.appendChild(page_5);
pagination.appendChild(page_6);
pagination.appendChild(page_7);
pagination.appendChild(page_8);
pagination.appendChild(page_9);
pagination.appendChild(page_10);

page_1.addEventListener("click", () => {
  getMovies(moviesDiscoverURL).then((data) => renderMovies(data.results));
  page_1.style.backgroundColor = "blue";
  page_1.style.color = "#fff";
});
page_2.addEventListener("click", () => {
  getMovies(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc"
  ).then((data) => renderMovies(data.results));
  page_2.style.backgroundColor = "blue";
  page_2.style.color = "#fff";
});
page_3.addEventListener("click", () => {
  getMovies(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc"
  ).then((data) => renderMovies(data.results));
  page_3.style.backgroundColor = "blue";
  page_3.style.color = "#fff";
});
page_4.addEventListener("click", () => {
  getMovies(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=4&sort_by=popularity.desc"
  ).then((data) => renderMovies(data.results));
  page_4.style.backgroundColor = "blue";
  page_5.style.color = "#fff";
});
page_5.addEventListener("click", () => {
  getMovies(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=5&sort_by=popularity.desc"
  ).then((data) => renderMovies(data.results));
  page_5.style.backgroundColor = "blue";
  page_5.style.color = "#fff";
});
page_6.addEventListener("click", () => {
  getMovies(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=6&sort_by=popularity.desc"
  ).then((data) => renderMovies(data.results));
  page_6.style.backgroundColor = "blue";
  page_6.style.color = "#fff";
});
page_7.addEventListener("click", () => {
  getMovies(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=7&sort_by=popularity.desc"
  ).then((data) => renderMovies(data.results));
  page_7.style.backgroundColor = "blue";
  page_7.style.color = "#fff";
});
page_8.addEventListener("click", () => {
  getMovies(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=8&sort_by=popularity.desc"
  ).then((data) => renderMovies(data.results));
  page_8.style.backgroundColor = "blue";
  page_8.style.color = "#fff";
});
page_9.addEventListener("click", () => {
  getMovies(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=9&sort_by=popularity.desc"
  ).then((data) => renderMovies(data.results));
  page_9.style.backgroundColor = "blue";
  page_9.style.color = "#fff";
});
page_10.addEventListener("click", () => {
  getMovies(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=10&sort_by=popularity.desc"
  ).then((data) => renderMovies(data.results));
  page_10.style.backgroundColor = "blue";
  page_10.style.color = "#fff";
});
