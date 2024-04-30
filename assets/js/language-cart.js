const vietnam = document.querySelector(".language .vietnam");
const england = document.querySelector(".language .england");

const headerDesc = document.querySelector(".header .desc");


const footerFooterTopP = document.querySelector(".footer .footer-top p");
const footerFooterTopBoxH4 = document.querySelectorAll(".footer .footer-top .box h4");
const footerFooterTopBoxListLiA = document.querySelectorAll(".footer .footer-top .box .list li a");
const footerFooterTopBoxFourListLi2 = document.querySelector(".footer .footer-top .box-four .list li:nth-child(2)");

vietnam.addEventListener("click", () => {
  window.location.reload();
});

england.addEventListener("click", () => {
  headerDesc.innerHTML = "World Wide Completely Free Returns and Shipping";
  


  footerFooterTopP.innerHTML = "The technology device you are using is our product.";
  footerFooterTopBoxH4.forEach((item, idx) => {
    if (idx == 0) item.innerHTML = "Services";
    else if (idx == 1) item.innerHTML = "Me";
    else item.innerHTML = "Contact";
  });
  footerFooterTopBoxListLiA.forEach((item, idx) => {
    if (idx == 0 || idx == 5) item.innerHTML = "Account";
    else if (idx == 1 || idx == 6) item.innerHTML = "Contact";
    else if (idx == 2 || idx == 7) item.innerHTML = "Card";
    else if (idx == 3 || idx == 8) item.innerHTML = "Shop";
    else item.innerHTML = "Sign up";
  });
  footerFooterTopBoxFourListLi2.innerHTML = "Phone: 0123456789";
});