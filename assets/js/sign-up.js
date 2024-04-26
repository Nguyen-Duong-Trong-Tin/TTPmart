function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

const inputName = document.querySelector(".sign-up #inputName");
const inputEmail = document.querySelector(".sign-up #inputEmail");
const inputPassword = document.querySelector(".sign-up #inputPassword");
const inputReapeatPassword = document.querySelector(".sign-up #inputRepeatPassword");
const inputCheckbox = document.querySelector(".sign-up #inputCheckbox");
const buttonSignUp = document.querySelector(".sign-up #buttonSignUp");

let arr1 = [], arr2 = [];
for (let i = 1; i < 101; i++) {
  arr1.push(getCookie(`em${i}`));
  arr2.push(getCookie(`mk${i}`));
}

buttonSignUp.addEventListener("click", () => {
  if (inputName.value === "") {
    inputName.focus();
  }
  else if (inputEmail.value === "" || inputEmail.value.indexOf("@") == -1) {
    inputEmail.focus();
  }
  else if (inputPassword.value === "") {
    inputPassword.focus();
  }
  else if (inputReapeatPassword.value === "" || inputReapeatPassword.value !== inputPassword.value) {
    inputReapeatPassword.focus();
  }
  else if (!inputCheckbox.checked) {
    alert("Không thể đăng ký do bạn không đồng ý điều khoản");
  }
  else {
    const ok = !arr1.some((item) => {
      return item === inputName.value;
    });
    if (ok) {
      const len = arr1.filter((item) => {
        return item !== undefined;
      }).length;
      console.log(len);
      setCookie(`em${len + 1}`, inputEmail.value, 100);
      setCookie(`mk${len + 1}`, inputPassword.value, 100);
      alert("Tạo tài khoản thành công");
    }
    else {
      confirm("Tên tài khoản đã tồn tại");
    }
  }
});