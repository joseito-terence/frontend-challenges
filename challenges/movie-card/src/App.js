import MovieCard from "./components/MovieCard.js";
import { data } from './data.js';

export default function App() {
  return data
    .map(MovieCard)
    .join(' ');
}
