// Function to fetch and display search results
async function searchMovies() {
    const apiKey = "cacc80e6b0b7884e9f1d389e8a701bee"; // Replace with your TMDB API key
    const searchQuery = document.getElementById("search-input").value; // Get the search input value

    if (searchQuery) {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${apiKey}`);
        const data = await response.json();

        const movieList = document.querySelector('.movie-list');
        movieList.innerHTML = ""; // Clear existing movies

        if (data.results && data.results.length > 0) {
            data.results.forEach(movie => {
                const movieElement = `
                <div class="movie">
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                    <h2><a href="movie-detail.html?id=${movie.id}">${movie.title}</a></h2>
                    <p>Year: ${movie.release_date ? movie.release_date.split("-")[0] : "N/A"}</p>
                    <p>TMDB ID: ${movie.id}</p>
                </div>
                `;
                movieList.innerHTML += movieElement;
            });
        } else {
            movieList.innerHTML = "<p>No results found.</p>";
        }
    } else {
        alert("Please enter a search term.");
    }
}

// Function to fetch and display popular movies
async function getPopularMovies() {
    const apiKey = "cacc80e6b0b7884e9f1d389e8a701bee"; // Replace with your TMDB API key
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
    const data = await response.json();

    const movieList = document.getElementById('popular-movies');
    movieList.innerHTML = ""; // Clear existing movies

    if (data.results && data.results.length > 0) {
        // Limit to 12 movies
        const limitedMovies = data.results.slice(0, 12);

        limitedMovies.forEach(movie => {
            const movieElement = `
            <div class="movie">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                <h2><a href="movie-detail.html?id=${movie.id}">${movie.title}</a></h2>
                <p>Year: ${movie.release_date ? movie.release_date.split("-")[0] : "N/A"}</p>
                <p>TMDB ID: ${movie.id}</p>
            </div>
            `;
            movieList.innerHTML += movieElement;
        });
    } else {
        movieList.innerHTML = "<p>No popular movies found.</p>";
    }
}

// Function to fetch and display highly rated movies
async function getHighlyRatedMovies() {
    const apiKey = "cacc80e6b0b7884e9f1d389e8a701bee"; // Replace with your TMDB API key
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`);
    const data = await response.json();

    const movieList = document.getElementById('highly-rated-movies');
    movieList.innerHTML = ""; // Clear existing movies

    if (data.results && data.results.length > 0) {
        // Limit to 12 movies
        const limitedMovies = data.results.slice(0, 12);

        limitedMovies.forEach(movie => {
            const movieElement = `
            <div class="movie">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                <h2><a href="movie-detail.html?id=${movie.id}">${movie.title}</a></h2>
                <p>Year: ${movie.release_date ? movie.release_date.split("-")[0] : "N/A"}</p>
                <p>Rating: ${movie.vote_average}</p>
            </div>
            `;
            movieList.innerHTML += movieElement;
        });
    } else {
        movieList.innerHTML = "<p>No highly rated movies found.</p>";
    }
}

// Call the functions when the page loads
window.onload = function () {
    getPopularMovies(); // Fetch popular movies
    getHighlyRatedMovies(); // Fetch highly rated movies
};
