import { SEARCH_MOVIE_URL } from "../shared/constants";

export default async function getMovies(searchTerm) {
  try {
    const response = await fetch(`${SEARCH_MOVIE_URL}${searchTerm}`);
    const data = await response.json();
    return data.Search;
  } catch (e) {
    return e;
  }
}
