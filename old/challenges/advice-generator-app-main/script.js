const $ = (selector) => document.querySelector(selector);

(function main() {
  init()

  // $('#button').addEventListener('click', init)
})()

async function init() {
  const advice = await fetchAdvice()

  refreshUI(advice)
}

function fetchAdvice() { 
  return fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => data.slip)
}

function refreshUI({ id, advice}) {
  $('.card h1').innerText = `Advice #${id}`
  $('.card p').innerText = `“${advice}”`
}



