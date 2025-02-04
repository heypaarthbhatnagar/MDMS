// Get the movie ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

// Function to fetch and display movie details
async function getMovieDetails() {
    const apiKey = "cacc80e6b0b7884e9f1d389e8a701bee"; // Replace with your TMDB API key
    const movieDetailSection = document.getElementById('movie-detail');

    if (!movieId) {
        movieDetailSection.innerHTML = "<p>Error: Movie ID not found in the URL.</p>";
        return;
    }

    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=credits,production_companies`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!data) {
            throw new Error("No data received from the API.");
        }

        const backdrop = data.backdrop_path ? `https://image.tmdb.org/t/p/original${data.backdrop_path}` : 'default-backdrop.jpg';
        const poster = data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : 'default-poster.jpg';
        const genres = data.genres.length > 0 ? data.genres.map(genre => genre.name).join(', ') : "Unknown";
        const cast = data.credits.cast.slice(0, 6).map(cast => `
            <li>
                <img src="${cast.profile_path ? `https://image.tmdb.org/t/p/w200${cast.profile_path}` : 'default-cast.jpg'}" 
                     alt="${cast.name}" class="cast-photo">
                <p><strong>${cast.name}</strong> as ${cast.character}</p>
            </li>
        `).join('');

        movieDetailSection.innerHTML = `
            <div class="movie-detail-container" style="background-image: url('${backdrop}'); background-size: cover; background-position: center;">
                <div class="movie-poster">
                    <img src="${poster}" alt="${data.title}">
                </div>
                <div class="movie-info">
                    <h2>${data.title}</h2>
                    <p><strong>Release Year:</strong> ${data.release_date ? data.release_date.split("-")[0] : "N/A"}</p>
                    <p><strong>Overview:</strong> ${data.overview || "No overview available."}</p>
                    <p><strong>Rating:</strong> ${data.vote_average}</p>
                    <p><strong>Genres:</strong> ${genres}</p>
                    <p><strong>Language:</strong> ${data.original_language}</p>
                    <p><strong>Runtime:</strong> ${data.runtime} minutes</p>

                    <h3>Cast</h3>
                    <ul class="cast-list">${cast}</ul>

                    <h3>Production Companies</h3>
                    <ul class="production-companies">
                        ${data.production_companies.map(company => `<li>${company.name}</li>`).join('')}
                    </ul>

                    <h3>Director</h3>
                    <p>${data.credits.crew.filter(crew => crew.job === "Director").map(director => director.name).join(', ')}</p>
                </div>
            </div>
        `;

        // Fetch the trailer video
        const videoResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`);
        
        if (!videoResponse.ok) {
            throw new Error(`HTTP error! status: ${videoResponse.status}`);
        }

        const videoData = await videoResponse.json();
        const trailer = videoData.results.find(video => video.type === 'Trailer');
        
        if (trailer) {
            movieDetailSection.innerHTML += `
                <div class="trailer-container">
                    <h3>Trailer</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/${trailer.key}" frameborder="0" allowfullscreen></iframe>
                </div>
            `;
        }
    } catch (error) {
        console.error("Error fetching movie details:", error);
        movieDetailSection.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Call the function to fetch movie details when the page loads
window.onload = getMovieDetails;