import  { movie } from "../routes/index.tsx"
import Peliculas from "./Peliculas.tsx";

type Props = {
    movies: movie[],
    page: string,
    query: string
}

export default function Pagina({movies, page, query}:Props) {
    return (
        <div class="mainFlex">
            <form method="GET" action="/" style={{padding: "20px 20px"}}>
                <div class="containerFlex">
                    <input name="movieName" class="inputStyle" type="text" value={query} placeholder="Nombre de pelicula" />
                    <br/>
                    <button class="buttonStyleA" type="submit">Buscar</button>
                </div>
                <div class="buttonRow">
                    {[1, 2, 3, 4, 5].map(num => (
                        <button name="page" class="buttonStyleB" type="submit" value={num}>{num}</button>
                    ))}
                </div>
            </form>
            
           
            <div className={`gridStyle${page}`}>
                {movies.map((elem, index) => (
                    <Peliculas key={index} movie={elem} />
                ))}
            </div>
        </div>
    );
}