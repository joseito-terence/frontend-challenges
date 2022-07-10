import App from "./App.js"

(function main() {
  render(App());
})()

function render(html) {
  document.getElementById('root').innerHTML = html
}
