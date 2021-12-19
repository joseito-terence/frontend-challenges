
const Card = ({ src, title, image, date }) => `
  <div class="card">
    <a href="/frontend-challenges/challenges/${src}/">
      <div class="card-background"></div>
      <div class="card-image">
        <img src='challenges/${src}/design/${image}' />
      </div>
      <div class="card-body">
        <div class="card-info">
          <h2 class="card-title">
            ${title}
          </h2>
          <small class="card-text">  
            ${date}
          </small>
        </div>
        <div class="card-buttons">
          <a href="https://github.com/joseito-terence/frontend-challenges/tree/master/challenges/${src}/" class="btn">Code</a>
          <a href="/frontend-challenges/challenges/${src}/" class="btn">View</a>
        </div>
      </div>
    </a>
  </div>
`

export default Card;
