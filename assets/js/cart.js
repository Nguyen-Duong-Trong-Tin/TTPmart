import { getCookie, setCookie } from "./cookies.js";
import { listProduct } from "./variable.js";

var listItem = getCookie("cart").split(",");
let htmls = "";

// Cart
listItem.forEach((item) => {
  if (item !== "") {
    htmls += `
      <div class="item wow fadeInUp">
        <div class="row">
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">
            <div class="inner-img">
              <img src="${listProduct[item - 1].thumbnail}" alt="${listProduct[item - 1].title}">
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">
            <div class="inner-title">
              <h4 class="title">${listProduct[item - 1].title}</h4>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2">
            <div class="inner-price">
              <p class="price">$${listProduct[item - 1].price}</p>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2">
            <div class="inner-quantity">
              <div class="quantity">
                <button id="minusQuantity-${item}" class="button button-mi-ad button-minus">
                  <i class="fa-solid fa-minus"></i>
                </button>
                <p id="quantity-${item}">1</p>
                <button id="addQuantity-${item}" class="button button-mi-ad button-add">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2">
            <div id="del-${item}" class="inner-action">
              <i class="fa-solid fa-trash"></i>
            </div>
          </div>
        </div>
      </div>
    `;
  }
});

const cartInnerList = document.querySelector(".cart .inner-list");
cartInnerList.innerHTML = htmls;

// Total Money
htmls = "";
listItem.forEach((item) => {
  if (item !== "") {
    htmls += `
      <div class="item">
        <div class="row">
          <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-6">
            <div class="inner-title">
              <h4 class="title">${listProduct[item - 1].title}</h4>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-3">
            <div class="inner-price">
              <p id="totalMoneyPrice-${item}" class="price">$${listProduct[item - 1].price}</p>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-3">
            <div class="inner-quantity">
              <p id="totalMoneyQuantity-${item}" class="quantity">1</p>
            </div>
          </div>
        </div>
      </div>
    `;
  };
});

const totalMoney = document.querySelector(".total-money .inner-list");
totalMoney.innerHTML = htmls;

const calculator = () => {
  let money = BigInt(0);
  listItem.forEach((item) => {
    if (item !== "") {
      const quantity = document.querySelector(`#totalMoneyQuantity-${item}`);
      const price = document.querySelector(`#totalMoneyPrice-${item}`);
      const q = BigInt(Number.parseInt(quantity.innerHTML));
      const p = BigInt(Number.parseInt(price.innerHTML.slice(1)));

      money += p*q;
    }
  });
  document.querySelector("#total").innerHTML = `
    ${money} $
  `;
};

calculator();

document.querySelector("#button-buy").addEventListener("click", () => {
  alert("Mua hàng thành công! Kiểm tra thông tin đơn hàng trong gmail của bạn");
});

// Quantity
listItem.forEach((item) => {
  if (item !== "") {
    const btnMinus = document.querySelector(`#minusQuantity-${item}`);
    const quantity = document.querySelector(`#quantity-${item}`);
    const btnAdd = document.querySelector(`#addQuantity-${item}`);
    let cnt = Number.parseInt(quantity.innerHTML);;
    btnMinus.addEventListener("click", () => {
      if (cnt > 1) {
        --cnt;
      }
      quantity.innerHTML = cnt + "";
      document.querySelector(`#totalMoneyQuantity-${item}`).innerHTML = cnt;
      calculator();
    });
    btnAdd.addEventListener("click", () => {
      if (cnt < listProduct[item - 1].stock) {
        ++cnt;
      }
      quantity.innerHTML = cnt + "";
      document.querySelector(`#totalMoneyQuantity-${item}`).innerHTML = cnt;
      calculator();
    });
  }
});

// Delete
for (let i = 0; i < listItem.length; i++) {
  if (listItem[i] !== "") {
    const btnDel = document.querySelector(`#del-${listItem[i]}`);
    btnDel.addEventListener("click", () => {
      listItem = listItem.filter((item) => {
        return item != btnDel.getAttribute("id").slice(btnDel.getAttribute("id").indexOf("-") + 1);
      });
      setCookie("cart", [], -1);
      setCookie("cart", listItem, 100);
      window.location.reload();
    });
  }
}