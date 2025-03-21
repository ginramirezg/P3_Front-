import { movie } from "../routes/index.tsx";

type Props = {
    movie: movie
}

export default function Peliculas({movie}:Props) {
    return (
        <div class="pelicula">
            <h2>{movie.original_title}</h2>
            <img src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`} alt={movie.original_title} />
            <h3>Fecha de estreno: {movie.release_date}</h3>
            <div class="pBar" style={{ width: `${movie.popularity * 10}%` }}>
                <div class="skill">{movie.popularity}</div> 
            </div>
        </div>
    )
}