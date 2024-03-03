import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';
import Filter from './Filter';
import MovieDetails from './MovieDetails';


const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Le Roi Lion',
      description: 'Le long combat de Simba le lionceau pour accéder à son rang de roi des animaux, après que le fourbe Scar, son oncle, a tué son père et pris sa place.',
      trailerLink: 'https://youtu.be/7TavVZMewpY',
      posterURL: 'https://fr.web.img3.acsta.net/pictures/22/09/20/12/10/2512840.jpg',
      rating: 9,
    },
    {
      id: 2,
      title: 'Avant toi',
      description: 'Un film qui raconte une belle histoire damour entre un jeune homme handicapé et une jeune fille pleine de fougue.',
      trailerLink: 'https://youtu.be/CmjXvt_c3Mo',
      posterURL: 'https://fr.web.img6.acsta.net/pictures/16/05/02/17/27/063880.jpg',
      rating: 7.5,
    },
    {
      id: 3,
      title: 'Joker',
      description: 'Un thriller psychologique américano-canadien réalisé par Todd Phillips.',
      trailerLink: 'https://youtu.be/zAGVQLHvwOY',
      posterURL: 'https://www.tallengestore.com/cdn/shop/products/Joker_-_Put_On_A_Happy_Face_-_Joaquin_Phoenix_-_Fan_Art_Hollywood_English_Movie_Poster_2_5e3acf9b-9b40-456b-957e-639cf7e85c0f_grande.jpg?v=1579504878',
      rating: 8,
    },
    {
      id: 4,
      title: 'À sa façon',
      description: 'À sa façon est un film réalisé par Cemal Alpan avec Ahsen Eroğlu, Mine Tugay',
      trailerLink: 'https://www.dailymotion.com/video/x8l9vh6',
      posterURL: 'https://image.tmdb.org/t/p/original/vUJUY77yJcMxQTNppKPEoDnwOXI.jpg',
      rating: 7,
    },
    {
      id: 5,
      title: 'Spy',
      description: 'Susan Cooper est une modeste et discrète analyste au siège de la CIA.',
      trailerLink: 'https://youtu.be/vU27Npk-sXM',
      posterURL: 'https://lumiere-a.akamaihd.net/v1/images/spy_584x800_e781538b.jpeg?region=0%2C0%2C584%2C834',
      rating: 6.5,
    },
    {
      id: 6,
      title: 'Royalteen ',
      description: 'Après sêtre effondrée lors de la fête de fin dannée, la princesse Margrethe est hospitalisée. Suite à cet évènement, tout le monde apprend quelle a consommé de la cocaïne.',
      trailerLink: 'https://youtu.be/cRu4yK8Zczs',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDQqUAilorsXGX5w1fzsy26t2TfZ8WM4FZGGwQ7-qgj8wJniiF',
      rating: 6,
    },
    {
      id: 7,
      title: 'The Killer',
      description: 'The Killer est un film réalisé par David Fincher avec Michael Fassbender, Tilda Swinton. Synopsis : Après un désastre évité de justesse, un tueur se bat ...',
      trailerLink: 'https://youtu.be/5S7FR_HCg9g',
      posterURL: 'https://media.senscritique.com/media/000021730364/0/the_killer.jpg',
      rating: 5.5,
    },
    
    // Add more movies as needed
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const filterMovies = () => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
        (!ratingFilter || movie.rating >= parseFloat(ratingFilter))
    );
    setFilteredMovies(filtered);
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    filterMovies();
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ textAlign: 'center', margin: '20px', backgroundColor: '#ddd4d4', minHeight: '100vh', padding: '20px' }}>
              <h1 style={{ color: 'red', fontSize: '32px', marginBottom: '20px' }}>Movie Collection</h1>
              <Filter onTitleChange={setTitleFilter} onRatingChange={setRatingFilter} />
              <MovieList movies={filteredMovies} onMovieClick={(id) => console.log(`Clicked on movie ${id}`)} />
              <button
                style={{
                  marginTop: '20px',
                  padding: '10px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  backgroundColor: '#28a745',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                }}
                onClick={() =>
                  addMovie({
                    title: prompt('Enter the movie title:'),
                    description: prompt('Enter the movie description:'),
                    trailerLink: prompt('Enter the movie trailer link (embed video link):'),
                    posterURL: prompt('Enter the movie poster URL:'),
                    rating: parseFloat(prompt('Enter the movie rating:')),
                  })
                }
              >
                Add New Movie
              </button>
            </div>
          }
        />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
};

export default App;