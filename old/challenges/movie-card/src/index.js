import App from "./App.js"

render(App());


function render(html) {
  document.getElementById('root').innerHTML = html
}
