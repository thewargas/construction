let shop = document.querySelector(".shop");

let lumberBtn = shop.querySelector(".shop__btn_type_lumber");
let metalBtn = shop.querySelector(".shop__btn_type_metal");

let money = document.querySelector(".money");
let closeBtn = money.querySelector(".money__btn-close");
let moneyBtn = money.querySelector(".money__btn");

let offer = document.querySelector(".offer");
let closeBtnOffer = offer.querySelector(".offer__btn-close");
let title = offer.querySelector(".offer__title");
let text = offer.querySelector(".offer__discount-percent");
let firstImage = offer.querySelector("#first-image");
let secondImage = offer.querySelector("#second-image");
let firstText = offer.querySelector("#first-text");
let secondText = offer.querySelector("#second-text");
let firstAmount = offer.querySelector("#first-amount");
let secondAmount = offer.querySelector("#second-amount");

let ch = 0;

function close() {
  money.classList.add("money_disabled");
}
function closeOffer() {
  offer.classList.add("offer_disabled");
}

function lumber() {
  ch = 1;
  title.textContent = "Пиломатериалы";
  text.textContent = "10%";
  firstImage.src = "./images/stroi_3.PNG";
  secondImage.src = "./images/stroi_4.PNG";
  firstText.textContent = "Брус строганный - ";
  secondText.textContent = "Доска сухая - ";
  money.classList.remove("money_disabled");
}

function metal() {
  ch = 2;
  title.textContent = "Металлопрокат";
  text.textContent = "30%";
  firstImage.src = "./images/stroi_5.PNG";
  secondImage.src = "./images/stroi_6.PNG";
  firstText.textContent = "Арматура - ";
  secondText.textContent = "Сетка арматурная - ";
  money.classList.remove("money_disabled");
  summa;
}

function offers() {
  let summa = money.querySelector(".money__form-number").value;
  if (ch == 1) {
    firstAmount.textContent = Math.floor(summa / 900) + " шт.";
    secondAmount.textContent = Math.floor(summa / 1800) + " шт.";
  } else {
    firstAmount.textContent = Math.floor(summa / 1400) + " шт.";
    secondAmount.textContent = Math.floor(summa / 350) + " шт.";
  }
  money.classList.add("money_disabled");
  offer.classList.remove("offer_disabled");
}
lumberBtn.addEventListener("click", lumber);
metalBtn.addEventListener("click", metal);
closeBtn.addEventListener("click", close);
moneyBtn.addEventListener("click", offers);
closeBtnOffer.addEventListener("click", closeOffer);
