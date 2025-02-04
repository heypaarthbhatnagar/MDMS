This project is a **Movie Database Web Application** that allows users to explore a vast collection of movies, view detailed information about each movie, and search for specific movies. The application fetches data from **The Movie Database (TMDB) API** and dynamically displays it on the web page. It includes features such as:

1. **Search Functionality**: Users can search for movies by title, and the application will display the search results dynamically.
2. **Popular Movies**: Displays a list of currently popular movies fetched from the TMDB API.
3. **Highly Rated Movies**: Shows a list of top-rated movies.
4. **Movie Details**: When a user clicks on a movie, they are redirected to a detailed page that includes information such as the movie's title, release year, overview, rating, genres, cast, production companies, and a trailer (if available).
5. **Responsive Design**: The application is designed to be responsive and works seamlessly on both desktop and mobile devices.

---

### Key Features

#### **1. Home Page**
- Displays a hero section with a welcome message and a call-to-action button to explore movies.
- Includes a search bar for users to search for movies.
- Shows sections for **Popular Movies** and **Highly Rated Movies**.

#### **2. Search Functionality**
- Users can enter a search term in the search bar, and the application fetches and displays relevant movies from the TMDB API.
- Each search result includes the movie's poster, title, release year, and a link to view more details.

#### **3. Movie Details Page**
- Displays comprehensive information about a selected movie, including:
  - Movie poster and backdrop image.
  - Title, release year, overview, rating, genres, runtime, and language.
  - Cast members (limited to 6) with their photos and character names.
  - Production companies.
  - Director(s) of the movie.
  - Embedded YouTube trailer (if available).

#### **4. Responsive and Modern UI**
- The application features a dark theme with vibrant accents (e.g., pink for highlights).
- The layout is responsive and adapts to different screen sizes, ensuring a great user experience on both desktop and mobile devices.

#### **5. Error Handling**
- The application includes robust error handling to manage issues such as:
  - Missing movie IDs in the URL.
  - Failed API requests.
  - Missing or incomplete data from the API.

---

### Technologies Used

- **Frontend**:
  - HTML5
  - CSS3 (with Flexbox for layout)
  - JavaScript (ES6+)
- **API**:
  - The Movie Database (TMDB) API
- **Responsive Design**:
  - Media queries for mobile-friendly layouts.
