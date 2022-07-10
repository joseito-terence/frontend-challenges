import Card from './Card.js.js';
import { challenges } from '../../data.js.js';


const Grid = () => `
  <div class="grid">
    ${challenges.map(challenge => Card(challenge)).join(' ')}
  </div>
`

export default Grid;
