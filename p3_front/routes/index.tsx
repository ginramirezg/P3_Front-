import { Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";  
import Pagina from "../components/Pagina.tsx";

export type movie = {
  original_title: string,
  release_date: string,
  backdrop_path: string,
  popularity: number
}

type data = {
  movies: movie[],
  page: string,
  query: string
  error?: string
}

export const handler: Handlers<data> = {
  async GET(req, ctx) {
    const urlParams = new URL(req.url).searchParams;
    const movieName = urlParams.get("movieName") || "";
    const page = urlParams.get("page") || "2";
    const API_KEY = Deno.env.get("API_KEY");

    if (!API_KEY) {
      return ctx.render({ movies: [], error: "API key necesaria", page: page, query: "" });
    }

    const url = `https://api.themoviedb.org/3/search/movie?query=${movieName}`;

    try {
     
      const response = await axios.get(url, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        }
      });
      
      
      return ctx.render({ movies: response.data.results || [], page: page, query: movieName });
    } catch (_e) {
      return ctx.render({ movies: [], error: "Fallo en la API", page: page, query: "" });
    }
  },
};

export default function Home(props: PageProps<data>) {
  const { movies, error, page, query } = props.data;
  
  
  return (
    <div>
      <Pagina movies={movies} page={page} query={query} />
    </div>
  );
}
