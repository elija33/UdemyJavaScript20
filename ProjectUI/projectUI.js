const main = document.getElementById("main");
const addUserBtn = document.getElementById("add_user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show_millionaires");
const showBrillionsBtn = document.getElementById("show_brillions");
const sortBtn = document.getElementById("sort");
const sortless = document.getElementById("sortless");
const calculateWealthBtn = document.getElementById("calculate_wealth");

let Persondata = [];

getRandomUser();

// Fetch random user and add money
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000000),
  };

  addData(newUser);
}

// Double everyones money
function doubleMoney() {
  Persondata = Persondata.map((user) => {
    return { ...user, money: user.money * 2 };
  });
  updateDOM();
}

// Add new obj to data array
function addData(obj) {
  Persondata.push(obj);

  updateDOM();
}

// Update DOM
function updateDOM(providedData = Persondata) {
  // clear main div
  main.innerHTML = "<h2><stron>Person</stron>Wealth</h2>";

  providedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

// Format number as money
function formatMoney(number) {
  return `$ ${number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
}

// Event Listeners to add user
addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
