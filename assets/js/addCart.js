import { getCookie, setCookie } from "./cookies.js";

const trolley = document.querySelector("#trolley");
const arrCart = getCookie("cart").split(",");
const paginationPrev = document.querySelector("#paginationPrev");
const paginationNext = document.querySelector("#paginationNext");

const handleAdd = () => {
  setTimeout(() => {
    const items = document.querySelectorAll(".products .product__item");
    items.forEach((item) => {
      item.addEventListener("click", () => {
        if (!arrCart.includes(item.id)) {
          arrCart.push(item.id);
          arrCart.sort();
          setCookie("cart", [], "-1");
          setCookie("cart", arrCart, 100);
          
          document.querySelector("#alert-bought").classList.add("active");
          setTimeout(() => {
            document.querySelector("#alert-bought p:nth-child(2)").innerHTML = "1s";
          }, 1000);
          setTimeout(() => {
            document.querySelector("#alert-bought").classList.remove("active");
            document.querySelector("#alert-bought p:nth-child(2)").innerHTML = "2s";
          }, 2000);
        }
        else {
          document.querySelector("#alert-bought").classList.add("warning");
          setTimeout(() => {
            document.querySelector("#alert-bought p:nth-child(2)").innerHTML = "1s";
          }, 1000);
          setTimeout(() => {
            document.querySelector("#alert-bought").classList.remove("warning");
            document.querySelector("#alert-bought p:nth-child(2)").innerHTML = "2s";
          }, 2000);
        }
      })
    })
  }, 2000);
}
handleAdd();

paginationPrev.addEventListener("click", () => {
  handleAdd();
});
paginationNext.addEventListener("click", () => {
  handleAdd();
})
