const currencyElementOne = document.getElementById("currency-one");
const amountElementOne = document.getElementById("amount-one");
const currencyElementTwo = document.getElementById("currency-two");
const amountElementTwo = document.getElementById("amount-two");

const rateElement = document.getElementById("rate");

const swap = document.getElementById("swap");

// Fech exchange rates and update the Dom
function caclulate() {
  // Getting the value
  const currency_one = currencyElementOne.value;
  const currency_two = currencyElementTwo.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const rate = data.rates[currency_two];

      rateElement.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountElementTwo.value = (amountElementOne.value * rate).toFixed(2);
    });
}

// Event Listeners
currencyElementOne.addEventListener("change", caclulate);
amountElementOne.addEventListener("input", caclulate);
currencyElementTwo.addEventListener("change", caclulate);
amountElementTwo.addEventListener("input", caclulate);

swap.addEventListener("click", () => {
  const temp = currencyElementOne.value;
  currencyElementOne.value = currencyElementTwo.value;
  currencyElementTwo.value = temp;
  caclulate();
});
caclulate();
