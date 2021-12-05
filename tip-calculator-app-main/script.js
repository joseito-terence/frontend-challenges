let bill = 0, tip = 0, people = 1;
const bill_node = document.querySelector('#bill');
const people_node =  document.querySelector('#people');

(function main() {
  handleBill();
  handlePeople();
  handleTip();
  handleCustomTip();
  handleReset();

  refresh();
})();

function handleBill() {
  bill_node.addEventListener('keyup', e => {
    bill = Number(e.target.value);
    refresh();
  })
}

function handlePeople() {
    people_node.addEventListener('keyup', e => {
      people = parseInt(e.target.value) || 1;
      refresh();
    })
}

function refresh() {
  const bill_per_person = bill / people;
  const tip_amount = bill_per_person * tip / 100;
  const total = bill_per_person + tip_amount;
  console.log({ bill_per_person, tip_amount, total, bill, people, tip });
  document.querySelector('#tip-amt').innerHTML = '$' + tip_amount.toFixed(2);
  document.querySelector('#total').innerHTML = '$' + total.toFixed(2);

}

function handleTip() {
  const tip_radio_btns = document.querySelectorAll('input[name="tip"]');

  console.log(tip_radio_btns);
  Array.from(tip_radio_btns)
    .forEach(radio_btn => {
      radio_btn.addEventListener('click', e => {
        tip = parseInt(e.target.value);
        refresh();
      })
    })
}

function handleCustomTip() {
  const custom_tip = document.querySelector('#custom-tip');
  const custom_tip_radio = document.querySelector('#custom-tip-radio');
  
  custom_tip.addEventListener('focus', () => custom_tip_radio.checked = true);
  custom_tip.addEventListener('keyup', e => {
    tip = Number(e.target.value)
    refresh();  
  });
}

function handleReset() {
  document.querySelector('.btn-reset')
    .addEventListener('click', () => {
      people = 1;
      bill = tip = 0;

      people_node.value = '';
      bill_node.value = '';

      refresh();
    })

}
