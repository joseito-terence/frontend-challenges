
const MovieCard = ({
  title,
  image,
  image_wide,
  rating,
  duration,
  year
}) => `
  <div class="card">
    <div 
      class="card__imageContainer" 
      style="background-image: url('${image_wide}')"
    >
    <img 
      src="${image}" alt="card_image"
      class="card__image-portrait"
    >
    <div class="card__imageOverlay">

      <div class="movie">
        <div class="movie__name">
          ${title}
        </div>
        <div class="movie__info text-truncate">
          <div class="movie__rating">${rating}</div>
          <div class="movie__duration">${duration}</div>
          <div class="movie__infoSeparator">·</div>
          <div class="movie__year">${year}</div>
        </div>
      </div>

    </div>

    </div>
    <h1 class="card__title text-truncate">${title}</h1>
  </div>
`

export default MovieCard;
