const vietnam = document.querySelector(".language .vietnam");
const england = document.querySelector(".language .england");

const headerDesc = document.querySelector(".header .desc");
const headerAccount = document.querySelector(".header #account");
const headerSearchInput = document.querySelector(".header-search input");
const headerMainList = document.querySelectorAll(".header-main .list li");
const headerMainNavHome = document.querySelector(".header-main #navHome");
const headerMainButtonPage = document.querySelector(".header-main #button-page");
const headerMainHome = document.querySelector(".header-main #home");
const headerMainAbout = document.querySelector(".header-main #about");
const headerMainPages = document.querySelector(".header-main #pages");
const headerMainShop = document.querySelector(".header-main #shop");
const headerMainBlog = document.querySelector(".header-main #blog");
const headerMainContact = document.querySelector(".header-main #contact");
const breadcrumbTitle = document.querySelector(".breadcrumb .title");
const breadcrumbA = document.querySelector(".breadcrumb a");
const breadcrumbSpan = document.querySelector(".breadcrumb span");
const cartTitle = document.querySelector(".cart .title");
const cartInnerTitlePB = document.querySelectorAll(".cart .inner-title p b");
const buttonBuy = document.querySelector("#button-buy");
const footerFooterTopP = document.querySelector(".footer .footer-top p");
const footerFooterTopBoxH4 = document.querySelectorAll(".footer .footer-top .box h4");
const footerFooterTopBoxListLiA = document.querySelectorAll(".footer .footer-top .box .list li a");
const footerFooterTopBoxFourListLi2 = document.querySelector(".footer .footer-top .box-four .list li:nth-child(2)");

vietnam.addEventListener("click", () => {
  window.location.reload();
});

england.addEventListener("click", () => {
  headerDesc.innerHTML = "World Wide Completely Free Returns and Shipping";
  headerAccount.innerHTML = "Account";
  headerSearchInput.setAttribute("placeholder", "Search");
  console.log(headerMainList);
  headerMainList.forEach((item, idx) => {
    if (idx == 0) item.innerHTML = "HOME";
    else if (idx == 1) item.innerHTML = "ABOUT";
    else if (idx == 2) item.innerHTML = "PAGES";
    else if (idx == 3) item.innerHTML = "SHOP";
    else if (idx == 4) item.innerHTML = "BLOG";
    else item.innerHTML = "CONTACT";
  });
  headerMainNavHome.innerHTML = "HOME";
  headerMainButtonPage.innerHTML = "Page";
  headerMainHome.innerHTML = "Home";
  headerMainAbout.innerHTML = "About";
  headerMainPages.innerHTML = "Pages";
  headerMainShop.innerHTML = "Shop";
  headerMainBlog.innerHTML = "Blog";
  headerMainContact.innerHTML = "Contact";
  breadcrumbTitle.innerHTML = "Cart";
  breadcrumbA.innerHTML = "HOME";
  breadcrumbSpan.innerHTML = "CART";
  cartTitle.innerHTML = "Your Cart";
  cartInnerTitlePB.forEach((item, idx) => {
    if (idx == 0) item.innerHTML = "Image";
    else if (idx == 1) item.innerHTML = "Name";
    else if (idx == 2) item.innerHTML = "Price";
    else if (idx == 3) item.innerHTML = "Quantity";
    else item.innerHTML = "Action";
  });
  buttonBuy.innerHTML = "Buy";

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