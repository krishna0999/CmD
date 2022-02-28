import "./App.css";
import Footer from "./components/Footer.js/Footer";
import Header from "./components/Header/Header";
import MoviesBody from "./components/MoviesBody";
import MoviesState from "./context/MoviesState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails/MovieDetails";

function App() {
  return (
    <Router>
      <MoviesState>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <MoviesBody />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/:id"
            element={
              <>
                <MovieDetails /> <Footer />
              </>
            }
          />
        </Routes>
      </MoviesState>
    </Router>
  );
}

export default App;

//https://api.themoviedb.org/3/movie/550?api_key=624fc02e98ece02d693a2c9ba09fa6f8
