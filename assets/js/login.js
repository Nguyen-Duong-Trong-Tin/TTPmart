import { getCookie } from "./cookies.js";

const inputEmailSignUp = document.querySelector(".login #inputEmail");
const inputPasswordSignUp = document.querySelector(".login #inputPassword");
const buttonLogin = document.querySelector(".login #buttonLogin");

let arr1 = [], arr2 = [];
for (let i = 1; i < 101; i++) {
  arr1.push(getCookie(`em${i}`));
  arr2.push(getCookie(`mk${i}`));
}

buttonLogin.addEventListener("click", () => {
  let ok;
  for (let i = 0; i < arr1.length; i++) {
    if (inputEmailSignUp.value === "" || inputEmailSignUp.value.indexOf("@") == -1) {
      inputEmailSignUp.focus();
    }
    else if (inputPasswordSignUp === "") {
      inputPasswordSignUp.focus();
    }
    else if (arr1[i] === inputEmailSignUp.value && arr2[i] === inputPasswordSignUp.value) {
      ok = true;
      break;
    }
    else {
      ok = false;
    }
  }
  if (ok != undefined) {
    if (ok) {
      alert("Đăng nhập thành công");
    }
    else {
      alert("Đăng nhập thất bại");
    }
  }
})